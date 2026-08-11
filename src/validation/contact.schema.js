export const validateContact = (formData) => {
  const errors = {};

  const name = formData.name.trim();
  const email = formData.email.trim();
  const message = formData.message.trim();

  // Name validation
  if (!name) {
    errors.name = "Name is required";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (name.length > 50) {
    errors.name = "Name must not exceed 50 characters";
  }

  // Email validation
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email";
  }

  // Message validation
  if (!message) {
    errors.message = "Message is required";
  } else if (message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (message.length > 1000) {
    errors.message = "Message must not exceed 1000 characters";
  }

  return errors;
};