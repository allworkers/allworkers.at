import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'

const SECTIONS = ['services', 'work', 'sectors', 'about', 'contact']

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const go = (id) => {
    setMobileOpen(false)
    if (isHome) {
      scrollToId(id)
    } else {
      navigate('/', { state: { scrollTo: id } })
    }
  }

  const goCta = () => go('contact')

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || !isHome
          ? 'border-b border-ink-800 bg-ink-950/85 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-ink-950/70 to-transparent'
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between gap-4">
        <button onClick={() => go('top')} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md" aria-label="All Workers — Home">
          <Logo />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              className="rounded-md px-3.5 py-2 text-sm font-medium text-steel-300 transition hover:bg-ink-800/70 hover:text-white"
            >
              {t(`nav.${s}`)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <button onClick={goCta} className="btn-primary hidden !px-4 !py-2.5 text-sm sm:inline-flex">
            {t('nav.cta')}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-700 text-white lg:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative h-4 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${mobileOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${mobileOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-ink-800 bg-ink-950/95 backdrop-blur-md lg:hidden transition-[max-height,opacity] duration-300 ${
          mobileOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => go(s)}
              className="rounded-lg px-4 py-3 text-start text-base font-medium text-steel-200 transition hover:bg-ink-800 hover:text-white"
            >
              {t(`nav.${s}`)}
            </button>
          ))}
          <button onClick={goCta} className="btn-primary mt-2 w-full">
            {t('nav.cta')}
          </button>
        </nav>
      </div>
    </header>
  )
}
