import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import { SERVICE_KEYS, SERVICE_IMAGES } from '../i18n/translations'
import { media } from '../data/media'
import { scrollToId } from './Nav'
import Reveal from './Reveal'

function ServiceCard({ k, index, onOpen }) {
  const { t } = useI18n()
  return (
    <Reveal delay={(index % 4) * 0.06}>
      <button
        onClick={() => onOpen(k)}
        className="card group h-full w-full text-start transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={media(SERVICE_IMAGES[k])}
            alt={t(`services.items.${k}.name`)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/30 to-transparent" />
          <span className="absolute start-3 top-3 rounded-md border border-white/10 bg-ink-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400 backdrop-blur">
            {t(`services.items.${k}.tag`)}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">{t(`services.items.${k}.name`)}</h3>
          <p className="mt-2 text-sm leading-relaxed text-steel-400">{t(`services.items.${k}.short`)}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400">
            {t('services.more')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </button>
    </Reveal>
  )
}

function ServiceModal({ k, onClose }) {
  const { t } = useI18n()
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 260 }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-t-2xl border border-ink-700 bg-ink-900 shadow-2xl sm:rounded-2xl"
      >
        <div className="relative h-52">
          <img src={media(SERVICE_IMAGES[k])} alt={t(`services.items.${k}.name`)} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink-950/70 text-white backdrop-blur transition hover:bg-ink-800"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <span className="absolute start-4 bottom-4 rounded-md border border-white/10 bg-ink-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400 backdrop-blur">
            {t(`services.items.${k}.tag`)}
          </span>
        </div>
        <div className="p-6">
          <h3 className="heading text-2xl">{t(`services.items.${k}.name`)}</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel-300">{t(`services.items.${k}.long`)}</p>
          <button
            onClick={() => {
              onClose()
              setTimeout(() => scrollToId('contact'), 60)
            }}
            className="btn-primary mt-6 w-full"
          >
            {t('services.modalCta')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const { t } = useI18n()
  const [active, setActive] = useState(null)

  return (
    <section id="services" className="relative border-t border-ink-800 bg-ink-900 py-20 sm:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-amber-400" />
            {t('services.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('services.title')}</h2>
          <p className="mt-4 text-steel-300">{t('services.lead')}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_KEYS.map((k, i) => (
            <ServiceCard key={k} k={k} index={i} onOpen={setActive} />
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <button onClick={() => scrollToId('contact')} className="btn-ghost group">
            {t('services.cta')}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1 rtl:rotate-180" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Reveal>
      </div>

      <AnimatePresence>{active && <ServiceModal k={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}
