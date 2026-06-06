import { useState, useEffect } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/$/, "");
  const isPortfolioPage = pathname === "/portfolio";
  const isProjetosPage = pathname === "/projetos";
  const isSubPage = isPortfolioPage || isProjetosPage;

  // Fecha o menu ao pressionar ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Bloqueia scroll do body quando menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const resolveHref = (href) =>
    isSubPage && href.startsWith("#") ? `/${href}` : href;

  return (
    <>
      <header className="site-header">
        <a className="brand" href={isSubPage ? "/" : "#home"} aria-label="Ir para o início">
          <img src={logoOppermann} alt="OPPERMANN Construção a Seco" />
        </a>

        {/* Nav desktop */}
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
              href={resolveHref(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          {/* Botão hambúrguer — só mobile */}
          <button
            className={`hamburger-btn${menuOpen ? " is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <a
            className="header-sistema"
            href="https://oppermann-site.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            Acessar Sistema
          </a>
          <a className="header-contact" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            Orçamento
          </a>
        </div>
      </header>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          {/* Overlay para fechar clicando fora */}
          <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />

          <nav className="mobile-menu-panel" aria-label="Navegação mobile">
            <div className="mobile-menu-header">
              <img src={logoOppermann} alt="OPPERMANN" className="mobile-menu-logo" />
              <button
                className="mobile-menu-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <ul className="mobile-menu-links">
              {navItems.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={resolveHref(href)}
                    aria-current={
                      (isPortfolioPage && href === "/portfolio") ||
                      (isProjetosPage && href === "/projetos")
                        ? "page"
                        : undefined
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              className="mobile-menu-cta mobile-menu-cta--sistema"
              href="https://oppermann-site.vercel.app"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/>
              </svg>
              Acessar Sistema
            </a>
            <a
              className="mobile-menu-cta"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Solicitar orçamento
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
