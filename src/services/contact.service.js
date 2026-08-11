import emailjs from "@emailjs/browser";

export const submitContactForm = async (formData) => {
  const response = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
    {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }
  );

  return response;
};