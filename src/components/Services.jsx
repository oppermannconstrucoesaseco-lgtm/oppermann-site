import { services } from "../data/siteContent.js";
import { Icon } from "./Icon.jsx";
import { SectionTitle } from "./SectionTitle.jsx";

const iconNames = ["frame", "layers", "ceiling", "modular", "wall", "tile", "vinyl", "paint", "blueprint"];

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
            <a className="service-card" key={service.title} href={service.url}>
              <div className="service-body">
                <div className="service-icon">
                  <Icon name={iconNames[index]} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className="service-link">Ver mais →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
