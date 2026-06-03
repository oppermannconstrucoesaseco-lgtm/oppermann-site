import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "../utils/links.js";
import "../styles/projetos.css";

import render01 from "../assets/bombinhas-render-01.jpg";
import render02 from "../assets/bombinhas-render-02.jpg";
import render03 from "../assets/bombinhas-render-03.jpg";
import render04 from "../assets/bombinhas-render-04.jpg";
import planta01 from "../assets/bombinhas-planta-01.png";
import estrutura from "../assets/bombinhas-estrutura.png";
import planta02 from "../assets/bombinhas-planta-02.png";

const projeto = {
  titulo: "Residência Alto Padrão",
  localizacao: "Bombinhas / SC",
  badge: "Início Junho 2026",
  area: "240 m²",
  pavimentos: "2 pavimentos",
  servicos: "Steel Frame · Drywall · Forro · Pintura",
  prazo: "Jun 2026 → Out 2026",
  renders: [
    { src: render01, alt: "Renderização 3D — fachada frontal com jardim e gradil" },
    { src: render02, alt: "Renderização 3D — fachada principal com portão e garagem" },
    { src: render03, alt: "Renderização 3D — vista diagonal da esquina" },
    { src: render04, alt: "Renderização 3D — vista lateral com cobertura da garagem" },
  ],
  tecnico: [
    { src: planta01, alt: "Prancha técnica — planta baixa", label: "Planta Baixa" },
    { src: estrutura, alt: "Vista isométrica explodida — estrutura steel frame", label: "Vista Isométrica Explodida" },
    { src: planta02, alt: "Prancha técnica — implantação", label: "Implantação" },
  ],
};

export function ProjetosPage() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.title = "Projetos em Andamento | Oppermann Construção a Seco";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Acompanhe os projetos que a Oppermann está executando e os próximos que entram em obra. Steel Frame, Drywall e Construção a Seco em Itapema e região.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://oppermannsteel.com.br/projetos");
  }, []);

  useEffect(() => {
    const fechar = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, []);

  const whatsappMsg = `Olá! Vi o projeto de Bombinhas no site e gostaria de saber mais sobre os serviços da Oppermann.`;

  return (
    <main className="projetos-page">
      {/* Hero */}
      <section className="projetos-hero">
        <div className="container projetos-hero-content">
          <span className="projetos-hero-eyebrow">Oppermann — Obras & Projetos</span>
          <h1>Projetos em Andamento</h1>
          <p>
            Acompanhe os projetos que a Oppermann está executando e os próximos que
            entram em obra. Transparência do projeto à entrega.
          </p>
        </div>
      </section>

      {/* Lista */}
      <section className="projetos-lista container">
        <div className="projeto-card">

          {/* Cabeçalho */}
          <div className="projeto-card-header">
            <div className="projeto-card-titulo">
              <h2>{projeto.titulo}</h2>
              <p>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                {projeto.localizacao}
              </p>
            </div>
            <span className="projeto-badge inicio">{projeto.badge}</span>
          </div>

          {/* Specs */}
          <div className="projeto-specs">
            <div className="projeto-spec-item">
              <span className="projeto-spec-label">Área Total</span>
              <span className="projeto-spec-valor gold">{projeto.area}</span>
            </div>
            <div className="projeto-spec-item">
              <span className="projeto-spec-label">Pavimentos</span>
              <span className="projeto-spec-valor">{projeto.pavimentos}</span>
            </div>
            <div className="projeto-spec-item">
              <span className="projeto-spec-label">Serviços</span>
              <span className="projeto-spec-valor">{projeto.servicos}</span>
            </div>
            <div className="projeto-spec-item">
              <span className="projeto-spec-label">Cronograma</span>
              <span className="projeto-spec-valor">{projeto.prazo}</span>
            </div>
          </div>

          {/* Renders */}
          <div className="projeto-renders">
            <p className="projeto-renders-titulo">Renderizações 3D do Projeto</p>
            <div className="projeto-renders-grid">
              {projeto.renders.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setLightbox(img)}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>

          {/* Pranchas técnicas */}
          <div className="projeto-tecnico">
            <p className="projeto-tecnico-titulo">Projeto Técnico — Steel Frame</p>
            <div className="projeto-tecnico-grid">
              {projeto.tecnico.map((item, i) => (
                <div
                  key={i}
                  className="projeto-tecnico-item"
                  onClick={() => setLightbox(item)}
                  style={{ cursor: "zoom-in" }}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="projeto-cta">
            <div className="projeto-cta-texto">
              <h3>Interessado em um projeto assim?</h3>
              <p>Fale com a nossa equipe e veja como podemos executar sua obra.</p>
            </div>
            <a
              href={getWhatsAppUrl(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>

        {/* Aviso novos projetos */}
        <div className="projetos-aviso">
          <span className="projetos-aviso-icone">🏗️</span>
          <div>
            <h3>Mais projetos em breve</h3>
            <p>
              Novos projetos são adicionados à medida que entram em fase de execução.
              Acompanhe ou entre em contato para saber sobre as próximas obras.
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="projetos-lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} />
        </div>
      )}
    </main>
  );
}
