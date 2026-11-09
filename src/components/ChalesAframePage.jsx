import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "../utils/links.js";
import "../styles/chales-aframe.css";

import chaleCover from "../assets/chales-aframe/chale-aframe-cover.jpg";
import chaleProjeto from "../assets/chales-aframe/chale-aframe-projeto.jpg";
import chaleExecucao from "../assets/chales-aframe/chale-aframe-execucao.jpg";
import chaleEntrega from "../assets/chales-aframe/chale-aframe-entrega.jpg";

const etapas = [
  {
    num: "01",
    label: "Projeto",
    titulo: "Tudo começa com uma boa ideia.",
    descricao: "Planejamento estrutural completo em Light Steel Frame. Calculamos cada peça do seu chalé A-Frame para garantir segurança, eficiência e agilidade na execução.",
    img: chaleProjeto,
    alt: "Projeto estrutural de chalé A-Frame em Light Steel Frame — Oppermann",
  },
  {
    num: "02",
    label: "Execução",
    titulo: "O projeto começa a ganhar forma.",
    descricao: "Precisão, organização e acompanhamento em cada etapa. Montamos a estrutura em Light Steel Frame com velocidade e qualidade comprovadas.",
    img: chaleExecucao,
    alt: "Execução de estrutura em Light Steel Frame para chalé A-Frame — Oppermann",
  },
  {
    num: "03",
    label: "Entrega",
    titulo: "Do projeto à entrega das chaves.",
    descricao: "Um novo espaço pronto para viver novas histórias. Chalé A-Frame completo, do projeto ao acabamento, com total transparência e suporte.",
    img: chaleEntrega,
    alt: "Chalé A-Frame entregue — Oppermann Construção a Seco",
  },
];

export function ChalesAframePage() {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    document.title = "Chalés A-Frame em Steel Frame | Oppermann — Itapema e Região";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "A Oppermann projeta e constrói chalés A-Frame em Light Steel Frame. Do projeto à entrega das chaves, com precisão e acabamento de alto padrão em SC.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://oppermannsteel.com.br/chales-a-frame");
  }, []);

  useEffect(() => {
    const fechar = (e) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", fechar);
    return () => window.removeEventListener("keydown", fechar);
  }, []);

  return (
    <main className="chales-page">
      {/* Hero */}
      <section className="chales-hero">
        <div className="container">
          <div className="chales-hero-grid">
            <div className="chales-hero-content">
              <span className="chales-eyebrow">Oppermann — Construção a Seco</span>
              <h1>Chalés A-Frame<br />em Steel Frame</h1>
              <p>
                Seu refúgio começa com um projeto bem planejado. A Oppermann
                projeta e constrói chalés A-Frame em Light Steel Frame — do
                projeto estrutural à entrega das chaves.
              </p>
              <div className="chales-hero-actions">
                <a
                  href={getWhatsAppUrl("Olá! Tenho interesse em um chalé A-Frame em Steel Frame. Gostaria de saber mais sobre o projeto e valores.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-chale-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Solicitar proposta
                </a>
              </div>
            </div>
            <div className="chales-hero-img-wrap">
              <img
                src={chaleCover}
                alt="Chalé A-Frame em Light Steel Frame — Oppermann Construção a Seco"
                className="chales-hero-img"
                onClick={() => setLightbox({ src: chaleCover, alt: "Chalé A-Frame — Oppermann" })}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais do A-Frame */}
      <section className="chales-diferenciais">
        <div className="container">
          <p className="chales-section-label">Por que escolher o A-Frame em Steel Frame</p>
          <div className="chales-dif-grid">
            {[
              { icon: "⚡", titulo: "Rápido", texto: "Montagem ágil: a estrutura metálica é pré-fabricada e encaixada em campo, reduzindo drasticamente o prazo de obra." },
              { icon: "🏔", titulo: "Resistente", texto: "O Light Steel Frame suporta ventos, umidade e variações térmicas. Ideal para regiões litorâneas e serranas." },
              { icon: "📐", titulo: "Preciso", texto: "Projeto estrutural calculado por engenheiros, com cada peça dimensionada para o seu terreno e sua necessidade." },
              { icon: "🌿", titulo: "Sustentável", texto: "Menos desperdício de materiais, sem entulho e com pegada ambiental muito menor do que a construção convencional." },
            ].map((d) => (
              <div key={d.titulo} className="chales-dif-item">
                <span className="chales-dif-icon">{d.icon}</span>
                <h3>{d.titulo}</h3>
                <p>{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Etapas */}
      <section className="chales-etapas">
        <div className="container">
          <p className="chales-section-label">Do projeto à entrega das chaves</p>
          <div className="chales-etapas-lista">
            {etapas.map((etapa) => (
              <div key={etapa.num} className="chales-etapa-item">
                <div className="chales-etapa-img-wrap">
                  <img
                    src={etapa.img}
                    alt={etapa.alt}
                    className="chales-etapa-img"
                    onClick={() => setLightbox({ src: etapa.img, alt: etapa.alt })}
                  />
                </div>
                <div className="chales-etapa-content">
                  <span className="chales-etapa-num">{etapa.num}</span>
                  <span className="chales-etapa-label">{etapa.label}</span>
                  <h2>{etapa.titulo}</h2>
                  <p>{etapa.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="chales-cta">
        <div className="container chales-cta-inner">
          <div>
            <h2>Pronto para começar o seu chalé?</h2>
            <p>Fale com a nossa equipe e receba uma proposta personalizada para o seu projeto.</p>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Quero saber mais sobre chalés A-Frame em Steel Frame. Pode me enviar mais informações e valores?")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-chale-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Solicitar proposta
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="chales-lightbox" role="dialog" aria-modal="true" aria-label="Imagem ampliada" onClick={() => setLightbox(null)}>
          <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}
