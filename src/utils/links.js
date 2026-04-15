import { company, whatsappMessage } from "../data/siteContent.js";

export function getWhatsAppUrl(message = whatsappMessage) {
  return `https://wa.me/${company.phoneNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailToUrl() {
  return `mailto:${company.email}?subject=${encodeURIComponent("Solicitação de orçamento")}`;
}
