import { company, images } from "../data/siteContent.js";
import { SectionTitle } from "./SectionTitle.jsx";

export function About() {
  return (
    <section id="quem-somos" className="section about">
      <div className="container about-grid">
        <div>
          <SectionTitle eyebrow="Quem somos" title="Especialistas em construção moderna">
            Com mais de 20 anos de experiência no setor — 15 deles em Curitiba, um dos mercados
            mais exigentes do país — a Oppermann chegou ao litoral de Santa Catarina trazendo
            o mesmo padrão técnico de alto nível.
          </SectionTitle>
          <p>
            Com base em {company.baseCity}, atendemos clientes que buscam execução profissional
            em steel frame, drywall, revestimentos, pintura e acabamentos. Cada etapa é conduzida
            com atenção ao planejamento, qualidade dos detalhes e respeito ao prazo combinado.
          </p>
          <p>
            O resultado é uma obra mais inteligente: menos improviso, mais controle, ambientes bem
            finalizados e uma experiência de atendimento clara do primeiro contato à entrega.
          </p>
        </div>
        <figure className="about-image">
          <img src={images.about} alt="Estrutura steel frame organizada para construção a seco" loading="lazy" />
          <figcaption>Precisão técnica para obras de alto padrão</figcaption>
        </figure>
      </div>
    </section>
  );
}
