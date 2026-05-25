import { services } from "../data/siteContent.js";
import { Icon } from "./Icon.jsx";
import { SectionTitle } from "./SectionTitle.jsx";

const iconNames = ["frame", "layers", "ceiling", "modular", "wall", "tile", "vinyl", "paint"];

export function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <SectionTitle eyebrow="Serviços" title="Soluções completas para sua obra" align="center">
          Da estrutura ao acabamento, a OPPERMANN entrega serviços essenciais para construções e
          reformas com padrão elevado.
        </SectionTitle>
        <div className="cards-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-body">
                <div className="service-icon">
                  <Icon name={iconNames[index]} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
