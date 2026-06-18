import { useEffect } from "react";
import { getWhatsAppUrl } from "../utils/links.js";
import "../styles/estudo.css";

const metrics = [
  { value: "−77%", label: "Redução de peso na estrutura", detail: "De 194 kg/m² para apenas 23 kg/m²" },
  { value: "+3,2 m²", label: "Área útil por apartamento", detail: "Com parede de 95mm vs. alvenaria de 130mm" },
  { value: "2×", label: "Mais produtivo", detail: "35–40 m²/dia vs. 15–20 m²/dia" },
  { value: "−19%", label: "Economia de custo direto", detail: "R$ 132–150/m² vs. R$ 150–170/m²" },
  { value: "−80%", label: "Menos entulho em obra", detail: "Apenas ~5% de desperdício de material" },
  { value: "R$ 156–333 mil", label: "Economia total estimada", detail: "Para 6 apartamentos de 80 m² (mat. + MO + área recuperada)" }
];

const specs = [
  { ambiente: "Quartos / Dormitórios", sistema: "95mm ST + Lã PET 50mm", exigencia: "Rw 44–46 dB" },
  { ambiente: "Suítes (face banheiro)", sistema: "120mm Dupla + Lã", exigencia: "Rw 50–52 dB" },
  { ambiente: "Sala de estar / jantar", sistema: "95mm ST + Lã PET 50mm", exigencia: "Conforto acústico" },
  { ambiente: "Banheiros", sistema: "95mm RU + Lã PET 50mm", exigencia: "Resistência à umidade" },
  { ambiente: "Cozinha / Lavanderia", sistema: "95mm RU + Lã PET 50mm", exigencia: "Resistência à umidade" },
  { ambiente: "Paredes entre unidades", sistema: "120mm Dupla + Lã", exigencia: "DnT,w ≥ 45 dB (NBR 15575)" }
];

const risks = [
  {
    nivel: "ALTO",
    risco: "Acústica insuficiente",
    problema: "Drywall simples SEM lã tem Rw inferior à alvenaria",
    solucao: "Lã PET obrigatória. Entre unidades: dupla chapa (120mm ou 193mm)"
  },
  {
    nivel: "ALTO",
    risco: "Resistência ao fogo",
    problema: "TRRF é do sistema completo — chapa RF isolada não garante",
    solucao: "Usar sistemas com laudo IPT/IBAPE. Confirmar com projeto PPCI"
  },
  {
    nivel: "ALTO",
    risco: "Execução sem qualificação",
    problema: "Profissional não habilitado invalida o desempenho do sistema",
    solucao: "Contratar empresa especializada com checklist de liberação assinado"
  },
  {
    nivel: "MÉDIO",
    risco: "Umidade em áreas molhadas",
    problema: "Chapa RU resiste à umidade controlada — não é impermeável",
    solucao: "Impermeabilização da base obrigatória antes do revestimento"
  }
];

