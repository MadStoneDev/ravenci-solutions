type ContactFormData = {
  name: string;
  email: string;
  message: string;
  budget: string;
};

export async function sendContactForm(data: ContactFormData) {
  try {
    const response = await fetch("/api/launch-your-vision", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message");
    }

    return result;
  } catch (error) {
    // Preserve the original error message
    throw error instanceof Error ? error : new Error("Network error");
  }
}
