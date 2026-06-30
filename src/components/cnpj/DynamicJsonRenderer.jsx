import { useState } from 'react';
import { autoFormat, formatLabel, formatPhone } from '../../utils/formatters.js';

/* ── helpers ── */

function isDescriptorObject(val) {
  if (!val || typeof val !== 'object' || Array.isArray(val)) return false;
  const keys = Object.keys(val).filter((k) => val[k] !== null && val[k] !== undefined);
  return (
    keys.length <= 3 &&
    keys.includes('descricao') &&
    keys.every((k) => ['id', 'descricao', 'iso2', 'iso3', 'nome'].includes(k))
  );
}

function isPhoneObject(val) {
  return val && typeof val === 'object' && 'ddd' in val && 'numero' in val;
}

function isEmailObject(val) {
  return val && typeof val === 'object' && 'email' in val && Object.keys(val).length === 1;
}

function isPrimitive(val) {
  return (
    val === null ||
    val === undefined ||
    typeof val === 'boolean' ||
    typeof val === 'number' ||
    typeof val === 'string'
  );
}

function isSimpleValue(val) {
  return isPrimitive(val) || isDescriptorObject(val);
}

function renderSimple(key, val) {
  if (val === null || val === undefined) return '—';
  if (isDescriptorObject(val)) return val.descricao || val.nome || '—';
  return autoFormat(key, val);
}

/* ── sub-components ── */

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CollapsibleSection({ title, badge, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-op-line rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left bg-op-panel hover:bg-op-deep transition-colors"
      >
        <span className="text-sm font-semibold text-gold">{title}</span>
        <span className="flex items-center gap-2 shrink-0">
          {badge !== undefined && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-op-deep text-op-muted border border-op-line">
              {badge}
            </span>
          )}
          <span className="text-op-muted">
            <ChevronIcon open={open} />
          </span>
        </span>
      </button>
      {open && (
        <div className="px-4 py-4 border-t border-op-line bg-op-bg/40">
          {children}
        </div>
      )}
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full bg-op-deep border border-op-line text-op-text text-xs">
      {children}
    </span>
  );
}

function PrimitiveGrid({ entries, keyPrefix = '' }) {
  const valid = entries.filter(([, v]) => {
    if (v === null || v === undefined) return false;
    if (typeof v === 'string' && !v.trim()) return false;
    return true;
  });
  if (!valid.length) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
      {valid.map(([k, v]) => (
        <div key={`${keyPrefix}${k}`} className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-op-muted mb-1">
            {formatLabel(k)}
          </p>
          <p className="text-op-text text-sm break-words leading-relaxed">
            {renderSimple(k, v)}
          </p>
        </div>
      ))}
    </div>
  );
}

function ArraySection({ keyName, items }) {
  if (!items || items.length === 0) return null;

  /* All phone objects */
  if (items.every(isPhoneObject)) {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <Tag key={i}>{formatPhone(item.ddd, item.numero) || `(${item.ddd}) ${item.numero}`}</Tag>
        ))}
      </div>
    );
  }

  /* All email objects */
  if (items.every(isEmailObject)) {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <Tag key={i}>{item.email}</Tag>
        ))}
      </div>
    );
  }

  /* All simple descriptor objects */
  if (items.every(isDescriptorObject)) {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <Tag key={i}>
            {item.id !== undefined && item.id !== null && (
              <span className="text-op-muted mr-1.5">{item.id}</span>
            )}
            {item.descricao || item.nome || '—'}
          </Tag>
        ))}
      </div>
    );
  }

  /* All primitives */
  if (items.every(isPrimitive)) {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <Tag key={i}>{autoFormat(keyName, item)}</Tag>
        ))}
      </div>
    );
  }

  /* Complex objects → cards */
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="p-4 rounded-xl bg-op-panel border border-op-line">
          {typeof item === 'object' && item !== null ? (
            <DynamicJsonRenderer data={item} />
          ) : (
            <span className="text-op-text text-sm">{autoFormat(keyName, item)}</span>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── main recursive component ── */

export function DynamicJsonRenderer({ data }) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return null;

  const entries = Object.entries(data).filter(([, v]) => {
    if (v === null || v === undefined) return false;
    if (typeof v === 'string' && !v.trim()) return false;
    if (Array.isArray(v) && v.length === 0) return false;
    return true;
  });

  if (entries.length === 0) {
    return <p className="text-op-muted text-sm">Nenhum dado disponível.</p>;
  }

  const simpleEntries = entries.filter(([, v]) => isSimpleValue(v));
  const complexEntries = entries.filter(([, v]) => !isSimpleValue(v));

  return (
    <div className="space-y-4">
      {simpleEntries.length > 0 && (
        <PrimitiveGrid entries={simpleEntries} />
      )}

      {complexEntries.map(([key, value]) => {
        if (Array.isArray(value)) {
          return (
            <CollapsibleSection
              key={key}
              title={formatLabel(key)}
              badge={`${value.length} ${value.length === 1 ? 'item' : 'itens'}`}
            >
              <ArraySection keyName={key} items={value} />
            </CollapsibleSection>
          );
        }

        /* Nested object */
        return (
          <CollapsibleSection key={key} title={formatLabel(key)}>
            <DynamicJsonRenderer data={value} />
          </CollapsibleSection>
        );
      })}
    </div>
  );
}
