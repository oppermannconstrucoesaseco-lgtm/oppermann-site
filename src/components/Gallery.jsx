import { galleryItems } from "../data/siteContent.js";
import { SectionTitle } from "./SectionTitle.jsx";

export function Gallery() {
  return (
    <section id="obras" className="section gallery-section">
      <div className="container">
        <SectionTitle eyebrow="Obras executadas" title="Projetos em destaque" align="center">
          Obras executadas com alto padrão, precisão e acabamento profissional.
        </SectionTitle>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img src={item.image} alt={`${item.title} - ${item.label}`} loading="lazy" />
              <div>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

