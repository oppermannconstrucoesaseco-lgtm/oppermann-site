import { company, images } from "../data/siteContent.js";
import { SectionTitle } from "./SectionTitle.jsx";

export function About() {
  return (
    <section id="quem-somos" className="section about">
      <div className="container about-grid">
        <div>
          <SectionTitle eyebrow="Quem somos" title="Especialistas em construção moderna">
            A OPPERMANN CONSTRUCAO A SECO LTDA atua com soluções técnicas para obras mais
            rápidas, limpas e eficientes, unindo organização, compromisso e acabamento de alto
            padrão.
          </SectionTitle>
          <p>
            Com base em {company.baseCity}, a empresa atende clientes que buscam uma execução
            profissional em steel frame, drywall, revestimentos, pintura e acabamentos da
            construção. Cada etapa é conduzida com atenção ao planejamento, qualidade dos detalhes
            e respeito ao prazo combinado.
          </p>
          <p>
            O resultado é uma obra mais inteligente: menos improviso, mais controle, ambientes bem
            finalizados e uma experiência de atendimento clara do primeiro contato à entrega.
          </p>
        </div>
        <figure className="about-image">
          <img src={images.about} alt="Estrutura steel frame organizada para construção a seco" />
          <figcaption>Precisão técnica para obras de alto padrão</figcaption>
        </figure>
      </div>
    </section>
  );
}