export function EstudoPage() {
  useEffect(() => {
    document.title = "Estudo Drywall × Alvenaria | OPPERMANN Construção a Seco";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", "Estudo técnico de viabilidade: substituição de alvenaria por drywall em empreendimentos residenciais. Comparativo técnico, acústico e econômico com dados reais.");
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://oppermannsteel.com.br/estudo-drywall-alvenaria");
  }, []);

  return (
    <main className="estudo-page">

      {/* Hero */}
      <section className="estudo-hero">
        <div className="container estudo-hero-inner">
          <div className="estudo-hero-badge">Documento EST-DRY-002/2026 · Revisão 2.1</div>
          <h1>Drywall × Alvenaria</h1>
          <p className="estudo-hero-sub">
            Estudo técnico de viabilidade para substituição de paredes em empreendimentos residenciais —
            comparativo técnico, acústico, econômico e executivo.
          </p>
          <p className="estudo-hero-modelo">Modelo base: 6 apartamentos · 80 m² · 32 m lineares de paredes</p>
          <div className="estudo-hero-actions">
            <a
              className="btn btn-primary"
              href="/estudo-drywall-alvenaria.pptx"
              download="Oppermann_Estudo_Drywall_Alvenaria.pptx"
            >
              Baixar estudo completo
            </a>
            <a
              className="btn btn-secondary"
              href={getWhatsAppUrl("Olá, vi o estudo de Drywall × Alvenaria no site e gostaria de solicitar uma proposta técnica.")}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar proposta técnica
            </a>
          </div>
        </div>
      </section>

      {/* Métricas principais */}
      <section className="section estudo-metrics-section">
        <div className="container">
          <div className="estudo-section-header">
            <span className="estudo-eyebrow">Números que mudam a decisão</span>
            <h2>O impacto real em um empreendimento de 6 apartamentos</h2>
          </div>
          <div className="estudo-metrics-grid">
            {metrics.map((m) => (
              <div key={m.value} className="estudo-metric-card">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
                <p>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparativo */}
      <section className="section estudo-compare-section">
        <div className="container">
          <div className="estudo-section-header">
            <span className="estudo-eyebrow">Comparativo técnico</span>
            <h2>Alvenaria vs. Drywall — critérios decisivos</h2>
          </div>
          <div className="estudo-compare-grid">
            <div className="estudo-compare-col estudo-compare-col--alv">
              <h3>Alvenaria convencional</h3>
              <ul>
                <li>194 a 275 kg/m² — carga elevada na estrutura</li>
                <li>15–20 m²/dia por operário</li>
                <li>Até 25% de desperdício e entulho</li>
                <li>Rasgos para instalações: retrabalho e custo extra</li>
                <li>Layout rígido — reformas custosas</li>
                <li>Consumo de água e tempo de cura</li>
                <li>R$ 150–170/m² (material + mão de obra)</li>
              </ul>
            </div>
            <div className="estudo-compare-col estudo-compare-col--dry">
              <h3>Drywall (Oppermann)</h3>
              <ul>
                <li>22 a 45 kg/m² — redução de até 91% de carga</li>
                <li>35–40 m²/dia — 2× mais produtivo</li>
                <li>Apenas ~5% de desperdício</li>
                <li>Instalações passam pelo interior da parede</li>
                <li>Layout flexível — fácil realocação</li>
                <li>Obra a seco — sem espera de cura</li>
                <li>R$ 132–150/m² (material + mão de obra)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Especificação por ambiente */}
      <section className="section estudo-specs-section">
        <div className="container">
          <div className="estudo-section-header">
            <span className="estudo-eyebrow">Especificação técnica</span>
            <h2>Sistema correto para cada ambiente</h2>
          </div>
          <div className="estudo-specs-table-wrap">
            <table className="estudo-specs-table">
              <thead>
                <tr>
                  <th>Ambiente</th>
                  <th>Sistema</th>
                  <th>Exigência</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((s) => (
                  <tr key={s.ambiente}>
                    <td>{s.ambiente}</td>
                    <td>{s.sistema}</td>
                    <td>{s.exigencia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="estudo-specs-note">
            NBR 15575:2013 (rev. 2021) — DnT,w mínimo entre unidades habitacionais com dormitório: ≥ 45 dB.
            NBR 15758:2025 — Sistemas em chapas de gesso: projeto, desempenho e execução.
          </p>
        </div>
      </section>

      {/* Riscos */}
      <section className="section estudo-risks-section">
        <div className="container">
          <div className="estudo-section-header">
            <span className="estudo-eyebrow">Riscos e soluções técnicas</span>
            <h2>O que pode dar errado — e como evitar</h2>
          </div>
          <div className="estudo-risks-grid">
            {risks.map((r) => (
              <div key={r.risco} className="estudo-risk-card">
                <div className="estudo-risk-header">
                  <span className={`estudo-risk-badge estudo-risk-badge--${r.nivel === "ALTO" ? "high" : "mid"}`}>{r.nivel}</span>
                  <strong>{r.risco}</strong>
                </div>
                <p className="estudo-risk-problem">⚠ {r.problema}</p>
                <p className="estudo-risk-solution">✓ {r.solucao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section estudo-cta-section">
        <div className="container estudo-cta-inner">
          <span className="estudo-eyebrow">Próximos passos</span>
          <h2>Pronto para especificar drywall no seu empreendimento?</h2>
          <p>
            A Oppermann realiza levantamento real das metragens, especificação por ambiente com projeto,
            compatibilização de instalações e orçamento executivo detalhado.
          </p>
          <div className="estudo-cta-actions">
            <a
              className="btn btn-primary"
              href={getWhatsAppUrl("Olá, vi o estudo de Drywall × Alvenaria no site e gostaria de solicitar uma proposta técnica.")}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar proposta técnica
            </a>
            <a
              className="btn btn-secondary"
              href="/estudo-drywall-alvenaria.pptx"
              download="Oppermann_Estudo_Drywall_Alvenaria.pptx"
            >
              Baixar estudo completo
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
