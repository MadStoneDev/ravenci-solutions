"use client";

import { IconArrowLeft } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col">
      <section className="flex min-h-[500px] items-center justify-center bg-background px-5 py-32 md:px-12 lg:px-20">
        <article className="flex max-w-sm flex-col items-center text-center">
          <h1 className="text-display-m text-foreground">404</h1>
          <h2 className="mt-2 text-heading-s text-foreground">
            Ok, that&apos;s embarrassing.
          </h2>
          <p className="mt-8 text-body text-muted-foreground">
            We have no idea how you got here, but let&apos;s get you back to
            where you were last.
          </p>
          <Button
            onClick={() => window.history.back()}
            variant="primary"
            size="lg"
            className="mt-10"
          >
            <IconArrowLeft size={18} />
            Go back
          </Button>
        </article>
      </section>
    </main>
  );
}
