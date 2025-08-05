// /app/api/webhooks/stripe/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err);
    return NextResponse.json(
      {
        error: `Webhook Error: ${
          err instanceof Error ? err.message : "Unknown error"
        }`,
      },
      { status: 400 },
    );
  }

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        await handleSuccessfulPayment(session);
        break;

      case "customer.subscription.created":
        const subscription = event.data.object as Stripe.Subscription;
        if (subscription.metadata?.payment_type === "installments") {
          await setupInstallmentCancellation(subscription);
        }
        break;

      case "invoice.payment_succeeded":
        const invoice = event.data.object;
        if (invoice && "id" in invoice) {
          await handleInstallmentPayment(invoice.id as string);
        }
        break;

      case "customer.subscription.deleted":
        const deletedSubscription = event.data.object as Stripe.Subscription;
        if (deletedSubscription.metadata?.payment_type === "installments") {
          await handleCompletedInstallments(deletedSubscription);
        }
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }
}

async function setupInstallmentCancellation(subscription: Stripe.Subscription) {
  try {
    const totalInstallments = parseInt(
      subscription.metadata?.total_installments || "0",
    );

    if (totalInstallments > 0) {
      const startDate = new Date(subscription.created * 1000);
      const cancelDate = new Date(startDate);
      cancelDate.setMonth(cancelDate.getMonth() + totalInstallments);

      await stripe.subscriptions.update(subscription.id, {
        cancel_at: Math.floor(cancelDate.getTime() / 1000),
        metadata: {
          ...subscription.metadata,
          scheduled_cancel_date: cancelDate.toISOString(),
        },
      });

      console.log(
        `✅ Installment subscription ${subscription.id} will auto-cancel after ${totalInstallments} payments`,
      );
    }
  } catch (error) {
    console.error("Error setting up installment cancellation:", error);
  }
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  try {
    const paymentInfo = {
      sessionId: session.id,
      customerEmail: session.customer_email,
      serviceName: session.metadata?.service_name,
      amount: (session.amount_total || 0) / 100,
      paymentType: session.metadata?.payment_type,
      comments: session.metadata?.comments,
    };

    console.log("✅ Payment successful:", paymentInfo);

    // Optional: Send custom email here if you want branded emails
    // await sendCustomConfirmationEmail(paymentInfo);

    // Optional: Update your app state here
    // await updateApplicationState(paymentInfo);
  } catch (error) {
    console.error("Error handling successful payment:", error);
  }
}

async function handleInstallmentPayment(invoiceId: string) {
  try {
    const invoice = await stripe.invoices.retrieve(invoiceId, {
      expand: ["subscription"],
    });

    // FIXED: Cast to any to access expanded property, then validate
    const invoiceWithExpanded = invoice as any;

    if (!invoiceWithExpanded.subscription) {
      console.error("No subscription found in invoice");
      return;
    }

    // When expanded, subscription will be an object, not a string
    if (typeof invoiceWithExpanded.subscription === "string") {
      console.error("Subscription was not expanded properly");
      return;
    }

    const subscription =
      invoiceWithExpanded.subscription as Stripe.Subscription;

    if (subscription?.metadata?.payment_type === "installments") {
      const totalInstallments = parseInt(
        subscription.metadata.total_installments || "0",
      );

      // Get payment count from Stripe
      const invoices = await stripe.invoices.list({
        subscription: subscription.id,
        status: "paid",
        limit: 100,
      });

      const currentInstallment = invoices.data.length;

      console.log(
        `✅ Installment payment ${currentInstallment}/${totalInstallments} received for subscription ${subscription.id}`,
      );

      // Optional: Send progress email
      // if (currentInstallment < totalInstallments) {
      //   await sendInstallmentProgressEmail({
      //     customerEmail: invoice.customer_email,
      //     currentPayment: currentInstallment,
      //     totalPayments: totalInstallments,
      //     remainingAmount: (totalInstallments - currentInstallment) * (invoice.amount_paid / 100)
      //   });
      // }
    }
  } catch (error) {
    console.error("Error handling installment payment:", error);
  }
}

async function handleCompletedInstallments(subscription: Stripe.Subscription) {
  try {
    console.log(
      "✅ Installment plan completed for subscription:",
      subscription.id,
    );

    // Optional: Send completion email
    // await sendInstallmentCompletionEmail({
    //   customerId: subscription.customer,
    //   serviceName: subscription.metadata?.service_name,
    // });

    // Optional: Trigger any completion actions in your app
    // await triggerServiceActivation(subscription.metadata?.service_id);
  } catch (error) {
    console.error("Error handling completed installments:", error);
  }
}
