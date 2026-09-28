// /app/quote/success/page.tsx
"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

interface SessionData {
  id: string;
  amount_total: number;
  currency: string;
  customer_email: string;
  payment_status: string;
  metadata: {
    service_name?: string;
    payment_type?: string;
    installment_plan?: string;
    comments?: string;
    total_installments?: string;
  };
}

function SuccessPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sessionId) {
      // Fetch session details to show confirmation
      fetch(`/api/checkout-session?session_id=${sessionId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch session details");
          }
          return res.json();
        })
        .then((data: SessionData) => {
          setSessionData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching session:", err);
          setError("Failed to load confirmation details");
          setLoading(false);
        });
    } else {
      setError("No session ID provided");
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-accent"></div>
          <p className="text-body text-muted-foreground">
            Loading your confirmation...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-5 py-14 md:px-12 md:py-20 lg:px-20">
        <div className="w-full max-w-md rounded-sm border border-border bg-card p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
            <svg
              className="h-8 w-8 text-destructive"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <h1 className="mb-2 text-heading-m text-foreground">
            Something went wrong
          </h1>
          <p className="mb-6 text-body text-muted-foreground">{error}</p>
          <Button
            variant="primary"
            className="w-full"
            onClick={() => router.push("/quote")}
          >
            Back to Quote
          </Button>
        </div>
      </main>
    );
  }

  const isInstallmentPlan =
    sessionData?.metadata?.payment_type === "installments";

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-14 md:px-12 md:py-20 lg:px-20">
      <div className="w-full max-w-md rounded-sm border border-border bg-card p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <svg
              className="h-8 w-8 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h1 className="mb-2 text-heading-m text-foreground">
            {isInstallmentPlan
              ? "Installment Plan Set Up"
              : "Payment Successful"}
          </h1>
          <p className="text-body text-muted-foreground">
            {isInstallmentPlan
              ? "Your installment plan has been set up successfully. You'll receive automatic invoices each month."
              : "Thank you for your purchase. We've received your payment and will be in touch soon."}
          </p>
        </div>

        {sessionData && (
          <div className="mb-6 rounded-sm border border-border bg-muted p-4 text-left">
            <h2 className="mb-3 text-heading-s text-foreground">
              Order Summary
            </h2>
            <div className="space-y-2 text-small">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service:</span>
                <span className="font-medium text-foreground">
                  {sessionData.metadata?.service_name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {isInstallmentPlan ? "First Payment:" : "Amount:"}
                </span>
                <span className="font-medium text-foreground">
                  ${((sessionData.amount_total || 0) / 100).toFixed(2)}
                </span>
              </div>

              {isInstallmentPlan && (
                <>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Payment Plan:</span>
                    <span className="font-medium text-foreground">
                      {sessionData.metadata?.installment_plan}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Total Payments:
                    </span>
                    <span className="font-medium text-foreground">
                      {sessionData.metadata?.total_installments}
                    </span>
                  </div>
                </>
              )}

              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-medium capitalize text-accent">
                  {sessionData.payment_status}
                </span>
              </div>

              {sessionData.customer_email && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium text-foreground">
                    {sessionData.customer_email}
                  </span>
                </div>
              )}

              {sessionData.metadata?.comments && (
                <div className="border-t border-border pt-2">
                  <span className="mb-1 block text-muted-foreground">
                    Notes:
                  </span>
                  <span className="text-small font-medium text-foreground">
                    {sessionData.metadata.comments}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="space-y-3">
          <p className="text-small text-muted-foreground">
            {isInstallmentPlan
              ? "A confirmation email has been sent with your installment schedule."
              : "A confirmation email has been sent to your email address."}
          </p>

          <div className="space-y-2">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => router.push("/")}
            >
              Return to Home
            </Button>

            <Button
              variant="secondary"
              className="w-full"
              onClick={() => router.push("/quote")}
            >
              Create Another Quote
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-accent"></div>
        <span className="sr-only">Loading</span>
      </div>
    </main>
  );
}

// Main component with Suspense boundary
export default function SuccessPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SuccessPageContent />
    </Suspense>
  );
}
