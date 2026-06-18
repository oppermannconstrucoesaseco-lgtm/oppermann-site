import { useState } from "react";
import { company } from "../data/siteContent.js";
import { getMailToUrl, getWhatsAppUrl } from "../utils/links.js";
import { SectionTitle } from "./SectionTitle.jsx";

export function Contact() {
  const [formMessage, setFormMessage] = useState("");

  function handleBudgetSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome = String(formData.get("nome") || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const servico = String(formData.get("servico") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();

    if (!nome || !telefone || !servico || !mensagem) {
      setFormMessage("Preencha todos os campos para solicitar seu orçamento pelo WhatsApp.");
      return;
    }

    if (telefone.replace(/\D/g, "").length < 10) {
      setFormMessage("Informe um telefone válido com DDD.");
      return;
    }

    const whatsappText = [
      "Olá, quero solicitar um orçamento.",
      "",
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Serviço: ${servico}`,
      `Detalhes da obra: ${mensagem}`
    ].join("\n");

    setFormMessage("Abrindo o WhatsApp com sua solicitação...");
    window.open(getWhatsAppUrl(whatsappText), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="section contact">
      <div className="container contact-grid">
        <div>
          <SectionTitle eyebrow="Contato" title="Vamos falar sobre sua obra?">
            Envie uma mensagem para receber atendimento comercial com nossa equipe e iniciar seu
            orçamento.
          </SectionTitle>
          <div className="contact-info">
            <p>
              <strong>{company.legalName}</strong>
            </p>
            <p>Responsável comercial: {company.contactName}</p>
            <p>WhatsApp: {company.phoneDisplay}</p>
            <p>E-mail: {company.email}</p>
            <p>Endereço: {company.shortAddress}</p>
          </div>
          <div className="contact-actions">
            <a className="btn btn-primary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Falar com nosso consultor
            </a>
            <a className="btn btn-ghost" href={getMailToUrl()}>
              Enviar e-mail
            </a>
          </div>
        </div>

        {/* Formulário simples via e-mail, fácil de trocar por integração futura. */}
        <form className="contact-form" onSubmit={handleBudgetSubmit}>
          <label>
            Nome
            <input name="nome" type="text" placeholder="Seu nome" required />
          </label>
          <label>
            Telefone
            <input name="telefone" type="tel" placeholder="(00) 00000-0000" required />
          </label>
          <label>
            Serviço desejado
            <select name="servico" defaultValue="" required>
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option>Steel Frame</option>
              <option>Drywall</option>
              <option>Forros em Drywall</option>
              <option>Forro Modular</option>
              <option>Paredes em Drywall</option>
              <option>Revestimentos</option>
              <option>Piso Vinílico</option>
              <option>Pintura interna e externa</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows="5" placeholder="Conte um pouco sobre sua obra" required />
          </label>
          {formMessage ? <p className="form-feedback">{formMessage}</p> : null}
          <button className="btn btn-primary" type="submit">
            Solicitar orçamento
          </button>
        </form>
      </div>
    </section>
  );
}
