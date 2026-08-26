// Inline wordmark — "ALL WORKERS" with an amber safety-mark monogram.
export default function Logo({ className = '', onDark = true }) {
  const text = onDark ? '#ffffff' : '#0e1013'
  const sub = onDark ? '#9aa6b2' : '#333b45'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="All Workers GmbH">
      <svg width="34" height="34" viewBox="0 0 64 64" className="shrink-0" role="img" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="#0e1013" />
        <rect x="2" y="2" width="60" height="60" rx="10" fill="none" stroke="#242a32" strokeWidth="1.5" />
        <path d="M12 46 L22 18 h6 l10 28 h-7 l-1.8-5.4 h-8.7 L18.9 46 Z M24.6 32.6 h5.2 L27.2 24 Z" fill="#ffb020" />
        <rect x="40" y="18" width="4.4" height="28" rx="1" fill="#ffb020" />
        <rect x="48" y="18" width="4.4" height="28" rx="1" fill="#f57c00" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold uppercase tracking-wide" style={{ color: text }}>
          All Workers
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: sub }}>
          Personalbereitstellung
        </span>
      </span>
    </span>
  )
}
