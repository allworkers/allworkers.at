import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/LanguageContext'
import { CONTACT } from '../i18n/translations'
import Logo from './Logo'
import { scrollToId } from './Nav'

const SECTIONS = ['services', 'work', 'sectors', 'about', 'contact']

export default function Footer() {
  const { t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const year = new Date().getFullYear()

  const go = (id) => {
    if (location.pathname === '/') scrollToId(id)
    else navigate('/', { state: { scrollTo: id } })
  }

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      {/* hazard divider */}
      <div className="hazard h-1.5 w-full opacity-80" />

      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel-400">{t('footer.blurb')}</p>
          <p className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-amber-400">{t('footer.tagline')}</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel-400">{t('footer.nav')}</h4>
          <ul className="space-y-2.5">
            {SECTIONS.map((s) => (
              <li key={s}>
                <button onClick={() => go(s)} className="text-sm text-steel-300 transition hover:text-amber-400">
                  {t(`nav.${s}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel-400">{t('footer.legalCol')}</h4>
          <ul className="space-y-2.5">
            <li><Link to="/impressum" className="text-sm text-steel-300 transition hover:text-amber-400">{t('footer.impressum')}</Link></li>
            <li><Link to="/datenschutz" className="text-sm text-steel-300 transition hover:text-amber-400">{t('footer.datenschutz')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-steel-400">{t('footer.contactCol')}</h4>
          <ul className="space-y-2.5 text-sm text-steel-300">
            <li><a href={CONTACT.phoneHref} className="transition hover:text-amber-400">{CONTACT.phone}</a></li>
            <li><a href={CONTACT.emailHref} className="transition hover:text-amber-400">{CONTACT.email}</a></li>
            <li className="pt-1 leading-relaxed text-steel-400">{CONTACT.addressLines.join(', ')}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-steel-400">© {year} All Workers GmbH · {t('footer.rights')}</p>
          <p className="text-xs text-steel-500">{t('footer.member')} · FN 630040 f · UID ATU80827937</p>
        </div>
      </div>
    </footer>
  )
}
