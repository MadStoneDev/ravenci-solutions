"use client";

import Link from "next/link";
import { IconRefresh } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-col">
      <section className="flex min-h-[500px] items-center justify-center bg-background px-5 py-32 md:px-12 lg:px-20">
        <article className="flex max-w-sm flex-col items-center text-center">
          <h1 className="text-display-m text-foreground">Oops</h1>
          <h2 className="mt-2 text-heading-s text-foreground">
            Something went wrong.
          </h2>
          <p className="mt-8 text-body text-muted-foreground">
            We hit an unexpected issue loading this page. You can try again or
            head back to safety.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button onClick={reset} variant="primary" size="lg">
              <IconRefresh size={18} />
              Try again
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/">Go home</Link>
            </Button>
          </div>
        </article>
      </section>
    </main>
  );
}
