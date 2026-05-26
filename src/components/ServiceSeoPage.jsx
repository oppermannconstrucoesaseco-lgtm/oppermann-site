import { useEffect } from "react";
import { company } from "../data/siteContent.js";
import { getWhatsAppUrl } from "../utils/links.js";
import "../styles/service-seo.css";
import drywallImage from "../assets/servico-drywall.jpg";
import steelFrameImage from "../assets/servico-steel-frame.jpg";
import pinturaImage from "../assets/servico-pintura.jpg";
import revestimentosImage from "../assets/servico-revestimentos.jpg";
import forroModularImage from "../assets/obra-forro-modular-01.jpg";
import pisoViniloImage from "../assets/obra-piso-vinilico-01.jpg";

// Galeria Steel Frame
import sfInterior01 from "../assets/sf-interior-01.jpg";
import sfFachada01 from "../assets/sf-fachada-01.jpg";
import sfFachada02 from "../assets/sf-fachada-02.jpg";
import sfEscada01 from "../assets/sf-escada-01.jpg";
import sfEstrutura01 from "../assets/sf-estrutura-01.jpg";
import sfEstrutura02 from "../assets/sf-estrutura-02.jpg";
import sfEstrutura03 from "../assets/sf-estrutura-03.jpg";
import sfInterior02 from "../assets/sf-interior-02.jpg";
import sfInterior03 from "../assets/sf-interior-03.jpg";
import sfInterior04 from "../assets/sf-interior-04.jpg";

