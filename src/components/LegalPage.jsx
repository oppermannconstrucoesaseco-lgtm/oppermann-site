import { useEffect } from "react";
import { company } from "../data/siteContent.js";
import { getWhatsAppUrl } from "../utils/links.js";
import "../styles/legal.css";

const pages = {
  "/politica-de-privacidade": {
    title: "Política de Privacidade — Oppermann Construção a Seco",
    eyebrow: "Legal",
    heading: "Política de Privacidade",
    meta: "Saiba como a Oppermann Construção a Seco coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
    updated: "Atualizada em 28 de junho de 2026",
    sections: [
      {
        heading: "Quem somos",
        content: [
          `Esta Política de Privacidade se aplica ao site <strong>oppermannsteel.com.br</strong>, operado por <strong>${company.legalName}</strong>, CNPJ ${company.cnpj}, com sede em ${company.address}.`,
          "Ao utilizar nosso site ou entrar em contato conosco, você concorda com as práticas descritas nesta política."
        ]
      },
      {
        heading: "Dados que coletamos",
        list: [
          "Nome e informações de contato fornecidos voluntariamente pelo formulário do site",
          "Mensagens enviadas via WhatsApp ou e-mail ao solicitar orçamento",
          "Dados de navegação coletados por ferramentas de análise (páginas visitadas, tempo de sessão, dispositivo e localização aproximada)"
        ]
      },
      {
        heading: "Como usamos seus dados",
        list: [
          "Para responder às suas solicitações de orçamento e dúvidas",
          "Para melhorar a experiência de navegação no site",
          "Para análise de desempenho das páginas com ferramentas como Google Analytics",
          "Nunca vendemos, alugamos ou compartilhamos seus dados com terceiros para fins comerciais"
        ]
      },
      {
        heading: "Base legal (LGPD)",
        content: [
          "O tratamento de dados é realizado com base no <strong>legítimo interesse</strong> (art. 7º, IX da Lei 13.709/2018) para responder a contatos comerciais, e no <strong>consentimento</strong> do titular para uso de cookies analíticos."
        ]
      },
      {
        heading: "Cookies e rastreamento",
        content: [
          "Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos (Google Analytics) para entender como os visitantes interagem com nossas páginas. Você pode desativar cookies no seu navegador a qualquer momento."
        ]
      },
      {
        heading: "Seus direitos",
        list: [
          "Acessar os dados pessoais que temos sobre você",
          "Solicitar a correção de dados incorretos",
          "Solicitar a exclusão dos seus dados (ver /exclusao-de-dados)",
          "Revogar o consentimento a qualquer momento",
          "Solicitar a portabilidade dos seus dados"
        ]
      },
      {
        heading: "Retenção de dados",
        content: [
          "Mantemos dados de contato pelo período necessário para atender à sua solicitação e, após o encerramento do relacionamento comercial, por até 5 anos para fins contábeis e legais, conforme exigido pela legislação brasileira."
        ]
      },
      {
        heading: "Contato",
        content: [
          `Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo e-mail <strong>${company.email}</strong> ou pelo WhatsApp ${company.phoneDisplay}.`
        ],
        highlight: "Esta política pode ser atualizada periodicamente. A versão mais recente estará sempre disponível nesta página."
      }
    ]
  },

  "/termos-de-servico": {
    title: "Termos de Serviço — Oppermann Construção a Seco",
    eyebrow: "Legal",
    heading: "Termos de Serviço",
    meta: "Termos e condições que regem o uso do site e a contratação de serviços da Oppermann Construção a Seco.",
    updated: "Atualizado em 28 de junho de 2026",
    sections: [
      {
        heading: "Aceitação dos termos",
        content: [
          `Ao acessar o site <strong>oppermannsteel.com.br</strong> ou contratar serviços da <strong>${company.legalName}</strong> (CNPJ ${company.cnpj}), você concorda com estes Termos de Serviço. Se não concordar com algum ponto, por favor não utilize o site.`
        ]
      },
      {
        heading: "Sobre os serviços",
        content: [
          "A Oppermann Construção a Seco presta serviços de construção a seco, incluindo steel frame, drywall, forros, piso vinílico, pintura e projetos estruturais, com atuação em Itapema, Balneário Camboriú e região.",
          "As informações do site têm caráter institucional e informativo. Orçamentos, prazos e condições específicas são definidos individualmente em proposta formal."
        ]
      },
      {
        heading: "Uso permitido do site",
        list: [
          "Consultar informações sobre nossos serviços",
          "Solicitar orçamentos e entrar em contato",
          "Baixar materiais técnicos disponibilizados (como o estudo Drywall × Alvenaria)"
        ]
      },
      {
        heading: "Uso proibido",
        list: [
          "Reproduzir, copiar ou distribuir conteúdo do site sem autorização expressa",
          "Utilizar os conteúdos para fins comerciais sem licença",
          "Tentar acessar áreas restritas ou comprometer a segurança do site",
          "Enviar informações falsas nos formulários de contato"
        ]
      },
      {
        heading: "Propriedade intelectual",
        content: [
          "Todo o conteúdo deste site — textos, imagens, logotipos, estudos técnicos e layout — é de propriedade da Oppermann Construção a Seco ou de seus licenciadores e está protegido por direitos autorais. A reprodução parcial ou total exige autorização prévia por escrito."
        ]
      },
      {
        heading: "Limitação de responsabilidade",
        content: [
          "As informações deste site são fornecidas de boa-fé e para fins informativos gerais. A Oppermann não garante que o conteúdo estará sempre atualizado, completo ou isento de erros.",
          "Não nos responsabilizamos por decisões tomadas com base exclusivamente nas informações do site sem consulta técnica prévia."
        ]
      },
      {
        heading: "Links externos",
        content: [
          "O site pode conter links para sites de terceiros (como Instagram e WhatsApp). Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites."
        ]
      },
      {
        heading: "Alterações nos termos",
        content: [
          "Reservamo-nos o direito de atualizar estes Termos a qualquer momento. As alterações entram em vigor na data de publicação nesta página. O uso continuado do site após a publicação implica aceitação das alterações."
        ]
      },
      {
        heading: "Lei aplicável e foro",
        content: [
          "Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Itapema/SC para dirimir eventuais controvérsias."
        ],
        highlight: "Para dúvidas sobre estes Termos, entre em contato pelo e-mail " + company.email + " ou pelo WhatsApp " + company.phoneDisplay + "."
      }
    ]
  },

  "/exclusao-de-dados": {
    title: "Exclusão de Dados — Oppermann Construção a Seco",
    eyebrow: "Legal",
    heading: "Exclusão de Dados",
    meta: "Saiba como solicitar a exclusão dos seus dados pessoais mantidos pela Oppermann Construção a Seco, conforme a LGPD.",
    updated: "Atualizada em 28 de junho de 2026",
    sections: [
      {
        heading: "Seu direito à exclusão",
        content: [
          `A Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018) garante a você o direito de solicitar a exclusão dos seus dados pessoais mantidos pela <strong>${company.legalName}</strong>.`,
          "Levamos este direito a sério e nos comprometemos a processar sua solicitação de forma ágil e transparente."
        ]
      },
      {
        heading: "Quais dados podem ser excluídos",
        list: [
          "Nome, telefone e e-mail fornecidos em formulários de contato ou solicitações de orçamento",
          "Histórico de mensagens trocadas via WhatsApp ou e-mail comercial",
          "Qualquer outro dado pessoal que tenhamos coletado com seu consentimento"
        ]
      },
      {
        heading: "Como solicitar a exclusão",
        content: [
          "Envie sua solicitação por um dos canais abaixo, informando: seu nome completo, o dado específico que deseja excluir e a forma como nos forneceu esse dado (formulário do site, WhatsApp, e-mail etc.)."
        ],
        list: [
          `E-mail: ${company.email}`,
          `WhatsApp: ${company.phoneDisplay} (mensagem escrita identificando a solicitação)`
        ]
      },
      {
        heading: "Prazo de resposta",
        content: [
          "Confirmaremos o recebimento da sua solicitação em até <strong>2 dias úteis</strong> e concluiremos a exclusão em até <strong>15 dias corridos</strong>, conforme previsto na LGPD."
        ]
      },
      {
        heading: "Exceções legais",
        content: [
          "Em alguns casos, somos legalmente obrigados a manter determinados dados mesmo após a solicitação de exclusão, como:"
        ],
        list: [
          "Dados necessários para cumprimento de obrigação legal ou regulatória",
          "Dados relacionados a contratos em vigor ou em período de garantia",
          "Registros contábeis e fiscais exigidos pela legislação brasileira (prazo mínimo de 5 anos)"
        ]
      },
      {
        heading: "Confirmação da exclusão",
        content: [
          "Após concluído o processo, enviaremos uma confirmação por e-mail ou WhatsApp informando quais dados foram excluídos e, quando aplicável, quais não puderam ser excluídos com a justificativa legal correspondente."
        ],
        highlight: "Se tiver dúvidas ou não receber resposta dentro do prazo, entre em contato diretamente pelo WhatsApp " + company.phoneDisplay + "."
      }
    ]
  }
};

export function LegalPage({ pathname }) {
  const page = pages[pathname];

  useEffect(() => {
    if (!page) return;
    document.title = page.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", page.meta);
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `https://oppermannsteel.com.br${pathname}`);
  }, [page, pathname]);

  if (!page) return null;

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <div className="container legal-hero-inner">
          <span className="legal-eyebrow">{page.eyebrow}</span>
          <h1>{page.heading}</h1>
          <p className="legal-hero-meta">{page.updated}</p>
        </div>
      </section>

      <div className="legal-body">
        <div className="container">
          {page.sections.map((section) => (
            <section className="legal-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.content && section.content.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
              {section.list && (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.highlight && (
                <div className="legal-highlight">
                  <p>{section.highlight}</p>
                </div>
              )}
            </section>
          ))}

          <div className="legal-contact-box">
            <div className="legal-contact-box-text">
              <strong>Dúvidas sobre privacidade ou seus dados?</strong>
              <span>Fale diretamente com a equipe da Oppermann.</span>
            </div>
            <a
              className="btn btn-primary"
              href={getWhatsAppUrl("Olá, tenho uma dúvida sobre privacidade e dados pessoais.")}
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export function getLegalPage(pathname) {
  return pages[pathname] ? pathname : null;
}
