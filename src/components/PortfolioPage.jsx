import { useEffect } from "react";
import { getWhatsAppUrl } from "../utils/links.js";
import "../styles/portfolio-complete.css";
import portfolioCapa from "../assets/portfolio-original/portfolio-01-capa.jpg.png";
import portfolioSobreNos from "../assets/portfolio-original/portfolio-02-sobre-nos.jpg.png";
import portfolioMichel from "../assets/portfolio-original/portfolio-03-michel-oppermann.jpg.png";
import portfolioDiferenciais from "../assets/portfolio-original/portfolio-04-diferenciais.jpg.png";
import portfolioTrabalhos from "../assets/portfolio-original/portfolio-05-trabalhos-destaque.jpg.png";
import portfolioDrywall from "../assets/portfolio-original/portfolio-06-drywall.jpg.png";
import portfolioSteelFrame from "../assets/portfolio-original/portfolio-07-steel-frame.jpg.png";
import portfolioForros from "../assets/portfolio-original/portfolio-08-forros.jpg.png";
import portfolioPintura from "../assets/portfolio-original/portfolio-09-pintura.jpg.png";
import portfolioBeneficios from "../assets/portfolio-original/portfolio-10-beneficios.jpg.png";
import portfolioContato from "../assets/portfolio-original/portfolio-11-contato.jpg.png";

const originalPortfolioPages = [
  { title: "Capa", image: portfolioCapa },
  { title: "Sobre nós", image: portfolioSobreNos },
  { title: "À frente da Oppermann", image: portfolioMichel },
  { title: "Nossos diferenciais", image: portfolioDiferenciais },
  { title: "Trabalhos em destaque", image: portfolioTrabalhos },
  { title: "Drywall", image: portfolioDrywall },
  { title: "Steel Frame", image: portfolioSteelFrame },
  { title: "Forros em drywall", image: portfolioForros },
  { title: "Pinturas premium", image: portfolioPintura },
  { title: "Benefícios da construção a seco", image: portfolioBeneficios },
  { title: "Contato", image: portfolioContato }
];

export function PortfolioPage() {
  useEffect(() => {
    document.title = "Portfólio Oppermann | Obras reais de alto padrão";
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://oppermannsteel.com.br/portfolio");
  }, []);

  return (
    <main className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container portfolio-hero-content">
          <span>Portfólio técnico</span>
          <h1>Portfólio Oppermann</h1>
          <p>Obras reais. Resultados de alto padrão.</p>
          <a className="btn btn-primary" href="#portfolio-completo">
            Ver portfólio completo
          </a>
        </div>
      </section>

      <section id="portfolio-completo" className="section complete-portfolio" aria-labelledby="complete-portfolio-title">
        <div className="container">
          <div className="portfolio-page-heading complete-portfolio-heading">
            <span>Portfólio original</span>
            <h2 id="complete-portfolio-title">Portfólio completo Oppermann</h2>
            <p>
              Apresentação completa com identidade visual, serviços, diferenciais, obras em destaque e contato.
            </p>
          </div>

          <div className="original-portfolio-pages">
            {originalPortfolioPages.map((page, index) => (
              <figure className="original-portfolio-page" key={page.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img src={page.image} alt={`Página do portfólio Oppermann - ${page.title}`} loading="lazy" />
                <figcaption>{page.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-instagram" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
        <div className="container portfolio-instagram-panel" style={{ minHeight: 'unset' }}>
          <div>
            <span>Instagram</span>
            <h2>Mais obras, bastidores e acabamentos da Oppermann.</h2>
          </div>
          <a className="btn btn-secondary" href="https://www.instagram.com/oppermann.construcao" target="_blank" rel="noreferrer">
            Ver mais no Instagram
          </a>
        </div>
      </section>

      <section className="section portfolio-final-cta">
        <div className="container portfolio-final-panel">
          <h2>Pronto para tirar seu projeto do papel com qualidade e alto padrão?</h2>
          <a className="btn btn-primary" href={getWhatsAppUrl("Olá, quero solicitar um orçamento com a Oppermann.")} target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>
        </div>
      </section>
    </main>
  );
}
