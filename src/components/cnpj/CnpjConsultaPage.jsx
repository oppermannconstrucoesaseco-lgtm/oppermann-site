import { useState, useEffect } from 'react';
import { CnpjSearchForm }     from './CnpjSearchForm.jsx';
import { CnpjSummaryCard }    from './CnpjSummaryCard.jsx';
import { DynamicJsonRenderer } from './DynamicJsonRenderer.jsx';
import { RawJsonViewer }       from './RawJsonViewer.jsx';
import { formatCnpj }          from '../../utils/formatters.js';
import '../../styles/cnpj.css';

const API_BASE = 'https://publica.cnpj.ws/cnpj';

/* ── icons ── */

function BuildingIcon() {
  return (
    <svg className="w-14 h-14 text-op-line mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="20" height="20" className="shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

/* ── error messages ── */

function errorFor(status) {
  if (status === 400) return 'CNPJ inválido. Verifique os 14 dígitos e tente novamente.';
  if (status === 404) return 'CNPJ não encontrado na base da Receita Federal.';
  if (status === 429) return 'Limite de consultas atingido. Aguarde alguns segundos e tente novamente.';
  if (status === 503) return 'Serviço temporariamente indisponível. Tente novamente em instantes.';
  return `Erro na consulta (HTTP ${status}). Tente novamente.`;
}

/* ── page ── */

export function CnpjConsultaPage() {
  const [phase, setPhase]     = useState('idle');   // idle | loading | error | done
  const [data, setData]       = useState(null);
  const [errorMsg, setError]  = useState('');
  const [queriedCnpj, setQueried] = useState('');

  useEffect(() => {
    document.title = 'Consulta CNPJ | OPPERMANN';
  }, []);

  async function handleSearch(cnpj) {
    setPhase('loading');
    setQueried(cnpj);
    setData(null);
    setError('');

    try {
      const res = await fetch(`${API_BASE}/${cnpj}`, {
        headers: { Accept: 'application/json' },
      });

      if (!res.ok) {
        setError(errorFor(res.status));
        setPhase('error');
        return;
      }

      const json = await res.json();

      if (!json || typeof json !== 'object') {
        setError('A API retornou uma resposta inesperada.');
        setPhase('error');
        return;
      }

      setData(json);
      setPhase('done');
    } catch {
      setError('Falha de conexão com a API. Verifique sua internet e tente novamente.');
      setPhase('error');
    }
  }

  return (
    /* Tailwind page wrapper — top padding accounts for the fixed 92px site header */
    <div className="min-h-screen bg-op-bg pt-[116px] pb-16 px-4">
      <div className="max-w-3xl mx-auto space-y-7">

        {/* Breadcrumb */}
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-op-muted hover:text-gold transition-colors"
        >
          <ArrowLeftIcon />
          Voltar ao início
        </a>

        {/* Page title */}
        <div>
          <h1 className="text-3xl font-bold text-gold tracking-tight">Consulta CNPJ</h1>
          <p className="text-op-muted text-sm mt-1.5 leading-relaxed">
            Consulte dados públicos de qualquer empresa cadastrada na Receita Federal.
            As informações são obtidas em tempo real via API pública.
          </p>
        </div>

        {/* Search form — always visible */}
        <CnpjSearchForm onSearch={handleSearch} loading={phase === 'loading'} />

        {/* ── idle ── */}
        {phase === 'idle' && (
          <div className="text-center py-14 px-6 border border-op-line rounded-2xl bg-op-panel/40">
            <BuildingIcon />
            <p className="text-op-muted text-sm max-w-xs mx-auto leading-relaxed">
              Informe um CNPJ no campo acima para visualizar os dados cadastrais da empresa.
            </p>
            <ul className="mt-5 text-xs text-op-muted space-y-1 text-left max-w-xs mx-auto">
              <li className="flex items-center gap-2"><span className="text-gold">·</span> Situação cadastral e data de abertura</li>
              <li className="flex items-center gap-2"><span className="text-gold">·</span> Endereço, telefone e e-mail</li>
              <li className="flex items-center gap-2"><span className="text-gold">·</span> CNAE, capital social e sócios</li>
              <li className="flex items-center gap-2"><span className="text-gold">·</span> Todos os dados disponíveis na Receita Federal</li>
            </ul>
          </div>
        )}

        {/* ── loading ── */}
        {phase === 'loading' && (
          <div className="flex items-center justify-center gap-3 py-14 text-op-muted border border-op-line rounded-2xl bg-op-panel/40">
            <svg className="animate-spin h-6 w-6 text-gold shrink-0" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span className="text-sm">
              Consultando <span className="font-mono text-op-text">{formatCnpj(queriedCnpj)}</span>…
            </span>
          </div>
        )}

        {/* ── error ── */}
        {phase === 'error' && (
          <div className="flex items-start gap-3 p-5 rounded-2xl border border-red-500/30 bg-red-900/10 text-red-400">
            <AlertIcon />
            <div>
              <p className="font-semibold text-sm">Erro na consulta</p>
              <p className="text-xs mt-1 leading-relaxed text-red-300/80">{errorMsg}</p>
            </div>
          </div>
        )}

        {/* ── results ── */}
        {phase === 'done' && data && (
          <div className="space-y-5">
            {/* Summary */}
            <CnpjSummaryCard data={data} />

            {/* Full data */}
            <div className="bg-op-panel border border-op-line rounded-2xl p-6">
              <h3 className="text-base font-bold text-gold mb-5 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                </svg>
                Dados Completos
              </h3>
              <DynamicJsonRenderer data={data} />
            </div>

            {/* Raw JSON */}
            <RawJsonViewer data={data} />
          </div>
        )}

      </div>
    </div>
  );
}
