import { motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import { media } from '../data/media'
import { scrollToId } from './Nav'

function Stat({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col"
    >
      <span className="font-display text-2xl font-bold text-amber-400 sm:text-3xl">{value}</span>
      <span className="mt-0.5 text-xs font-medium uppercase tracking-wider text-steel-400">{label}</span>
    </motion.div>
  )
}

export default function Hero() {
  const { t } = useI18n()

  return (
    <section id="top" className="relative overflow-hidden bg-ink-950 pt-[68px]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 end-[-10%] h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 start-[-10%] h-[420px] w-[420px] rounded-full bg-ember/10 blur-[120px]" />

      <div className="container-x relative grid items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-20">
        {/* Left: copy */}
        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-850/60 px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-steel-300">{t('hero.badge')}</span>
          </motion.div>

          <h1 className="heading text-5xl sm:text-6xl lg:text-[4.6rem]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="block text-gradient"
            >
              {t('hero.titleTop')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block text-amber-400"
            >
              {t('hero.titleAccent')}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-steel-300"
          >
            {t('hero.lead')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button onClick={() => scrollToId('contact')} className="btn-primary">
              {t('hero.ctaPrimary')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="rtl:rotate-180" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => scrollToId('services')} className="btn-ghost">
              {t('hero.ctaSecondary')}
            </button>
          </motion.div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink-800 pt-7">
            <Stat value={t('stats.reactionV')} label={t('stats.reaction')} delay={0.5} />
            <Stat value={t('stats.sectorsV')} label={t('stats.sectors')} delay={0.58} />
            <Stat value={t('stats.basisV')} label={t('stats.basis')} delay={0.66} />
          </div>
        </div>

        {/* Right: real footage panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl shadow-black/60">
            <video
              className="h-full w-full object-cover"
              src={media('hero.mp4')}
              poster={media('hero.jpg')}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />

            {/* caption chip */}
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-xl border border-white/10 bg-ink-950/70 px-4 py-3 backdrop-blur">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor" />
                </svg>
              </span>
              <p className="text-xs font-medium leading-snug text-steel-200">{t('hero.videoCaption')}</p>
            </div>
          </div>

          {/* floating hazard tab */}
          <div className="absolute -start-3 top-8 hidden rotate-[-6deg] rounded-md sm:block">
            <div className="hazard h-3 w-24 rounded-sm opacity-90" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
