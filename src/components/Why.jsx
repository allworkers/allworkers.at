import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const ICONS = {
  flex: (
    <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  ),
  speed: <path d="M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  breadth: <path d="M4 10 12 4l8 6M6 10v9h12v-9M10 19v-5h4v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  reliable: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Zm-1.5 10.5L8 11l1.4-1.4 1.1 1.1 3-3L15 9l-4.5 4.5Z" fill="currentColor" />,
  people: <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7 0a3 3 0 1 0 0-6M3 20c0-3 2.7-5 6-5s6 2 6 5m1-5c2.5.4 4 2.3 4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  fair: <path d="M12 3v18M5 7l-2 6a3 3 0 0 0 6 0L7 7H5Zm14 0-2 6a3 3 0 0 0 6 0l-2-6h-2ZM4 7h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
}

const KEYS = ['flex', 'speed', 'breadth', 'reliable', 'people', 'fair']

export default function Why() {
  const { t } = useI18n()
  return (
    <section className="relative border-t border-ink-800 bg-ink-950 py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-24 lg:self-start">
          <span className="eyebrow">
            <span className="h-px w-6 bg-amber-400" />
            {t('why.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('why.title')}</h2>
          <p className="mt-5 max-w-md text-steel-300">{t('why.lead')}</p>
          <div className="mt-8 hidden items-center gap-4 lg:flex">
            <div className="hazard h-2.5 w-40 rounded-sm" />
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {KEYS.map((k, i) => (
            <Reveal key={k} delay={(i % 2) * 0.06} className="h-full">
              <div className="card group h-full p-6 transition-colors duration-300 hover:border-amber-400/50">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 transition group-hover:bg-amber-500/20">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {ICONS[k]}
                  </svg>
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">{t(`why.points.${k}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{t(`why.points.${k}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
