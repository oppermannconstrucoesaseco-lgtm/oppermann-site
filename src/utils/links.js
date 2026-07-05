import { company, whatsappMessage } from "../data/siteContent.js";

export function getWhatsAppUrl(message = whatsappMessage) {
  return `https://wa.me/${company.phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailToUrl() {
  const subject = encodeURIComponent("Solicitação de orçamento");
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${company.email}&su=${subject}`;
}
