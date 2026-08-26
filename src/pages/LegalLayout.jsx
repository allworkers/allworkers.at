import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'

export default function LegalLayout({ title, children }) {
  const { t } = useI18n()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <main className="min-h-screen bg-ink-950 pt-[68px]">
      <div className="hazard h-1 w-full opacity-70" />
      <div className="container-x max-w-3xl py-16">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-steel-300 transition hover:text-amber-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="rtl:rotate-180" aria-hidden="true">
            <path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('footer.back')}
        </Link>
        <h1 className="heading text-4xl sm:text-5xl">{title}</h1>
        <div className="legal-body mt-10 space-y-6 text-steel-300">{children}</div>
      </div>
    </main>
  )
}
