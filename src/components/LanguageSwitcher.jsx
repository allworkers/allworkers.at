import { useEffect, useRef, useState } from 'react'
import { useI18n } from '../i18n/LanguageContext'

export default function LanguageSwitcher({ compact = false }) {
  const { lang, setLang, langs } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = langs.find((l) => l.code === lang)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-md border border-ink-700 bg-ink-850/70 px-2.5 py-2 text-xs font-semibold text-steel-200 transition hover:border-amber-400 hover:text-white"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-amber-400" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span>{current?.short}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" className={`transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul
          className="absolute end-0 z-50 mt-2 min-w-[160px] overflow-hidden rounded-lg border border-ink-700 bg-ink-850 shadow-2xl shadow-black/60"
          role="listbox"
        >
          {langs.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code)
                  setOpen(false)
                }}
                className={`flex w-full items-center justify-between gap-3 px-3.5 py-2.5 text-sm transition ${
                  l.code === lang ? 'bg-amber-500/10 text-amber-400' : 'text-steel-200 hover:bg-ink-800 hover:text-white'
                }`}
                dir={l.dir}
                role="option"
                aria-selected={l.code === lang}
              >
                <span className={l.code === 'ar' ? 'font-ar' : ''}>{l.label}</span>
                <span className="text-[10px] font-semibold tracking-wider text-steel-400">{l.short}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
