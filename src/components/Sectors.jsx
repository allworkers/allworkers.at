import { useI18n } from '../i18n/LanguageContext'
import { translations } from '../i18n/translations'
import Reveal from './Reveal'

export default function Sectors() {
  const { t, lang } = useI18n()
  const list = translations[lang]?.sectors?.list || translations.de.sectors.list

  return (
    <section id="sectors" className="relative border-t border-ink-800 bg-ink-900 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-amber-400" />
            {t('sectors.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('sectors.title')}</h2>
          <p className="mt-4 text-steel-300">{t('sectors.lead')}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => (
            <Reveal key={s} delay={(i % 4) * 0.05}>
              <div className="group flex items-center gap-3 rounded-lg border border-ink-700 bg-ink-850 px-4 py-4 transition-colors hover:border-amber-400/50">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-800 font-display text-sm font-bold text-amber-400 transition group-hover:bg-amber-500 group-hover:text-ink-950">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-semibold text-steel-200">{s}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
