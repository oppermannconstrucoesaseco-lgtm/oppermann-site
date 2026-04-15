import logoOppermann from "../assets/logo-oppermann.png";
import { getWhatsAppUrl } from "../utils/links.js";

const navItems = [
  ["Quem somos", "#quem-somos"],
  ["Serviços", "#servicos"],
  ["Portfólio", "/portfolio"],
  ["Diferenciais", "#diferenciais"],
  ["Obras", "#obras"],
  ["Contato", "#contato"]
];

export function Header() {
  const isPortfolioPage = window.location.pathname.replace(/\/$/, "") === "/portfolio";

  return (
    <header className="site-header">
      <a className="brand" href={isPortfolioPage ? "/" : "#home"} aria-label="Ir para o início">
        <img src={logoOppermann} alt="OPPERMANN Construção a Seco" />
      </a>

      <nav className="site-nav" aria-label="Navegação principal">
        {navItems.map(([label, href]) => (
          <a
            aria-current={isPortfolioPage && href === "/portfolio" ? "page" : undefined}
            key={href}
            href={isPortfolioPage && href.startsWith("#") ? `/${href}` : href}
          >
            {label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
        Orçamento
      </a>
    </header>
  );
}

