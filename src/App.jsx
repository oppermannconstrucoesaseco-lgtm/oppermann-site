import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Services } from "./components/Services.jsx";
import { Differentials } from "./components/Differentials.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Stats } from "./components/Stats.jsx";
import { Clients } from "./components/Clients.jsx";
import { CommercialCall } from "./components/CommercialCall.jsx";
import { Faq } from "./components/Faq.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { WhatsAppButton } from "./components/WhatsAppButton.jsx";
import { BeforeAfter } from "./components/BeforeAfter.jsx";
import { PortfolioPage } from "./components/PortfolioPage.jsx";
import { ContactPage } from "./components/ContactPage.jsx";
import { ProjetosPage } from "./components/ProjetosPage.jsx";
import { ServiceSeoPage, getServicePage } from "./components/ServiceSeoPage.jsx";
import { EstudoPage } from "./components/EstudoPage.jsx";
import { LegalPage, getLegalPage } from "./components/LegalPage.jsx";
import { CnpjConsultaPage } from "./components/cnpj/CnpjConsultaPage.jsx";

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const isPortfolioPage = pathname === "/portfolio";
  const isContactPage = pathname === "/contato";
  const isProjetosPage = pathname === "/projetos";
  const isEstudoPage = pathname === "/estudo-drywall-alvenaria";
  const isCnpjPage = pathname === "/consulta-cnpj";
  const legalPage = getLegalPage(pathname);
  const servicePage = getServicePage(pathname);

  return (
    <>
      {/* Estrutura principal da landing page institucional. */}
      <Header />
      {isCnpjPage ? (
        <CnpjConsultaPage />
      ) : isPortfolioPage ? (
        <PortfolioPage />
      ) : isContactPage ? (
        <ContactPage />
      ) : isProjetosPage ? (
        <ProjetosPage />
      ) : isEstudoPage ? (
        <EstudoPage />
      ) : legalPage ? (
        <LegalPage pathname={legalPage} />
      ) : servicePage ? (
        <ServiceSeoPage page={servicePage} />
      ) : (
        <main>
          <Hero />
          <About />
          <Stats />
          <Clients />
          <Services />
          <Gallery />
          <BeforeAfter />
          <Differentials />
          <CommercialCall />
          <Faq />
          <Contact />
        </main>
      )}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