const servicePages = {
  "/drywall-itapema": {
    eyebrow: "Drywall em Itapema",
    title: "Drywall em Itapema com execução técnica e acabamento de alto padrão",
    description:
      "A OPPERMANN Construção a Seco executa paredes, forros, fechamentos e soluções em drywall para obras residenciais, comerciais e corporativas em Itapema e região.",
    image: drywallImage,
    keywords: "drywall em Itapema, parede de drywall, forro de drywall, empresa de drywall em Itapema",
    intro:
      "O drywall é uma solução moderna para quem busca rapidez, limpeza, precisão e acabamento superior. Atuamos com montagem técnica, estruturação correta, chapeamento alinhado e preparação adequada para pintura e acabamento final.",
    benefits: [
      "Execução mais rápida e limpa que sistemas convencionais",
      "Paredes e forros com excelente acabamento",
      "Soluções para obras residenciais, comerciais e corporativas",
      "Possibilidade de reforços, isolamento e detalhes técnicos",
      "Atendimento em Itapema, Balneário Camboriú, Porto Belo, Bombinhas, Itajaí e Navegantes"
    ],
    services: [
      "Paredes em drywall",
      "Forros em drywall",
      "Fechamentos técnicos",
      "Sancas, cortineiros e detalhes",
      "Revestimentos internos em drywall"
    ]
  },
  "/steel-frame-itapema": {
    eyebrow: "Steel Frame em Itapema",
    title: "Steel Frame em Itapema para obras rápidas, precisas e modernas",
    description:
      "Construção em steel frame com planejamento, montagem técnica e execução profissional para obras residenciais e comerciais em Itapema e região.",
    image: steelFrameImage,
    keywords: "steel frame em Itapema, construção em steel frame, estrutura steel frame Itapema, construção a seco",
    intro:
      "O steel frame é um sistema construtivo industrializado, leve e de alta precisão. Ele permite obras mais rápidas, organizadas e com excelente desempenho quando executado com planejamento técnico e mão de obra especializada.",
    benefits: [
      "Estrutura leve, precisa e resistente",
      "Obra mais rápida e com menor desperdício",
      "Sistema ideal para construções modernas e ampliações",
      "Compatibilidade com fechamentos, revestimentos e instalações",
      "Execução técnica em Itapema e litoral norte de Santa Catarina"
    ],
    services: [
      "Estruturas em steel frame",
      "Fechamentos e revestimentos a seco",
      "Fachadas e soluções externas",
      "Ampliações e obras residenciais",
      "Integração com drywall, forros e pintura"
    ],
    gallery: [
      { src: sfEscada01, alt: "Estrutura em steel frame com escada metálica" },
      { src: sfEstrutura01, alt: "Estrutura metálica steel frame em galpão" },
      { src: sfEstrutura02, alt: "Montagem da estrutura em steel frame" },
      { src: sfEstrutura03, alt: "Piso em steel frame — perfis metálicos" },
      { src: sfInterior01, alt: "Interior com fechamento em steel frame" },
      { src: sfFachada01, alt: "Fachada com painéis em steel frame" },
      { src: sfFachada02, alt: "Revestimento externo em steel frame" },
      { src: sfInterior03, alt: "Espaço aberto com estrutura steel frame" },
      { src: sfInterior04, alt: "Ambiente em obra com steel frame" },
      { src: sfInterior02, alt: "Obra em steel frame com vista para a cidade" },
    ]
  },
  "/construcao-a-seco-itapema": {
    eyebrow: "Construção a seco em Itapema",
    title: "Construção a seco em Itapema com drywall, steel frame e acabamento premium",
    description:
      "Soluções completas em construção a seco para obras modernas, limpas e eficientes em Itapema, Balneário Camboriú e região.",
    image: revestimentosImage,
    keywords: "construção a seco em Itapema, obras a seco, drywall e steel frame, construção moderna Itapema",
    intro:
      "A construção a seco une produtividade, precisão e organização de obra. Na Oppermann, aplicamos sistemas como drywall, steel frame, forros, revestimentos e pintura para entregar ambientes modernos e bem executados.",
    benefits: [
      "Redução de sujeira e desperdício na obra",
      "Execução mais rápida e previsível",
      "Acabamento alinhado ao alto padrão",
      "Soluções flexíveis para diferentes tipos de projeto",
      "Atendimento técnico para construtoras, engenheiros e clientes finais"
    ],
    services: [
      "Drywall",
      "Steel Frame",
      "Forros e paredes",
      "Revestimentos a seco",
      "Pintura interna e externa"
    ]
  },
  "/pintura-premium-itapema": {
    eyebrow: "Pintura premium em Itapema",
    title: "Pintura premium em Itapema com preparo correto e acabamento superior",
    description:
      "Serviços de pintura interna e externa com preparação de superfície, massa, selador e acabamento de alto padrão em Itapema e região.",
    image: pinturaImage,
    keywords: "pintura premium em Itapema, pintura residencial Itapema, pintura interna e externa, acabamento premium",
    intro:
      "A pintura é a etapa que revela a qualidade final da obra. Por isso, trabalhamos com preparação correta da superfície, proteção dos ambientes, aplicação técnica e acabamento uniforme.",
    benefits: [
      "Preparo técnico das superfícies",
      "Aplicação de selador, massa e tinta conforme o padrão da obra",
      "Acabamento uniforme e limpo",
      "Proteção de pisos, esquadrias, tomadas e áreas sensíveis",
      "Ideal para obras novas, reformas e ambientes de alto padrão"
    ],
    services: [
      "Pintura interna",
      "Pintura externa",
      "Massa corrida e correções",
      "Selador e preparação",
      "Acabamento premium para drywall e alvenaria"
    ]
  },
  "/forro-drywall-itapema": {
    eyebrow: "Forro de drywall em Itapema",
    title: "Forro de drywall em Itapema com nivelamento, precisão e acabamento premium",
    description:
      "Execução de forros em drywall para residências, apartamentos, salas comerciais e obras corporativas em Itapema e região.",
    image: drywallImage,
    keywords: "forro de drywall em Itapema, forro drywall Itapema, forro de gesso acartonado, cortineiro drywall",
    intro:
      "O forro em drywall permite acabamento moderno, integração com iluminação, cortineiros, sancas e soluções técnicas para ambientes residenciais e comerciais.",
    benefits: [
      "Nivelamento e alinhamento técnico",
      "Integração com iluminação e detalhes arquitetônicos",
      "Execução limpa e rápida",
      "Acabamento pronto para pintura premium",
      "Soluções para apartamentos, casas, lojas e salas comerciais"
    ],
    services: [
      "Forro liso em drywall",
      "Cortineiros e sancas",
      "Rebaixamento de teto",
      "Detalhes para iluminação",
      "Manutenção e adequações em forros existentes"
    ]
  },
  "/forro-modular-itapema": {
    eyebrow: "Forro Modular em Itapema",
    title: "Forro Modular em Itapema com acabamento de alto padrão para ambientes modernos",
    description:
      "Instalação de forro modular para ambientes comerciais e residenciais em Itapema e região. Execução técnica, nivelamento preciso e acabamento superior.",
    image: forroModularImage,
    keywords: "forro modular em Itapema, forro modular Itapema, forro modular comercial, instalação forro modular",
    intro:
      "O forro modular é a solução ideal para ambientes comerciais, corporativos e residenciais que exigem acabamento refinado, facilidade de manutenção e visual moderno. A Oppermann executa com alinhamento técnico e resultado de alto padrão.",
    benefits: [
      "Acabamento limpo e moderno",
      "Fácil acesso para manutenção de instalações",
      "Opções variadas de placa e perfil",
      "Execução rápida com mínimo de sujeira",
      "Ideal para salas comerciais, lojas, consultórios e ambientes corporativos"
    ],
    services: [
      "Forro modular em diversas dimensões",
      "Perfis e acabamentos variados",
      "Integração com iluminação e ar-condicionado",
      "Forro modular para ambientes comerciais",
      "Forro modular para residências de alto padrão"
    ]
  },
  "/piso-vinilico-itapema": {
    eyebrow: "Piso Vinílico em Itapema",
    title: "Piso Vinílico em Itapema com instalação técnica e acabamento de alto padrão",
    description:
      "Instalação de piso vinílico para ambientes residenciais e comerciais em Itapema e região. Execução limpa, rápida e com resultado elegante.",
    image: pisoViniloImage,
    keywords: "piso vinílico em Itapema, instalação piso vinílico Itapema, piso vinílico residencial, piso vinílico comercial Itapema",
    intro:
      "O piso vinílico combina estética, praticidade e durabilidade. Com acabamento que imita madeira e outros materiais nobres, é ideal para quem busca resultado elegante com instalação limpa e rápida. A Oppermann instala com alinhamento preciso e acabamento superior.",
    benefits: [
      "Instalação rápida e sem sujeira excessiva",
      "Acabamento elegante que imita madeira e outros materiais",
      "Alta durabilidade e fácil manutenção",
      "Ideal para ambientes residenciais, comerciais e corporativos",
      "Compatível com piso aquecido e ambientes úmidos (vinílico 100% impermeável)"
    ],
    services: [
      "Piso vinílico em régua",
      "Piso vinílico em manta",
      "Instalação sobre contrapiso e porcelanato",
      "Rodapé e acabamentos",
      "Piso vinílico para ambientes comerciais e residenciais"
    ]
  }
};

