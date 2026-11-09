import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "../utils/links.js";
import "../styles/projetos.css";

import bombinhasCoberturaMetal from "../assets/projetos/bombinhas-cobertura/bombinhas-cobertura-metal.jpg";
import bombinhasEstr01 from "../assets/projetos/bombinhas-cobertura/bombinhas-estrutura-01.jpg";
import bombinhasEstr02 from "../assets/projetos/bombinhas-cobertura/bombinhas-estrutura-02.jpg";
import bombinhasEstr03 from "../assets/projetos/bombinhas-cobertura/bombinhas-estrutura-03.jpg";
import bombinhasForro01 from "../assets/projetos/bombinhas-cobertura/bombinhas-forro-drywall-01.jpg";
import bombinhasForro02 from "../assets/projetos/bombinhas-cobertura/bombinhas-forro-drywall-02.jpg";
import bombinhasObra01 from "../assets/projetos/bombinhas-cobertura/bombinhas-obra-01.jpg";
import bombinhasObraNoite from "../assets/projetos/bombinhas-cobertura/bombinhas-obra-noite.jpg";

import gtHomeLogo from "../assets/projetos/gt-home/gt-home-logo-sm.png";
import gtHomeFachada from "../assets/projetos/gt-home/gt-home-fachada.jpg";
import gtHomeForro01 from "../assets/projetos/gt-home/gt-home-forro-01.jpg";
import gtHomeForro02 from "../assets/projetos/gt-home/gt-home-forro-02.jpg";
import gtHomeDrywall01 from "../assets/projetos/gt-home/gt-home-drywall-01.jpg";
import gtHomeDrywall02 from "../assets/projetos/gt-home/gt-home-drywall-02.jpg";

import allWertLaje01 from "../assets/projetos/all-wert/all-wert-laje-01.jpg";
import allWertLaje02 from "../assets/projetos/all-wert/all-wert-laje-02.jpg";
import allWertObraNoite from "../assets/projetos/all-wert/all-wert-obra-noite-web.jpg";
import allWertPiso from "../assets/projetos/all-wert/all-wert-piso-concluido-web.jpg";
import allWertTubulacao from "../assets/projetos/all-wert/all-wert-tubulacao.jpg";
import allWertDrywall01 from "../assets/projetos/all-wert/all-wert-drywall-01.jpg";
import allWertDrywall02 from "../assets/projetos/all-wert/all-wert-drywall-02.jpg";
import allWertEquipe from "../assets/projetos/all-wert/all-wert-equipe.jpg";
import allWertProjetoEstr from "../assets/projetos/all-wert/all-wert-projeto-estrutural.jpg";
import allWertModelo3d from "../assets/projetos/all-wert/all-wert-modelo-3d-web.jpg";
import allWertLogo from "../assets/projetos/all-wert/all-wert-logo-sm.png";

const projetos = [
  {
    id: "all-wert",
    cliente: "ALL WERT",
    logo: allWertLogo,
    titulo: "Sede Comercial",
    localizacao: "Porto Belo / SC",
    area: "495 m²",
    tipo: "Comercial",
    servicos: "Steel Frame · Laje Seca · Drywall",
    status: "Em execução",
    fotos: [
      { src: allWertObraNoite, alt: "Equipe Oppermann executando a laje seca à noite — ALL WERT Porto Belo" },
      { src: allWertPiso, alt: "Piso da sede ALL WERT concluído — amplo galpão comercial em Porto Belo" },
      { src: allWertLaje01, alt: "Estrutura da laje seca em steel frame — vigas galvanizadas ALL WERT" },
      { src: allWertLaje02, alt: "Vista interna da estrutura de laje seca — perfis LSF galvanizados" },
      { src: allWertTubulacao, alt: "Tubulação integrada à laje seca — instalações hidráulicas ALL WERT" },
      { src: allWertDrywall01, alt: "Início das paredes em drywall — estrutura metálica ALL WERT Porto Belo" },
      { src: allWertDrywall02, alt: "Avanço das paredes em drywall — interior da sede ALL WERT" },
      { src: allWertEquipe, alt: "Equipe Oppermann montando paredes de drywall — ALL WERT" },
    ],
    tecnico: [
      { src: allWertProjetoEstr, alt: "Projeto estrutural ALL WERT — 495 m² em LSF", label: "Projeto Estrutural" },
      { src: allWertModelo3d, alt: "Modelo 3D estrutural — Light Steel Frame ALL WERT", label: "Modelo 3D (LSF)" },
    ],
    whatsappMsg: "Olá! Vi o projeto ALL WERT no site da Oppermann e gostaria de saber mais sobre os serviços.",
  },
  {
    id: "gt-home",
    cliente: "GT Home",
    logo: gtHomeLogo,
    titulo: "Residencial — Torre La Citta",
    localizacao: "Balneário Camboriú / SC",
    area: null,
    tipo: "Residencial",
    servicos: "Forros em Drywall",
    status: "Em execução",
    fotos: [
      { src: gtHomeFachada, alt: "Torre residencial La Citta em Balneário Camboriú — GT Home" },
      { src: gtHomeForro01, alt: "Estrutura de forro drywall com instalações — GT Home La Citta" },
      { src: gtHomeForro02, alt: "Forro drywall com tubulações integradas — GT Home La Citta" },
      { src: gtHomeDrywall01, alt: "Forro drywall concluído com vista privilegiada de Balneário Camboriú" },
      { src: gtHomeDrywall02, alt: "Forro drywall em apartamento alto padrão — GT Home La Citta BC" },
    ],
    tecnico: [],
    whatsappMsg: "Olá! Vi o projeto GT Home no site da Oppermann e gostaria de saber mais sobre os serviços de forro drywall.",
  },
  {
    id: "bombinhas-cobertura",
    cliente: null,
    logo: null,
    titulo: "Laje Coberta Residencial",
    localizacao: "Bombinhas / SC",
    area: null,
    tipo: "Residencial",
    servicos: "Steel Frame · Laje Coberta · Drywall Externo (Glasroc)",
    status: "Concluída",
    fotos: [
      { src: bombinhasCoberturaMetal, alt: "Cobertura metálica concluída com vista para o mar — Bombinhas/SC" },
      { src: bombinhasEstr02, alt: "Estrutura steel frame da laje coberta com vista para o mar e coqueiros — Bombinhas" },
      { src: bombinhasEstr03, alt: "Treliças em steel frame da cobertura — Bombinhas/SC" },
      { src: bombinhasEstr01, alt: "Estrutura de steel frame da cobertura com isolamento termoacústico" },
      { src: bombinhasObra01, alt: "Vista externa da obra — laje coberta com Glasroc em Bombinhas" },
      { src: bombinhasObraNoite, alt: "Avance da obra ao entardecer — laje coberta Bombinhas" },
      { src: bombinhasForro01, alt: "Forro drywall externo com chapa Glasroc — Bombinhas/SC" },
      { src: bombinhasForro02, alt: "Aplicação de forro drywall externo na cobertura — Bombinhas" },
    ],
    tecnico: [],
    whatsappMsg: "Olá! Vi o projeto de laje coberta em Bombinhas no site da Oppermann e gostaria de saber mais.",
  },
];

