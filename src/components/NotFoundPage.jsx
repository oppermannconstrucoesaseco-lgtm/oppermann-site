import { useEffect } from "react";
import { getWhatsAppUrl } from "../utils/links.js";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Página não encontrada — Oppermann Construção a Seco";
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) robots.setAttribute("content", "noindex, nofollow");
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "120px 24px 80px",
      background: "var(--color-bg)"
    }}>
      <div style={{ maxWidth: "480px" }}>
        <span style={{
          fontSize: "0.72rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-gold)",
          display: "block",
          marginBottom: "16px"
        }}>Erro 404</span>
        <h1 style={{
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 800,
          letterSpacing: "-0.025em",
          marginBottom: "16px",
          lineHeight: 1.1
        }}>Página não encontrada</h1>
        <p style={{
          color: "var(--color-muted)",
          fontSize: "1rem",
          lineHeight: 1.65,
          marginBottom: "32px"
        }}>
          O endereço que você tentou acessar não existe ou foi movido.
          Volte para a página inicial ou entre em contato.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <a className="btn btn-primary" href="/">Voltar para o início</a>
          <a
            className="btn btn-secondary"
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
          >Falar no WhatsApp</a>
        </div>
      </div>
    </main>
  );
}
