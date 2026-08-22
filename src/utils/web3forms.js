// src/utils/web3forms.js

export const submitToWeb3Forms = async (data, formSubject = "Bali Yoga Kendra - New Inquiry", formType = "contact") => {
  let accessKey = "";

  if (formType === "checkout" || data.booking_type !== undefined) {
    accessKey = import.meta.env?.VITE_WEB3FORMS_CHECKOUT_KEY;
  } else if (formType === "cta") {
    accessKey = import.meta.env?.VITE_WEB3FORMS_COURSE_CTA_KEY || import.meta.env?.VITE_WEB3FORMS_CONTACT_KEY;
  } else if (formType === "guide") {
    accessKey = import.meta.env?.VITE_WEB3FORMS_GUIDE_KEY || import.meta.env?.VITE_WEB3FORMS_CONTACT_KEY;
  } else {
    accessKey = import.meta.env?.VITE_WEB3FORMS_CONTACT_KEY;
  }

  // Fallback to general master key if specific key not provided
  if (!accessKey) {
    accessKey = import.meta.env?.VITE_WEB3FORMS_KEY || import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY || "0fdb225d-46a5-43c3-8ed3-c4f76d7a570b";
  }

  const payload = {
    access_key: accessKey,
    subject: formSubject,
    from_name: "Bali Yoga Kendra",
    ...data,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Web3Forms submission error:", error);
    return { success: false, message: error?.message || "Failed to submit form" };
  }
};
