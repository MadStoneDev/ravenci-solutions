"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useEffect, useRef, useState } from "react";

import { sendContactForm } from "@/lib/send-contact-form";

export default function LaunchYourVisionForm() {
  // States
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    budget: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
    budget: false,
  });

  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);

  // Variables
  const budgets = [`1-5k`, `5-10k`, `10-20k`, `20-50k`, `50-100k`, `100k+`];

  // Refs
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Functions
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.target.value === "") {
      setFormErrors({
        ...formErrors,
        [e.target.name]: "This field is required",
      });
    } else {
      setFormErrors({ ...formErrors, [e.target.name]: false });
    }
  };

  async function handleSubmit() {
    setSubmitStatus("loading");

    try {
      await sendContactForm(formData);
      sendGTMEvent({
        event: "contact_form_submit",
        category: "Launch Your Vision",
        action: "Submit",
        label: "Success",
        value: formData.budget.replace(/[^0-9]/g, ""), // Strip non-numeric chars
        status: "success",
      });

      setSubmitStatus("success");
      // Handle success (e.g., show success message, reset form)
    } catch (error) {
      sendGTMEvent({
        event: "contact_form_submit",
        category: "Launch Your Vision",
        action: "Submit",
        label: "Error",
        error_message: error instanceof Error ? error.message : "Unknown error",
        status: "error",
      });

      setSubmitStatus("error");

      console.error("Failed to send message:", error);
    }
  }

  // Effects
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [formData.message]);

  if (submitStatus === "success") {
    return (
      <div
        className={`mt-16 flex flex-col w-full max-w-full lg:max-w-2xl bg-emerald-500 p-4 rounded-2xl text-white`}
      >
        <span className={`text-lg font-bold`}>Thank you.</span>
        <span>
          Your message has been sent successfully! We'll be in touch soon.
        </span>
      </div>
    );
  } else if (submitStatus === "error") {
    return (
      <div
        className={`mt-16 flex flex-col w-full max-w-full lg:max-w-2xl bg-rose-500 p-4 rounded-2xl text-white`}
      >
        <span className={`text-lg font-bold`}>Not what you expected?</span>
        <span>
          Us neither. Please refresh the page and try again later or email us
          directly at{" "}
          <a href={`mailto:hello@ravenci.solutions`} className={`font-bold`}>
            hello@ravenci.solutions
          </a>
          .
        </span>
      </div>
    );
  }

  return (
    <form
      className={`mt-16 flex flex-col w-full max-w-full lg:max-w-2xl`}
      action={handleSubmit}
    >
      <div className={`w-full`}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={`py-4 border-b border-neutral-300 focus:outline-none w-full font-light`}
          required
        />
        <p className={`py-2 text-sm text-red-600`}>{formErrors.name}</p>
      </div>

      <div className={`w-full`}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          className={`py-4 border-b border-neutral-300 focus:outline-none w-full font-light`}
          required
        />
        <p className={`py-2 text-sm text-red-600`}>{formErrors.email}</p>
      </div>

      <div className={`w-full`}>
        <textarea
          ref={textAreaRef}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you make your vision a reality?"
          className={`py-4 border-b border-neutral-300 focus:outline-none resize-none min-w-[40px] w-full font-light`}
          required
        />
        <p className={`py-2 text-sm text-red-600`}>{formErrors.message}</p>
      </div>

      <label className={`my-4`}>Budget</label>
      <div className={`flex flex-wrap gap-4 w-full`}>
        {budgets.map((budget, index) => (
          <p
            key={index}
            onClick={() => {
              setSelectedBudget(index);
              setFormData({ ...formData, budget: budgets[index] });
            }}
            className={`cursor-pointer px-4 py-2 rounded-full border border-neutral-300 hover:border-ravenci-dark ${
              selectedBudget === index
                ? "bg-ravenci-dark border-ravenci-dark text-white"
                : ""
            } transition-all duration-300 ease-in-out`}
          >
            {budget}
          </p>
        ))}
      </div>

      <button
        disabled={submitStatus === "loading"}
        className={`group relative mt-10 px-6 py-3 grid place-content-center bg-ravenci-primary disabled:bg-ravenci-primary/50 rounded-full w-fit text-white hover:not-disabled:text-ravenci-primary transition-all duration-300 ease-in-out overflow-hidden`}
      >
        {submitStatus === "loading" ? (
          <span className={`z-20`}>Sending...</span>
        ) : (
          <span className={`z-20`}>Get in Touch</span>
        )}

        <div
          className={`absolute top-0 bottom-full group-hover:not-disabled:bottom-0 left-0 right-0 bg-white z-0 transition-all duration-500 ease-in-out`}
        ></div>

        {/* Border */}
        <div
          className={`absolute top-0 bottom-0 left-0 right-0 rounded-full border-2 border-ravenci-primary ${
            submitStatus === "loading" && "border-0"
          } z-10 transition-all duration-500 ease-in-out`}
        ></div>
      </button>
    </form>
  );
}
