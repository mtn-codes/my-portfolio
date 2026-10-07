// EmailJS configuration shared by both desktop and mobile Contact forms.
// TODO: move serviceId / templateId / publicKey to env vars (e.g. VITE_EMAILJS_*)
//       to keep keys out of the source bundle. Currently bundled because EmailJS
//       public keys are designed to be client-side anyway.

export const EMAILJS_CONFIG = {
  serviceId: "service_9c09v8d",
  templateId: "template_z5hgwcs",
  publicKey: "JLbxXRTE6OGFflAQB",
};

export const CONTACT_INFO = {
  email: "tahanaghdi.dev@gmail.com",
  phone: "+98 904 451 9594",
  location: "Iran",
  subtitle:
    "Whether you have a video production project, need AI automation & agents, require a modern web application, or want to build smart hardware gadgets — my inbox is always open.",
};