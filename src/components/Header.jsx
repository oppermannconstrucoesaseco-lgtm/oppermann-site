import logoOppermann from "../assets/logo-oppermann.png";
import { getWhatsAppUrl } from "../utils/links.js";

const navItems = [
  ["Quem somos", "#quem-somos"],
  ["Serviços", "#servicos"],
  ["Portfólio", "/portfolio"],
  ["Diferenciais", "#diferenciais"],
  ["Projetos", "/projetos"],
  ["Contato", "#contato"]
];

export function Header() {
  const pathname = window.location.pathname.replace(/\/$/, "");
  const isPortfolioPage = pathname === "/portfolio";
  const isProjetosPage = pathname === "/projetos";
  const isSubPage = isPortfolioPage || isProjetosPage;

  return (
    <header className="site-header">
      <a className="brand" href={isSubPage ? "/" : "#home"} aria-label="Ir para o início">
        <img src={logoOppermann} alt="OPPERMANN Construção a Seco" />
      </a>

      <nav className="site-nav" aria-label="Navegação principal">
        {navItems.map(([label, href]) => (
          <a
            aria-current={
              (isPortfolioPage && href === "/portfolio") ||
              (isProjetosPage && href === "/projetos")
                ? "page"
                : undefined
            }
            key={href}
            href={isSubPage && href.startsWith("#") ? `/${href}` : href}
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

