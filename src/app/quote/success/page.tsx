// /app/quote/success/page.tsx
"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ravenci-primary mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading your confirmation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-5">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-500"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => router.push("/quote")}
            className="w-full bg-ravenci-primary text-white py-2 px-4 rounded-lg hover:bg-ravenci-primary/80 transition-colors"
          >
            Back to Quote
          </button>
        </div>
      </div>
    );
  }

  const isInstallmentPlan =
    sessionData?.metadata?.payment_type === "installments";

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-5">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {isInstallmentPlan
              ? "Installment Plan Set Up!"
              : "Payment Successful!"}
          </h1>
          <p className="text-gray-600">
            {isInstallmentPlan
              ? "Your installment plan has been set up successfully. You'll receive automatic invoices each month."
              : "Thank you for your purchase. We've received your payment and will be in touch soon."}
          </p>
        </div>

        {sessionData && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg text-left">
            <h3 className="font-semibold mb-3">Order Summary:</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Service:</span>
                <span className="font-medium">
                  {sessionData.metadata?.service_name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">
                  {isInstallmentPlan ? "First Payment:" : "Amount:"}
                </span>
                <span className="font-medium">
                  ${((sessionData.amount_total || 0) / 100).toFixed(2)}
                </span>
              </div>

              {isInstallmentPlan && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Plan:</span>
                    <span className="font-medium">
                      {sessionData.metadata?.installment_plan}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Payments:</span>
                    <span className="font-medium">
                      {sessionData.metadata?.total_installments}
                    </span>
                  </div>
                </>
              )}

              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="font-medium text-green-600 capitalize">
                  {sessionData.payment_status}
                </span>
              </div>

              {sessionData.customer_email && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">
                    {sessionData.customer_email}
                  </span>
                </div>
              )}

              {sessionData.metadata?.comments && (
                <div className="pt-2 border-t">
                  <span className="text-gray-600 block mb-1">Notes:</span>
                  <span className="font-medium text-sm">
                    {sessionData.metadata.comments}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            {isInstallmentPlan
              ? "A confirmation email has been sent with your installment schedule."
              : "A confirmation email has been sent to your email address."}
          </p>

          <div className="space-y-2">
            <button
              onClick={() => router.push("/")}
              className="w-full bg-ravenci-primary text-white py-2 px-4 rounded-lg hover:bg-ravenci-primary/80 transition-colors"
            >
              Return to Home
            </button>

            <button
              onClick={() => router.push("/quote")}
              className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Create Another Quote
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ravenci-primary mx-auto mb-4"></div>
        <p className="text-neutral-600">Loading...</p>
      </div>
    </div>
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