export function getServicePage(pathname) {
  const normalized = pathname.replace(/\/$/, "");
  return servicePages[normalized] || null;
}

export function ServiceSeoPage({ page }) {
  useEffect(() => {
    document.title = `${page.eyebrow} | OPPERMANN Construção a Seco`;

    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", page.description);

    const keywords = document.querySelector('meta[name="keywords"]');
    if (keywords) keywords.setAttribute("content", page.keywords);
  }, [page]);

  return (
    <main className="service-seo-page">
      <section className="service-seo-hero">
        <div className="container service-seo-grid">
          <div className="service-seo-copy">
            <span>{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
            <div className="service-seo-actions">
              <a className="btn btn-primary" href={getWhatsAppUrl(`Olá, quero solicitar um orçamento de ${page.eyebrow}.`)} target="_blank" rel="noreferrer">
                Solicitar orçamento
              </a>
              <a className="btn btn-secondary" href="/portfolio#portfolio-completo">
                Ver portfólio
              </a>
            </div>
          </div>
          <figure className="service-seo-image">
            <img src={page.image} alt={page.title} loading="eager" />
          </figure>
        </div>
      </section>

      {page.gallery && page.gallery.length > 0 && (
        <section className="section service-seo-gallery">
          <div className="container">
            <div className="service-seo-gallery-grid">
              {page.gallery.map((item, i) => (
                <figure key={i} className="service-seo-gallery-item">
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section service-seo-content">
        <div className="container service-seo-panels">
          <article>
            <span>Benefícios</span>
            <h2>Por que escolher a Oppermann?</h2>
            <ul>
              {page.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article>
            <span>Serviços relacionados</span>
            <h2>O que executamos</h2>
            <ul>
              {page.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section service-seo-region">
        <div className="container service-seo-region-panel">
          <span>Atendimento regional</span>
          <h2>Atendemos Itapema e região com construção a seco de alto padrão.</h2>
          <p>
            A {company.brandName} atende {company.regions}, com foco em qualidade de execução,
            organização de obra, acabamento profissional e comunicação clara com clientes,
            engenheiros e construtoras.
          </p>
          <a className="btn btn-primary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            Falar com a Oppermann
          </a>
        </div>
      </section>
    </main>
  );
}
