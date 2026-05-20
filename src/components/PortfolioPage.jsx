import { useEffect, useMemo, useState } from "react";
import { getWhatsAppUrl } from "../utils/links.js";
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

const completePortfolioSections = [
  {
    eyebrow: "Sobre nós",
    title: "Construção a seco com engenharia, planejamento e alto padrão.",
    text:
      "A OPPERMANN CONSTRUÇÃO A SECO atua com soluções modernas em drywall, steel frame e sistemas construtivos de alta performance, unindo planejamento técnico, execução profissional e compromisso com prazo, segurança e acabamento.",
    image: steelFrame05,
    bullets: [
      "Obras residenciais, comerciais e corporativas",
      "Processos organizados e acompanhamento técnico",
      "Execução limpa, ágil e com padrão elevado de acabamento"
    ]
  },
  {
    eyebrow: "À frente da Oppermann",
    title: "Michel Oppermann lidera diretamente a execução e o acompanhamento técnico.",
    text:
      "Cada projeto é conduzido com atenção aos detalhes, eficiência operacional e foco na qualidade final. Mais do que entregar obras, a Oppermann busca construir confiança, resultado e excelência em cada etapa.",
    image: obra03,
    bullets: [
      "Organização de obra e responsabilidade técnica",
      "Acompanhamento próximo da execução",
      "Soluções modernas em drywall, steel frame e construção a seco"
    ]
  },
  {
    eyebrow: "Diferenciais",
    title: "Método, cuidado e previsibilidade do início ao fim.",
    text:
      "Nosso padrão de execução valoriza processos bem definidos, comunicação clara, alinhamento técnico e atenção aos detalhes em todas as etapas da obra.",
    image: drywall03,
    bullets: [
      "Execução limpa, organizada e profissional",
      "Engenharia aplicada e acompanhamento técnico",
      "Drywall e steel frame com montagem profissional",
      "Acabamentos que valorizam o resultado final",
      "Compromisso real com prazo e qualidade"
    ]
  },
  {
    eyebrow: "Drywall",
    title: "Precisão, rapidez e acabamento superior.",
    text:
      "O drywall permite soluções rápidas, limpas e com acabamento impecável. Executamos cada etapa com atenção ao prumo, esquadro, reforços e fechamento uniforme para receber acabamento premium.",
    image: drywall01,
    bullets: [
      "Montagem técnica da estrutura",
      "Chapeamento alinhado e resistente",
      "Fechamentos limpos e uniformes",
      "Preparação correta para acabamento final"
    ]
  },
  {
    eyebrow: "Steel Frame",
    title: "Estrutura moderna de alta performance.",
    text:
      "O steel frame é um sistema construtivo leve, resistente e extremamente preciso. Nossa montagem segue critérios rigorosos de alinhamento, fixação e reforços para garantir uma estrutura segura, durável e pronta para receber fechamento.",
    image: steelFrame01,
    bullets: [
      "Estruturas montadas com precisão milimétrica",
      "Perfis galvanizados de alta resistência",
      "Instalações integradas ao sistema construtivo",
      "Obra mais rápida, segura e organizada"
    ]
  },
  {
    eyebrow: "Forros em drywall",
    title: "Precisão, nivelamento e sofisticação.",
    text:
      "Os forros em drywall criam ambientes modernos, com linhas limpas e acabamento impecável. Nossa execução segue padrões rigorosos de nivelamento, fixação e preparação para pintura premium.",
    image: forro01,
    bullets: [
      "Nivelamento perfeito e encontros alinhados",
      "Execução limpa e organizada",
      "Recortes e detalhes executados com precisão",
      "Acabamento pronto para pintura premium"
    ]
  },
  {
    eyebrow: "Pinturas premium",
    title: "Acabamento final que transforma o ambiente.",
    text:
      "A pintura é a etapa que revela a qualidade de todo o trabalho. Executamos cada fase com cuidado, técnica e atenção aos detalhes, garantindo superfícies uniformes e acabamento superior.",
    image: pintura01,
    bullets: [
      "Aplicação de massa corrida com nivelamento uniforme",
      "Selador aplicado corretamente para melhor aderência",
      "Pintura lisa, sem marcas, sem falhas e com excelente cobertura",
      "Proteção de pisos, tomadas e esquadrias"
    ]
  },
  {
    eyebrow: "Benefícios da construção a seco",
    title: "Qualidade, rapidez, organização e menor desperdício.",
    text:
      "A construção a seco reduz prazos, melhora o controle de obra, diminui desperdícios e permite maior precisão em paredes, forros, revestimentos e estruturas.",
    image: obra02,
    bullets: [
      "Obra muito mais rápida e organizada",
      "Processo limpo, sustentável e sem desperdício de materiais",
      "Conforto acústico e térmico superior",
      "Flexibilidade para futuras alterações",
      "Precisão milimétrica e acabamento perfeito"
    ]
  }
];

const partnerCompanies = ["AJ Realty", "AFG", "CNA", "Pasqualotto GT"];

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
          <a className="btn btn-primary" href="#portfolio-completo">
            Ver portfólio completo
          </a>
        </div>
      </section>

      <section className="section portfolio-gallery-page" aria-labelledby="portfolio-gallery-title">
        <div className="container">
          <div className="portfolio-page-heading">
            <span>Galeria</span>
            <h2 id="portfolio-gallery-title">Projetos executados com precisão, organização e acabamento profissional.</h2>
            <p>
              Imagens extraídas do portfólio Oppermann Construção a Seco, organizadas por tipo de serviço.
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

      <section id="portfolio-completo" className="section complete-portfolio" aria-labelledby="complete-portfolio-title">
        <div className="container">
          <div className="portfolio-page-heading complete-portfolio-heading">
            <span>Novo portfólio completo</span>
            <h2 id="complete-portfolio-title">Construindo o futuro com excelência.</h2>
            <p>
              Engenharia aplicada, execução real e resultado que valoriza cada detalhe da obra.
            </p>
          </div>

          <div className="complete-portfolio-grid">
            {completePortfolioSections.map((section) => (
              <article className="complete-portfolio-card" key={section.title}>
                <div className="complete-portfolio-media">
                  <img src={section.image} alt={section.title} loading="lazy" />
                </div>
                <div className="complete-portfolio-content">
                  <span>{section.eyebrow}</span>
                  <h3>{section.title}</h3>
                  <p>{section.text}</p>
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="portfolio-companies-panel">
            <div>
              <span>Empresas com as quais já colaboramos</span>
              <h3>Relacionamentos construídos com organização, qualidade e responsabilidade.</h3>
            </div>
            <div className="portfolio-company-list">
              {partnerCompanies.map((company) => (
                <strong key={company}>{company}</strong>
              ))}
            </div>
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
          <a className="btn btn-primary" href={getWhatsAppUrl("Olá, quero solicitar um orçamento com a Oppermann.")} target="_blank" rel="noreferrer">
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
