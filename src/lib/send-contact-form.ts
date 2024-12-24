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

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Something went wrong");
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
}