import { useI18n } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const STEPS = ['s1', 's2', 's3', 's4']

export default function Process() {
  const { t } = useI18n()
  return (
    <section className="relative border-t border-ink-800 bg-ink-900 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">
            <span className="h-px w-6 bg-amber-400" />
            {t('process.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('process.title')}</h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 md:grid-cols-4">
          {/* connecting line */}
          <div className="pointer-events-none absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-ink-700 to-transparent md:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s} delay={i * 0.1} className="relative">
              <div className="flex flex-col items-center text-center md:items-start md:text-start">
                <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-ink-700 bg-ink-950 font-display text-2xl font-bold text-amber-400">
                  {String(i + 1).padStart(2, '0')}
                  <span className="absolute -end-1 -top-1 h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(255,152,0,0.8)]" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">{t(`process.steps.${s}.t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{t(`process.steps.${s}.d`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
