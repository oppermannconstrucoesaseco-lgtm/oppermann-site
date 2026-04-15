import { differentials } from "../data/siteContent.js";
import { SectionTitle } from "./SectionTitle.jsx";

export function Differentials() {
  return (
    <section id="diferenciais" className="section differentials">
      <div className="container differentials-grid">
        <SectionTitle eyebrow="Diferenciais" title="Construção com método, cuidado e padrão">
          Processos mais organizados reduzem desperdícios, melhoram a previsibilidade e elevam a
          qualidade final da obra.
        </SectionTitle>
        <div className="differential-list">
          {differentials.map((item, index) => (
            <div className="differential-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
