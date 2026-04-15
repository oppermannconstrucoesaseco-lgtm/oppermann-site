import { getWhatsAppUrl } from "../utils/links.js";

export function CommercialCall() {
  return (
    <section className="commercial-call">
      <div className="container call-content">
        <p>Pronto para construir com mais eficiência?</p>
        <h2>Solicite um orçamento e leve mais precisão, limpeza e alto padrão para sua obra.</h2>
        <a className="btn btn-primary" href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
