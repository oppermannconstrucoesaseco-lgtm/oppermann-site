/** Apply progressive CNPJ mask as the user types. */
export function applyMaskCnpj(raw) {
  const n = raw.replace(/\D/g, '').slice(0, 14);
  if (n.length <= 2) return n;
  if (n.length <= 5) return `${n.slice(0, 2)}.${n.slice(2)}`;
  if (n.length <= 8) return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5)}`;
  if (n.length <= 12) return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5, 8)}/${n.slice(8)}`;
  return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5, 8)}/${n.slice(8, 12)}-${n.slice(12, 14)}`;
}

export function formatCnpj(v) {
  const n = String(v ?? '').replace(/\D/g, '');
  if (n.length !== 14) return v;
  return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5, 8)}/${n.slice(8, 12)}-${n.slice(12, 14)}`;
}

export function formatCpf(v) {
  const n = String(v ?? '').replace(/\D/g, '');
  if (n.length !== 11) return v;
  return `${n.slice(0, 3)}.${n.slice(3, 6)}.${n.slice(6, 9)}-${n.slice(9, 11)}`;
}

export function formatCep(v) {
  const n = String(v ?? '').replace(/\D/g, '');
  if (n.length !== 8) return v;
  return `${n.slice(0, 5)}-${n.slice(5, 8)}`;
}

export function formatPhone(ddd, number) {
  if (!ddd || !number) return null;
  const n = String(number).replace(/\D/g, '');
  if (n.length === 9) return `(${ddd}) ${n.slice(0, 5)}-${n.slice(5)}`;
  if (n.length === 8) return `(${ddd}) ${n.slice(0, 4)}-${n.slice(4)}`;
  return `(${ddd}) ${number}`;
}

export function formatDate(v) {
  if (!v) return null;
  const m = String(v).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[3]}/${m[2]}/${m[1]}`;
  return v;
}

export function formatCurrency(v) {
  if (v === null || v === undefined || v === '') return null;
  const n = Number(v);
  if (isNaN(n)) return v;
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(n);
}

export function formatBoolean(v) {
  if (v === true  || v === 'S' || v === 's') return 'Sim';
  if (v === false || v === 'N' || v === 'n') return 'Não';
  return v;
}

/** Smart formatter: picks the right format based on the field key name. */
export function autoFormat(key, value) {
  if (value === null || value === undefined) return '—';
  const k = String(key).toLowerCase();

  if (typeof value === 'boolean') return formatBoolean(value);

  const s = String(value);

  if (k.includes('cnpj')) {
    const fmt = formatCnpj(s);
    return fmt !== value ? fmt : s;
  }
  if (k.includes('cpf')) {
    const fmt = formatCpf(s);
    return fmt !== value ? fmt : s;
  }
  if (k.includes('cep')) return formatCep(s);
  if (k === 'simples' || k === 'mei' || k.startsWith('optante')) return formatBoolean(s);
  if (
    k.includes('data') ||
    k === 'atualizado_em' ||
    /^\d{4}-\d{2}-\d{2}/.test(s)
  ) {
    const fmt = formatDate(s);
    return fmt || s;
  }
  if (k.includes('capital') || k.includes('valor')) {
    const fmt = formatCurrency(value);
    return fmt || s;
  }

  return s;
}

/** Convert snake_case / camelCase key to a readable label. */
export function formatLabel(key) {
  return String(key)
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Count filled and empty leaf values in a JSON tree. */
export function countFields(obj) {
  let filled = 0;
  let empty = 0;

  function walk(val) {
    if (val === null || val === undefined) {
      empty++;
    } else if (typeof val === 'boolean' || typeof val === 'number') {
      filled++;
    } else if (typeof val === 'string') {
      val.trim() === '' ? empty++ : filled++;
    } else if (Array.isArray(val)) {
      if (val.length === 0) empty++;
      else val.forEach(walk);
    } else if (typeof val === 'object') {
      Object.values(val).forEach(walk);
    }
  }

  if (obj && typeof obj === 'object') {
    Object.values(obj).forEach(walk);
  }

  return { filled, empty };
}
