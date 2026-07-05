import { company, whatsappMessage } from "../data/siteContent.js";

export function getWhatsAppUrl(message = whatsappMessage) {
  return `https://wa.me/${company.phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailToUrl() {
  const to = encodeURIComponent(company.email);
  const subject = encodeURIComponent("Solicitação de orçamento");
  return `https://mail.google.com/mail/?view=cm&to=${to}&su=${subject}`;
}