export function ProjetosPage() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.title = "Projetos em Andamento | Oppermann Construção a Seco";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Acompanhe os projetos que a Oppermann está executando. Steel Frame, Laje Seca, Drywall e Pintura em Porto Belo, Balneário Camboriú e região.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://oppermannsteel.com.br/projetos");
  }, []);

  useEffect(() => {
    const fechar = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, []);

  return (
    <main className="projetos-page">
      {/* Hero */}
      <section className="projetos-hero">
        <div className="container projetos-hero-content">
          <span className="projetos-hero-eyebrow">Oppermann — Obras & Projetos</span>
          <h1>Projetos em Andamento</h1>
          <p>
            Acompanhe os projetos que a Oppermann está executando. Transparência do projeto à entrega.
          </p>
        </div>
      </section>

      {/* Lista de projetos */}
      <section className="projetos-lista container">

        {projetos.map((projeto) => (
          <div key={projeto.id} className="projeto-card">

            {/* Cabeçalho */}
            <div className="projeto-card-header">
              <div className="projeto-card-titulo">
                {projeto.logo && (
                  <img
                    src={projeto.logo}
                    alt={`Logo ${projeto.cliente}`}
                    className="projeto-cliente-logo"
                  />
                )}
                <div>
                  <h2>{projeto.cliente ? `${projeto.cliente} — ` : ""}{projeto.titulo}</h2>
                  <p>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                    {projeto.localizacao}
                  </p>
                </div>
              </div>
              <span className={`projeto-badge ${projeto.status === "Concluída" ? "concluida" : "em-execucao"}`}>
              {projeto.status}
            </span>
            </div>

            {/* Specs */}
            <div className="projeto-specs">
              {projeto.area && (
                <div className="projeto-spec-item">
                  <span className="projeto-spec-label">Área Total</span>
                  <span className="projeto-spec-valor gold">{projeto.area}</span>
                </div>
              )}
              <div className="projeto-spec-item">
                <span className="projeto-spec-label">Tipo</span>
                <span className="projeto-spec-valor">{projeto.tipo}</span>
              </div>
              <div className="projeto-spec-item">
                <span className="projeto-spec-label">Serviços</span>
                <span className="projeto-spec-valor">{projeto.servicos}</span>
              </div>
              <div className="projeto-spec-item">
                <span className="projeto-spec-label">Status</span>
                <span className="projeto-spec-valor">{projeto.status}</span>
              </div>
            </div>

            {/* Fotos da obra */}
            <div className="projeto-renders">
              <p className="projeto-renders-titulo">Fotos da Obra</p>
              <div className="projeto-renders-grid">
                {projeto.fotos.map((img, i) => (
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

            {/* Projeto técnico */}
            {projeto.tecnico && projeto.tecnico.length > 0 && (
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
            )}

            {/* CTA */}
            <div className="projeto-cta">
              <div className="projeto-cta-texto">
                <h3>Interessado em um projeto assim?</h3>
                <p>Fale com a nossa equipe e veja como podemos executar sua obra.</p>
              </div>
              <a
                href={getWhatsAppUrl(projeto.whatsappMsg)}
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
        ))}

      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="projetos-lightbox" role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
