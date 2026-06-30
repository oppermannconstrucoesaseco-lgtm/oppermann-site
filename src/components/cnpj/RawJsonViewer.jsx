import { useState } from 'react';
import { countFields } from '../../utils/formatters.js';

function CopyIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

export function RawJsonViewer({ data }) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const json = JSON.stringify(data, null, 2);
  const { filled, empty } = countFields(data);

  function handleCopy() {
    navigator.clipboard.writeText(json).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="space-y-3">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-op-panel border border-op-line rounded-xl px-4 py-3">
        <div className="flex items-center gap-4 text-xs text-op-muted">
          <span>
            <span className="text-emerald-400 font-semibold">{filled}</span>{' '}
            campo{filled !== 1 ? 's' : ''} preenchido{filled !== 1 ? 's' : ''}
          </span>
          {empty > 0 && (
            <span>
              <span className="text-op-muted font-semibold">{empty}</span>{' '}
              vazio{empty !== 1 ? 's' : ''}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            title="Copiar JSON"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-op-line text-op-muted hover:text-op-text hover:border-gold transition-colors text-xs"
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? 'Copiado!' : 'Copiar JSON'}
          </button>

          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-op-line text-op-muted hover:text-op-text hover:border-gold transition-colors text-xs"
          >
            {visible ? <EyeOffIcon /> : <CodeIcon />}
            {visible ? 'Ocultar JSON' : 'Ver JSON bruto'}
          </button>
        </div>
      </div>

      {/* Raw JSON */}
      {visible && (
        <div className="relative bg-op-panel border border-op-line rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-op-line">
            <span className="text-xs text-op-muted font-mono">application/json</span>
            <span className="text-xs text-op-muted">{json.length.toLocaleString('pt-BR')} caracteres</span>
          </div>
          <pre className="overflow-x-auto p-4 text-xs font-mono text-op-text leading-relaxed max-h-[560px] overflow-y-auto">
            {json}
          </pre>
        </div>
      )}
    </div>
  );
}
