import { useState } from "react";
import { SectionTitle } from "./SectionTitle.jsx";
import { getWhatsAppUrl } from "../utils/links.js";

const faqs = [
  {
    question: "Qual é o prazo típico para execução dos serviços?",
    answer:
      "O prazo varia conforme o escopo da obra. Trabalhos em drywall e forros costumam ser concluídos em dias, enquanto projetos maiores em steel frame podem durar semanas. Em todos os casos, apresentamos um cronograma detalhado antes do início e trabalhamos para cumpri-lo."
  },
  {
    question: "Drywall é tão resistente quanto alvenaria?",
    answer:
      "Sim. Quando executado corretamente, o drywall oferece resistência equivalente à alvenaria convencional, com vantagens adicionais: é mais leve, permite retrabalhos sem quebradeira, tem melhor desempenho acústico e térmico com isolamento, e sua execução é muito mais limpa e rápida."
  },
  {
    question: "Quais são as vantagens do steel frame em relação à construção tradicional?",
    answer:
      "O steel frame é até 40% mais rápido, gera muito menos entulho, permite um controle preciso das medidas e tem excelente desempenho estrutural. É ideal para obras que precisam de agilidade sem abrir mão da qualidade e do acabamento de alto padrão."
  },
  {
    question: "A Oppermann faz projeto estrutural e cálculo?",
    answer:
      "Sim. Oferecemos projeto completo de steel frame com cálculo estrutural, compatibilização entre sistemas e emissão de pranchas técnicas. É o ponto de partida ideal para garantir que a obra seja executada com segurança e dentro das normas."
  },
  {
    question: "Em quais cidades vocês atendem?",
    answer:
      "Atendemos Itapema, Balneário Camboriú, Porto Belo, Bombinhas, Itajaí e Navegantes. Para projetos fora dessas cidades, entre em contato para avaliarmos a viabilidade."
  },
  {
    question: "Como funciona o processo para solicitar um orçamento?",
    answer:
      "É simples: entre em contato pelo WhatsApp ou pelo formulário do site com uma descrição do que precisa — tipo de serviço, metragem estimada e localização. Nossa equipe retorna rapidamente para agendar uma visita técnica ou aprofundar as informações necessárias para o orçamento."
  },
  {
    question: "Os serviços têm garantia?",
    answer:
      "Sim. Todos os nossos serviços são executados seguindo as normas técnicas vigentes e contam com garantia de execução. Qualquer problema relacionado à mão de obra dentro do período de garantia é resolvido sem custo adicional."
  }
];

export function Faq() {
  const [open, setOpen] = useState(null);

  function toggle(index) {
    setOpen(open === index ? null : index);
  }

  return (
    <section className="section faq-section">
      <div className="container">
        <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" align="center">
          Respostas rápidas para as dúvidas mais comuns sobre nossos serviços.
        </SectionTitle>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const panelId = `faq-panel-${index}`;
            return (
              <div key={item.question} className={`faq-item${open === index ? " faq-item--open" : ""}`}>
                <button
                  className="faq-question"
                  onClick={() => toggle(index)}
                  aria-expanded={open === index}
                  aria-controls={panelId}
                >
                  <span>{item.question}</span>
                  <svg
                    className="faq-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {open === index && (
                  <div id={panelId} className="faq-answer" role="region" aria-label={item.question}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="faq-cta">
          <p>Ainda tem dúvidas? Fale diretamente com nossa equipe.</p>
          <a
            className="btn btn-primary"
            href={getWhatsAppUrl("Olá, tenho uma dúvida sobre os serviços da Oppermann.")}
            target="_blank"
            rel="noreferrer"
          >
            Tirar dúvida no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
