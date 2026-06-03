import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Services } from "./components/Services.jsx";
import { Differentials } from "./components/Differentials.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Stats } from "./components/Stats.jsx";
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

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, "") || "/";
  const isPortfolioPage = pathname === "/portfolio";
  const isContactPage = pathname === "/contato";
  const isProjetosPage = pathname === "/projetos";
  const servicePage = getServicePage(pathname);

  return (
    <>
      {/* Estrutura principal da landing page institucional. */}
      <Header />
      {isPortfolioPage ? (
        <PortfolioPage />
      ) : isContactPage ? (
        <ContactPage />
      ) : isProjetosPage ? (
        <ProjetosPage />
      ) : servicePage ? (
        <ServiceSeoPage page={servicePage} />
      ) : (
        <main>
          <Hero />
          <About />
          <Stats />
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
