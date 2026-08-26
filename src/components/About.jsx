import { useI18n } from '../i18n/LanguageContext'
import { media } from '../data/media'
import Reveal from './Reveal'

export default function About() {
  const { t } = useI18n()
  return (
    <section id="about" className="relative border-t border-ink-800 bg-ink-950 py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-ink-700">
            <img src={media('team_field.jpg')} alt={t('about.imgCaption')} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2 text-xs font-medium text-steel-200">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              {t('about.imgCaption')}
            </div>
          </div>
          {/* motto badge */}
          <div className="absolute -bottom-5 end-6 hidden rotate-[-3deg] rounded-xl border border-amber-400/40 bg-ink-900 px-5 py-3 shadow-xl sm:block">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-amber-400">{t('about.motto')}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <span className="eyebrow">
            <span className="h-px w-6 bg-amber-400" />
            {t('about.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('about.title')}</h2>
          <p className="mt-6 leading-relaxed text-steel-300">{t('about.p1')}</p>
          <p className="mt-4 leading-relaxed text-steel-300">{t('about.p2')}</p>
          <p className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-white sm:hidden">{t('about.motto')}</p>
        </Reveal>
      </div>
    </section>
  )
}
