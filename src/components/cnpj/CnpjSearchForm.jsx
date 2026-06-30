import { useState } from 'react';
import { applyMaskCnpj } from '../../utils/formatters.js';

export function CnpjSearchForm({ onSearch, loading }) {
  const [value, setValue] = useState('');
  const [validationError, setValidationError] = useState('');

  function handleChange(e) {
    const masked = applyMaskCnpj(e.target.value);
    setValue(masked);
    if (validationError) setValidationError('');
  }

  function submit() {
    const digits = value.replace(/\D/g, '');
    if (digits.length !== 14) {
      setValidationError('Informe um CNPJ com 14 dígitos (somente números).');
      return;
    }
    onSearch(digits);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') submit();
  }

  return (
    <div className="bg-op-panel border border-op-line rounded-2xl p-6 shadow-lg">
      <label className="block text-xs font-semibold uppercase tracking-widest text-op-muted mb-3">
        CNPJ da Empresa
      </label>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          {/* search icon */}
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-op-muted pointer-events-none">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="00.000.000/0000-00"
            maxLength={18}
            autoComplete="off"
            className="w-full pl-11 pr-4 py-3.5 bg-op-bg border border-op-line rounded-xl text-op-text placeholder-op-muted font-mono text-base tracking-widest focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <button
          type="button"
          onClick={submit}
          disabled={loading}
          className="px-7 py-3.5 bg-gold hover:bg-gold-bright disabled:opacity-50 disabled:cursor-not-allowed text-op-bg font-semibold rounded-xl transition-colors text-sm tracking-wide whitespace-nowrap"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Consultando…
            </span>
          ) : 'Consultar'}
        </button>
      </div>

      {validationError && (
        <p className="mt-2 text-xs text-red-400 flex items-center gap-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {validationError}
        </p>
      )}

      <p className="mt-3 text-xs text-op-muted">
        Dados públicos via API da Receita Federal. Pressione <kbd className="px-1.5 py-0.5 rounded bg-op-deep text-op-muted border border-op-line font-mono text-xs">Enter</kbd> para consultar.
      </p>
    </div>
  );
}
