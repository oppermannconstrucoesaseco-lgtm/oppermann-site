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
          <span style={{ marginTop: "16px", display: "block" }}>Conteúdo técnico</span>
          <p><a href="/estudo-drywall-alvenaria" style={{ color: "var(--color-gold)", textDecoration: "none" }}>Estudo Drywall × Alvenaria</a></p>
        </div>
        <div>
          <span>WhatsApp</span>
          <p>{company.phoneDisplay}</p>
          <span style={{ marginTop: "16px", display: "block" }}>Legal</span>
          <p style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <a href="/politica-de-privacidade" style={{ color: "var(--color-muted)", textDecoration: "none", fontSize: "0.85rem" }}>Política de Privacidade</a>
            <a href="/termos-de-servico" style={{ color: "var(--color-muted)", textDecoration: "none", fontSize: "0.85rem" }}>Termos de Serviço</a>
            <a href="/exclusao-de-dados" style={{ color: "var(--color-muted)", textDecoration: "none", fontSize: "0.85rem" }}>Exclusão de Dados</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
