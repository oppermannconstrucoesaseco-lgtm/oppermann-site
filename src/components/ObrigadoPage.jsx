import { useEffect } from "react";
import { getWhatsAppUrl } from "../utils/links.js";
import "../styles/obrigado.css";

export function ObrigadoPage() {
  useEffect(() => {
    document.title = "Solicitação recebida — Oppermann Construção a Seco";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "");
    // Impede indexação — página de conversão do Google Ads
    let noindex = document.querySelector('meta[name="robots"]');
    if (noindex) noindex.setAttribute("content", "noindex, nofollow");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.removeAttribute("href");
  }, []);

  return (
    <main className="obrigado-page">
      <div className="obrigado-inner">
        <div className="obrigado-icon" aria-hidden="true">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="27" stroke="var(--color-gold)" strokeWidth="2" opacity="0.3" />
            <circle cx="28" cy="28" r="21" fill="rgba(201,164,92,0.10)" stroke="var(--color-gold)" strokeWidth="1.5" />
            <path d="M18 28.5L24.5 35L38 21" stroke="var(--color-gold-bright)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <span className="obrigado-eyebrow">Oppermann Construção a Seco</span>

        <h1 className="obrigado-title">Solicitação recebida<br />com sucesso</h1>

        <p className="obrigado-text">
          Nossa equipe vai analisar suas informações e entrar em contato pelo WhatsApp em breve.
        </p>

        <div className="obrigado-actions">
          <a
            className="btn btn-primary obrigado-btn-whats"
            href={getWhatsAppUrl("Olá, Michel! Acabei de enviar uma solicitação pelo site da Oppermann.")}
            target="_blank"
            rel="noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.104 1.523 5.827L.057 23.882a.75.75 0 00.921.921l6.055-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.73 9.73 0 01-4.964-1.359l-.355-.212-3.683.892.909-3.587-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Falar no WhatsApp agora
          </a>

          <a className="obrigado-link-home" href="/">
            Voltar ao site
          </a>
        </div>

        <div className="obrigado-footer-note">
          <span>Atendemos Itapema, Balneário Camboriú e região</span>
        </div>
      </div>
    </main>
  );
}
