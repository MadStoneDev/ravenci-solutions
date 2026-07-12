import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

/**
 * Fire a single canonical lead event when a lead form submits successfully.
 * Sends to GA4 directly (sendGAEvent) and to the GTM dataLayer (sendGTMEvent)
 * so whichever pipeline is configured records the conversion.
 *
 * GA4 Admin step: mark `generate_lead` as the Key Event, and un-mark whatever
 * event is currently flagged as key but auto-fires on page load (that's the
 * source of the inflated, unreliable conversion counts).
 */
export function trackLead(formName: string) {
  try {
    sendGAEvent("event", "generate_lead", { form_name: formName });
  } catch {
    // analytics must never break a form submission
  }
  try {
    sendGTMEvent({ event: "generate_lead", form_name: formName });
  } catch {
    // no-op
  }
}
