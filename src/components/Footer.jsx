import { company, services } from "../data/siteContent.js";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <strong>{company.legalName}</strong>
          <p>Construção a seco com precisão, confiança e acabamento de alto padrão.</p>
        </div>
        <div>
          <span>CNPJ</span>
          <p>{company.cnpj}</p>
          <span>Cidade-base</span>
          <p>{company.baseCity}</p>
        </div>
        <div>
          <span>Serviços principais</span>
          <p>{services.map((service) => service.title).join(" • ")}</p>
        </div>
        <div>
          <span>WhatsApp</span>
          <p>{company.phoneDisplay}</p>
        </div>
      </div>
    </footer>
  );
}
