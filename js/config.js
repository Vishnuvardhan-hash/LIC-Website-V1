// ============================================================
// SITE CONFIG — edit ONLY this file to update personal details.
// Every page reads from here automatically.
// ============================================================

const SITE_CONFIG = {
  // --- Identity ---
  agentName: "G Chandra Shekar",                 // e.g. "K. Venkat Rao"
  designation: "LIC Development Officer",
  agencySince: 2000,
  developmentOfficerSince: 2018,
  teamSize: 30,
  city: "Hyderabad",
  branchDetails: "LIC Branch Office, [Habsiguda & CB12]",
  licenseNumber: "[Agency / DO Code]",     // shown in footer for compliance

  // --- Contact ---
  phone: "+91 93933 36695",
  whatsappNumber: "919393336695",          // digits only, with country code, no +
  email: "gshekarlic@gmail.com",
  officeAddress: "Sri Sai Nilayam, Plot No-3/1 & 3/2, Street No.4, Habsiguda, Hyderabad, Telangana – 500007",

  // --- Forms ---
  // Sign up free at https://formspree.io → create a form → paste its ID here.
  // Until then the form shows a friendly "coming soon" message.
  formspreeId: "",                          // e.g. "xqkrgpay"

  // --- Social (leave "" to hide the icon) ---
  youtube: "",
  facebook: "",
  linkedin: "",
};

// WhatsApp deep-link helper
function waLink(message) {
  const msg = encodeURIComponent(message || "Hi, I visited your website and would like to know more about LIC policies.");
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${msg}`;
}
