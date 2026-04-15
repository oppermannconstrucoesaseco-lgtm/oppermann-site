import { useEffect, useMemo, useState } from "react";
import steelFrame01 from "../assets/portfolio/portfolio-131.jpg";
import steelFrame02 from "../assets/portfolio/portfolio-189.jpg";
import steelFrame03 from "../assets/portfolio/portfolio-193.jpg";
import steelFrame04 from "../assets/portfolio/portfolio-190.jpg";
import steelFrame05 from "../assets/portfolio/portfolio-130.jpg";
import steelFrame06 from "../assets/portfolio/portfolio-133.jpg";
import drywall01 from "../assets/portfolio/portfolio-300.jpg";
import drywall02 from "../assets/portfolio/portfolio-153.jpg";
import drywall03 from "../assets/portfolio/portfolio-255.jpg";
import drywall04 from "../assets/portfolio/portfolio-152.jpg";
import forro01 from "../assets/portfolio/portfolio-299.jpg";
import forro02 from "../assets/portfolio/portfolio-298.jpg";
import pintura01 from "../assets/portfolio/portfolio-301.jpg";
import pintura02 from "../assets/portfolio/portfolio-302.jpg";
import pintura03 from "../assets/portfolio/portfolio-218.jpg";
import pintura04 from "../assets/portfolio/portfolio-191.jpg";
import pintura05 from "../assets/portfolio/portfolio-134.jpg";
import obra01 from "../assets/portfolio/portfolio-129.jpg";
import obra02 from "../assets/portfolio/portfolio-132.jpg";
import obra03 from "../assets/portfolio/portfolio-154.jpg";

const WHATSAPP_PORTFOLIO_URL =
  "https://wa.me/5541992522219?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20com%20a%20Oppermann.";

const categories = ["Todos", "Steel Frame", "Drywall", "Forros", "Pintura"];

const portfolioItems = [
  {
    title: "Estrutura em steel frame",
    category: "Steel Frame",
    image: steelFrame01
  },
  {
    title: "Steel frame em ambiente interno",
    category: "Steel Frame",
    image: steelFrame02
  },
  {
    title: "Estrutura técnica a seco",
    category: "Steel Frame",
    image: steelFrame03
  },
  {
    title: "Sistema metálico industrializado",
    category: "Steel Frame",
    image: steelFrame04
  },
  {
    title: "Fachada com precisão estrutural",
    category: "Steel Frame",
    image: steelFrame05
  },
  {
    title: "Obra em steel frame",
    category: "Steel Frame",
    image: steelFrame06
  },
  {
    title: "Drywall com acabamento técnico",
    category: "Drywall",
    image: drywall01
  },
  {
    title: "Parede em drywall pronta para acabamento",
    category: "Drywall",
    image: drywall02
  },
  {
    title: "Ambiente preparado para acabamento",
    category: "Drywall",
    image: drywall03
  },
  {
    title: "Fechamento em drywall",
    category: "Drywall",
    image: drywall04
  },
  {
    title: "Forro com iluminação premium",
    category: "Forros",
    image: forro01
  },
  {
    title: "Forro em drywall de alto padrão",
    category: "Forros",
    image: forro02
  },
  {
    title: "Pintura com equipe Oppermann",
    category: "Pintura",
    image: pintura01
  },
  {
    title: "Pintura interna de alto padrão",
    category: "Pintura",
    image: pintura02
  },
  {
    title: "Execução organizada em obra",
    category: "Pintura",
    image: pintura03
  },
  {
    title: "Equipe técnica em acabamento",
    category: "Pintura",
    image: pintura04
  },
  {
    title: "Acabamento premium",
    category: "Pintura",
    image: pintura05
  },
  {
    title: "Revestimento externo",
    category: "Drywall",
    image: obra01
  },
  {
    title: "Obra em etapa estrutural",
    category: "Steel Frame",
    image: obra02
  },
  {
    title: "Perfis e montagem técnica",
    category: "Steel Frame",
    image: obra03
  }
];

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    document.title = "Portfólio Oppermann | Obras reais de alto padrão";
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Todos") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <main className="portfolio-page">
      <section className="portfolio-hero">
        <div className="container portfolio-hero-content">
          <span>Portfólio técnico</span>
          <h1>Portfólio Oppermann</h1>
          <p>Obras reais. Resultados de alto padrão.</p>
        </div>
      </section>

      <section className="section portfolio-gallery-page" aria-labelledby="portfolio-gallery-title">
        <div className="container">
          <div className="portfolio-page-heading">
            <span>Galeria</span>
            <h2 id="portfolio-gallery-title">Projetos executados com precisão, organização e acabamento profissional.</h2>
            <p>
              Imagens extraídas do portfólio Oppermann Construção a Seco & W Engenharia,
              organizadas por tipo de serviço.
            </p>
          </div>

          <div className="portfolio-filters" aria-label="Categorias do portfólio">
            {categories.map((category) => (
              <button
                className={activeCategory === category ? "is-active" : ""}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item) => (
              <button
                className="portfolio-item"
                key={`${item.category}-${item.title}`}
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`Abrir imagem: ${item.title}`}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <span>{item.category}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section portfolio-instagram">
        <div className="container portfolio-instagram-panel">
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
          <a className="btn btn-primary" href={WHATSAPP_PORTFOLIO_URL} target="_blank" rel="noreferrer">
            Solicitar orçamento
          </a>
        </div>
      </section>

      {selectedItem ? (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={selectedItem.title}>
          <button className="portfolio-lightbox-backdrop" type="button" onClick={() => setSelectedItem(null)} aria-label="Fechar imagem" />
          <div className="portfolio-lightbox-content">
            <button className="portfolio-lightbox-close" type="button" onClick={() => setSelectedItem(null)}>
              Fechar
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} />
            <div>
              <span>{selectedItem.category}</span>
              <strong>{selectedItem.title}</strong>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
