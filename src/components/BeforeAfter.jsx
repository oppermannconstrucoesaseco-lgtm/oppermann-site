import { getWhatsAppUrl } from "../utils/links.js";
import { SectionTitle } from "./SectionTitle.jsx";
import antes from "../assets/antes-depois-antes.jpg";
import depois from "../assets/antes-depois-depois.jpg";

export function BeforeAfter() {
  return (
    <section className="section before-after">
      <div className="container">
        <SectionTitle eyebrow="Antes e depois" title="Do início ao acabamento" align="center">
          A mesma obra, dois momentos. Veja a transformação que a Oppermann entrega.
        </SectionTitle>

        <div className="before-after-grid">
          <figure className="before-after-card">
            <div className="before-after-label before-after-label--antes">Antes</div>
            <img src={antes} alt="Corredor em fase de estrutura — steel frame e instalações aparentes" loading="lazy" />
          </figure>

          <figure className="before-after-card">
            <div className="before-after-label before-after-label--depois">Depois</div>
            <img src={depois} alt="Corredor finalizado — drywall, pintura, forro e piso concluídos" loading="lazy" />
          </figure>
        </div>

        <div className="before-after-cta">
          <a className="btn btn-primary" href={getWhatsAppUrl("Olá, vi o antes e depois no site e quero um orçamento.")} target="_blank" rel="noreferrer">
            Quero esse resultado na minha obra
          </a>
        </div>
      </div>
    </section>
  );
}
