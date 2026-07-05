import { useEffect, useState } from "react";
import { company } from "../data/siteContent.js";
import { getMailToUrl, getWhatsAppUrl } from "../utils/links.js";

export function ContactPage() {
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    document.title = "Contato | OPPERMANN Construção a Seco — Orçamento em Itapema";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", "Entre em contato com a OPPERMANN Construção a Seco. Solicite um orçamento para drywall, steel frame, forros, revestimentos e pintura em Itapema e região.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://oppermannsteel.com.br/contato");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome     = String(formData.get("nome")     || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const servico  = String(formData.get("servico")  || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();

    if (!nome || !telefone || !servico || !mensagem) {
      setFormMessage("Preencha todos os campos para solicitar seu orçamento.");
      return;
    }

    if (telefone.replace(/\D/g, "").length < 10) {
      setFormMessage("Informe um telefone válido com DDD.");
      return;
    }

    // Dispara conversão do Google Ads
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", { send_to: "AW-18184594690" });
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
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-page-hero">
        <div className="container">
          <span className="contact-page-eyebrow">Fale com a Oppermann</span>
          <h1>Solicite um orçamento</h1>
          <p>
            Atendemos obras residenciais, comerciais e corporativas em Itapema,
            Balneário Camboriú, Porto Belo, Bombinhas, Itajaí e Navegantes.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section contact-page-body">
        <div className="container contact-grid">

          {/* Info */}
          <div>
            <h2 className="contact-page-title">Vamos falar sobre sua obra?</h2>
            <p className="contact-page-sub">
              Envie sua solicitação pelo formulário ao lado e nossa equipe entrará em contato para
              iniciar seu orçamento.
            </p>

            <div className="contact-info">
              <p><strong>{company.legalName}</strong></p>
              <p>Responsável comercial: {company.contactName}</p>
              <p>WhatsApp: {company.phoneDisplay}</p>
              <p>E-mail: {company.email}</p>
              <p>Endereço: {company.shortAddress}</p>
            </div>

            <div className="contact-actions">
              <a className="btn btn-primary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
                Falar com nosso consultor
              </a>
              <a className="btn btn-ghost" href={getMailToUrl()} target="_blank" rel="noreferrer">
                Enviar e-mail
              </a>
            </div>
          </div>

          {/* Formulário */}
          <form className="contact-form" onSubmit={handleSubmit}>
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
                <option value="" disabled>Selecione uma opção</option>
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
            {formMessage && <p className="form-feedback" role="alert" aria-live="polite">{formMessage}</p>}
            <button className="btn btn-primary" type="submit">
              Solicitar orçamento
            </button>
          </form>

        </div>
      </section>
    </main>
  );
}
