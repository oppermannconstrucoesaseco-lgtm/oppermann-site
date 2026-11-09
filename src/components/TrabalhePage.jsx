import { useEffect, useState } from "react";
import { company } from "../data/siteContent.js";
import { getWhatsAppUrl, getMailToUrl } from "../utils/links.js";
import "../styles/trabalhe.css";

const cargos = [
  "Montador de Steel Frame",
  "Aplicador de Drywall",
  "Pintor de Obras",
  "Instalador de Forro",
  "Instalador de Piso Vinílico",
  "Auxiliar de Obras",
  "Encarregado de Obras",
  "Técnico em Edificações",
  "Assistente Administrativo",
  "Outro",
];

export function TrabalhePage() {
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    document.title = "Trabalhe Conosco | Oppermann Construção a Seco";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Faça parte do time Oppermann. Envie seu currículo e cadastre seu interesse em trabalhar conosco em obras de steel frame, drywall, pintura e revestimentos.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://oppermannsteel.com.br/trabalhe-conosco");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nome     = String(formData.get("nome")     || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const cargo    = String(formData.get("cargo")    || "").trim();
    const cidade   = String(formData.get("cidade")   || "").trim();
    const experiencia = String(formData.get("experiencia") || "").trim();

    if (!nome || !telefone || !cargo || !cidade) {
      setFormMessage("Preencha nome, telefone, cargo e cidade para continuar.");
      return;
    }

    if (telefone.replace(/\D/g, "").length < 10) {
      setFormMessage("Informe um telefone válido com DDD.");
      return;
    }

    const texto = [
      "Olá! Quero me candidatar a uma vaga na Oppermann.",
      "",
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Cargo de interesse: ${cargo}`,
      `Cidade: ${cidade}`,
      experiencia ? `Experiência: ${experiencia}` : "",
    ].filter(Boolean).join("\n");

    setFormMessage("Abrindo o WhatsApp...");
    window.open(getWhatsAppUrl(texto), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="trabalhe-page">
      {/* Hero */}
      <section className="trabalhe-hero">
        <div className="container">
          <span className="trabalhe-eyebrow">Faça parte do time</span>
          <h1>Trabalhe Conosco</h1>
          <p>
            A Oppermann está sempre em busca de profissionais comprometidos com
            qualidade e execução técnica. Cadastre seu interesse e entraremos em
            contato quando surgir uma oportunidade.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section trabalhe-body">
        <div className="container trabalhe-grid">

          {/* Info */}
          <div>
            <h2 className="trabalhe-titulo">Por que trabalhar na Oppermann?</h2>
            <ul className="trabalhe-lista">
              {[
                "Obras organizadas e ambiente de trabalho seguro",
                "Equipe técnica e comprometida",
                "Crescimento junto com a empresa",
                "Projetos de alto padrão em toda a região litorânea de SC",
                "Remuneração compatível com o mercado",
              ].map((item) => (
                <li key={item}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="trabalhe-contato-info">
              <p>Dúvidas? Fale diretamente com a gente:</p>
              <a href={getWhatsAppUrl("Olá! Tenho interesse em trabalhar na Oppermann.")} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: "inline-flex", marginTop: "12px" }}>
                Falar no WhatsApp
              </a>
              <a href={getMailToUrl("Trabalhe Conosco — Oppermann")} target="_blank" rel="noreferrer" className="btn btn-ghost" style={{ display: "inline-flex", marginTop: "8px" }}>
                Enviar currículo por e-mail
              </a>
              <p className="trabalhe-email-hint">
                Ao enviar por e-mail, anexe seu currículo em PDF.<br />
                {company.email}
              </p>
            </div>
          </div>

          {/* Formulário */}
          <form className="trabalhe-form" onSubmit={handleSubmit}>
            <h3>Cadastre seu interesse</h3>
            <p className="trabalhe-form-sub">Preencha o formulário e entraremos em contato via WhatsApp.</p>

            <label>
              Nome completo
              <input name="nome" type="text" placeholder="Seu nome" required />
            </label>
            <label>
              WhatsApp / Telefone
              <input name="telefone" type="tel" placeholder="(00) 00000-0000" required />
            </label>
            <label>
              Cargo de interesse
              <select name="cargo" defaultValue="" required>
                <option value="" disabled>Selecione uma área</option>
                {cargos.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </label>
            <label>
              Cidade onde reside
              <input name="cidade" type="text" placeholder="Ex: Itapema, Balneário Camboriú..." required />
            </label>
            <label>
              Experiência profissional (opcional)
              <textarea
                name="experiencia"
                rows="4"
                placeholder="Conte um pouco sobre sua experiência na área..."
              />
            </label>

            {formMessage && (
              <p className="form-feedback" role="alert" aria-live="polite">{formMessage}</p>
            )}

            <button className="btn btn-primary" type="submit">
              Enviar cadastro pelo WhatsApp
            </button>

            <p className="trabalhe-form-obs">
              Ao enviar, seu currículo será encaminhado pelo WhatsApp. Se preferir,
              envie também seu currículo em PDF para{" "}
              <a href={getMailToUrl("Trabalhe Conosco")} target="_blank" rel="noreferrer">
                {company.email}
              </a>
            </p>
          </form>

        </div>
      </section>
    </main>
  );
}
