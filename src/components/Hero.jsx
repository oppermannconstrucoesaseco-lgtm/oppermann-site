import heroImage from "../assets/hero-oppermann.jpg";
import logoOppermann from "../assets/logo-oppermann.png";
import { company } from "../data/siteContent.js";
import { getWhatsAppUrl } from "../utils/links.js";

export function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-overlay" />
      <img className="hero-watermark" src={logoOppermann} alt="" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-kicker">Construção a seco de alto padrão</p>
        <h1>A nova era da construção começa aqui</h1>
        <p className="hero-subtitle">Mais rápido • mais limpo • mais eficiente</p>
        <p className="hero-text">
          Soluções modernas em steel frame, drywall, revestimentos e pintura, com execução
          técnica, qualidade e alto padrão.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contato">
            Solicitar orçamento
          </a>
          <a className="btn btn-secondary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Indicadores da OPPERMANN">
        <div>
          <strong>Execução técnica</strong>
          <span>Planejamento, precisão e acabamento</span>
        </div>
        <div>
          <strong>{company.regions}</strong>
          <span>Atendimento regional</span>
        </div>
      </div>
    </section>
  );
}
