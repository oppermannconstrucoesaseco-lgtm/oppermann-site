import { SectionTitle } from "./SectionTitle.jsx";

const clients = [
  { name: "FG Empreendimentos", detail: "Balneário Camboriú" },
  { name: "Pasqualotto & GT", detail: "Balneário Camboriú" },
  { name: "AJ Realt", detail: "Balneário Camboriú" },
  { name: "CNA Empreendimentos", detail: "Itapema" }
];

export function Clients() {
  return (
    <section className="section clients-section">
      <div className="container">
        <SectionTitle eyebrow="Clientes" title="Empresas que confiam na Oppermann" align="center">
          Em 5 anos atuando no litoral de Santa Catarina, executamos obras para algumas das
          maiores incorporadoras da região.
        </SectionTitle>
        <div className="clients-grid">
          {clients.map((client) => (
            <div key={client.name} className="client-card">
              <span className="client-name">{client.name}</span>
              <span className="client-detail">{client.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
