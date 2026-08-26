import { useI18n } from '../i18n/LanguageContext'
import { CONTACT } from '../i18n/translations'
import Reveal from './Reveal'

function InfoRow({ icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div'
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={`flex items-start gap-4 rounded-lg border border-ink-700 bg-ink-850 px-4 py-3.5 transition ${
        href ? 'hover:border-amber-400/50 hover:bg-ink-800' : ''
      }`}
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">{icon}</span>
      <span className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-steel-400">{label}</span>
        <span className="text-sm font-medium text-white">{value}</span>
      </span>
    </Wrapper>
  )
}

export default function CTA() {
  const { t } = useI18n()
  return (
    <section id="contact" className="relative overflow-hidden border-t border-ink-800 bg-ink-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute start-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-amber-500/5 blur-[120px]" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-amber-400" />
            {t('cta.eyebrow')}
          </span>
          <h2 className="heading mt-4 text-4xl sm:text-5xl">{t('cta.title')}</h2>
          <p className="mt-4 max-w-md text-steel-300">{t('cta.lead')}</p>

          <div className="mt-8 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-steel-400">{t('cta.infoTitle')}</h3>
            <InfoRow
              label={t('cta.labels.phone')}
              value={CONTACT.phone}
              href={CONTACT.phoneHref}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .7-.2 1l-2.2 2.2Z" fill="currentColor" /></svg>}
            />
            <InfoRow
              label={t('cta.labels.email')}
              value={CONTACT.email}
              href={CONTACT.emailHref}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h18v12H3V6Zm0 1 9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="none" /></svg>}
            />
            <InfoRow
              label={t('cta.labels.address')}
              value={CONTACT.addressLines.join(', ')}
              href={CONTACT.mapsHref}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" fill="none" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" fill="none" /></svg>}
            />
            <InfoRow
              label={t('cta.labels.hours')}
              value={t('cta.hours')}
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            action={CONTACT.formAction}
            method="POST"
            className="rounded-2xl border border-ink-700 bg-ink-850 p-6 sm:p-8"
          >
            <input type="hidden" name="_subject" value="Neue Anfrage über allworkers.at" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-steel-200">{t('cta.form.name')}</label>
                <input id="name" name="name" type="text" required placeholder={t('cta.form.namePh')} className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white placeholder-steel-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-steel-200">{t('cta.form.email')}</label>
                <input id="email" name="email" type="email" required placeholder={t('cta.form.emailPh')} className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white placeholder-steel-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-steel-200">{t('cta.form.subject')}</label>
                <input id="subject" name="subject" type="text" required placeholder={t('cta.form.subjectPh')} className="w-full rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white placeholder-steel-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-steel-200">{t('cta.form.message')}</label>
                <textarea id="message" name="message" rows={5} placeholder={t('cta.form.messagePh')} className="w-full resize-none rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white placeholder-steel-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
              </div>
              <button type="submit" className="btn-primary w-full">
                {t('cta.form.send')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="rtl:rotate-180" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <p className="text-center text-xs text-steel-400">
                {t('cta.form.or')}{' '}
                <a href={CONTACT.phoneHref} className="font-semibold text-amber-400 hover:underline">{CONTACT.phone}</a>
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
