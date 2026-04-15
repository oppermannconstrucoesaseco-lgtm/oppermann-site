import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Services } from "./components/Services.jsx";
import { Differentials } from "./components/Differentials.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { CommercialCall } from "./components/CommercialCall.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { WhatsAppButton } from "./components/WhatsAppButton.jsx";
import { PortfolioPage } from "./components/PortfolioPage.jsx";

export default function App() {
  const isPortfolioPage = window.location.pathname.replace(/\/$/, "") === "/portfolio";

  return (
    <>
      {/* Estrutura principal da landing page institucional. */}
      <Header />
      {isPortfolioPage ? (
        <PortfolioPage />
      ) : (
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Differentials />
          <CommercialCall />
          <Contact />
        </main>
      )}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
