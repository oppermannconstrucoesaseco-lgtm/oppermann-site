import { formatCnpj, formatCep, formatPhone, formatDate, formatCurrency } from '../../utils/formatters.js';

function Field({ label, value, wide = false }) {
  if (!value && value !== 0) return null;
  return (
    <div className={wide ? 'sm:col-span-2 lg:col-span-3' : ''}>
      <p className="text-xs font-semibold uppercase tracking-widest text-op-muted mb-1">{label}</p>
      <p className="text-op-text text-sm leading-relaxed break-words">{value}</p>
    </div>
  );
}

function SituacaoBadge({ situacao }) {
  if (!situacao) return null;
  const desc = (situacao.descricao || '').toUpperCase();
  const isAtiva = desc === 'ATIVA';
  return (
    <span
      className={
        isAtiva
          ? 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-emerald-900/20 text-emerald-400 border-emerald-500/30'
          : 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border bg-red-900/20 text-red-400 border-red-500/30'
      }
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {situacao.descricao}
    </span>
  );
}

export function CnpjSummaryCard({ data }) {
  const end = data.endereco || {};
  const streetParts = [end.logradouro, end.numero, end.complemento].filter(Boolean);
  const street = streetParts.join(', ');
  const city = [end.municipio?.descricao, end.uf].filter(Boolean).join(' / ');
  const cep = end.cep ? formatCep(end.cep) : null;

  const phone = data.telefones?.[0]
    ? formatPhone(data.telefones[0].ddd, data.telefones[0].numero)
    : null;
  const email = data.emails?.[0]?.email || null;

  const cnaePrincipal = data.cnae_fiscal_principal
    ? `${data.cnae_fiscal_principal.id} — ${data.cnae_fiscal_principal.descricao}`
    : null;

  const inscEst = data.inscricoes_estaduais?.length
    ? data.inscricoes_estaduais
        .map((ie) => ie.inscricao || ie.numero || String(ie))
        .filter(Boolean)
        .join('  ·  ')
    : null;

  const simples = data.simples;
  const optanteSimples = simples?.simples === 'S' ? 'Sim' : simples?.simples === 'N' ? 'Não' : null;
  const optanteMei = simples?.mei === 'S' ? 'Sim' : simples?.mei === 'N' ? 'Não' : null;

  return (
    <div className="bg-op-panel border border-op-line rounded-2xl overflow-hidden shadow-lg">
      {/* Header bar */}
      <div className="px-6 pt-6 pb-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-xl font-bold text-op-text leading-snug break-words">
            {data.razao_social || '—'}
          </h2>
          {data.nome_fantasia && data.nome_fantasia !== data.razao_social && (
            <p className="text-op-muted text-sm mt-1 italic">{data.nome_fantasia}</p>
          )}
          {data.atualizado_em && (
            <p className="text-xs text-op-muted mt-2">
              Atualizado em {formatDate(data.atualizado_em)}
            </p>
          )}
        </div>
        <div className="shrink-0">
          <SituacaoBadge situacao={data.situacao_cadastral} />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-op-line mx-6" />

      {/* Grid */}
      <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
        <Field label="CNPJ"            value={formatCnpj(data.cnpj)} />
        <Field label="Data de Abertura" value={formatDate(data.data_inicio_atividade)} />
        <Field label="Capital Social"   value={formatCurrency(data.capital_social)} />
        <Field label="Natureza Jurídica" value={data.natureza_juridica?.descricao} />
        <Field label="Porte"            value={data.porte?.descricao} />
        <Field label="Qualif. Responsável" value={data.qualificacao_do_responsavel?.descricao} />
        <Field label="Optante Simples"  value={optanteSimples} />
        <Field label="Optante MEI"      value={optanteMei} />
        {data.situacao_cadastral?.data && (
          <Field label="Data da Situação" value={formatDate(data.situacao_cadastral.data)} />
        )}
        {data.situacao_cadastral?.motivo?.descricao && (
          <Field label="Motivo Situação" value={data.situacao_cadastral.motivo.descricao} />
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-op-line mx-6" />

      {/* Address + contact */}
      <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
        {street  && <Field label="Logradouro" value={street} />}
        {end.bairro && <Field label="Bairro"   value={end.bairro} />}
        {city    && <Field label="Cidade / UF" value={city} />}
        {cep     && <Field label="CEP"        value={cep} />}
        {end.pais?.nome && <Field label="País" value={end.pais.nome} />}
        {phone   && <Field label="Telefone"   value={phone} />}
        {email   && <Field label="E-mail"     value={email} />}
        {inscEst && <Field label="Inscrição Estadual" value={inscEst} />}
      </div>

      {/* CNAE */}
      {cnaePrincipal && (
        <>
          <div className="border-t border-op-line mx-6" />
          <div className="px-6 py-5">
            <Field label="CNAE Principal" value={cnaePrincipal} wide />
          </div>
        </>
      )}
    </div>
  );
}
