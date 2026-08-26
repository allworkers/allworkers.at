import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useI18n } from '../i18n/LanguageContext'
import { WORK_ITEMS } from '../i18n/translations'
import { media } from '../data/media'
import Reveal from './Reveal'

function Lightbox({ item, onClose }) {
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
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-ink-950/90 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
        className="relative z-10 w-full max-w-3xl"
      >
        <button
          onClick={onClose}
          className="absolute -top-11 end-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-ink-900 text-white transition hover:bg-ink-800"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <div className="overflow-hidden rounded-xl border border-ink-700 bg-black shadow-2xl">
          <video
            className="max-h-[76vh] w-full bg-black object-contain"
            src={media(item.video)}
            poster={media(item.poster)}
            controls
            autoPlay
            loop
            playsInline
          />
        </div>
        <p className="mt-3 text-center text-sm text-steel-300">{t(`work.captions.${item.key}`)}</p>
      </motion.div>
    </motion.div>
  )
}

function Tile({ item, onOpen }) {
  const { t } = useI18n()
  return (
    <button
      onClick={() => onOpen(item)}
      className={`group relative overflow-hidden rounded-xl border border-ink-700 bg-ink-900 text-start ${
        item.tall ? 'row-span-2' : ''
      }`}
    >
      <img
        src={media(item.poster)}
        alt={t(`work.captions.${item.key}`)}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${item.tall ? 'h-full min-h-[300px]' : 'h-full min-h-[190px]'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
      {/* play button */}
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-ink-950/50 text-white backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400 group-hover:bg-amber-500 group-hover:text-ink-950">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-medium leading-snug text-white drop-shadow">{t(`work.captions.${item.key}`)}</p>
      </div>
      <span className="absolute end-3 top-3 rounded border border-white/10 bg-ink-950/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-steel-200 backdrop-blur">
        {t('work.tapToPlay')}
      </span>
    </button>
  )
}

export default function Work() {
  const { t } = useI18n()
  const [active, setActive] = useState(null)

  return (
    <section id="work" className="relative overflow-hidden border-t border-ink-800 bg-ink-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute end-[-8%] top-1/3 h-96 w-96 rounded-full bg-ember/10 blur-[130px]" />
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-amber-400" />
            {t('work.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('work.title')}</h2>
          <p className="mt-4 text-steel-300">{t('work.lead')}</p>
        </Reveal>

        <div className="mt-12 grid auto-rows-[190px] grid-cols-2 gap-4 lg:grid-cols-4">
          {WORK_ITEMS.map((item) => (
            <Tile key={item.key} item={item} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>{active && <Lightbox item={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}
