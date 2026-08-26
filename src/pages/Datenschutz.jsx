import { useI18n } from '../i18n/LanguageContext'
import LegalLayout from './LegalLayout'

function H({ children }) {
  return <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">{children}</h2>
}

export default function Datenschutz() {
  const { t } = useI18n()
  return (
    <LegalLayout title={t('legal.datenschutzTitle')}>
      <p className="leading-relaxed">
        Wir freuen uns über Ihren Besuch auf unserer Website und Ihr Interesse an unserem Unternehmen. Der Schutz Ihrer
        personenbezogenen Daten ist uns ein wichtiges Anliegen.
      </p>

      <div>
        <H>Erhebung und Verarbeitung personenbezogener Daten</H>
        <p className="mt-3 leading-relaxed">Wenn Sie unser Kontaktformular nutzen, erfassen wir folgende Daten:</p>
        <ul className="mt-2 list-disc space-y-1 ps-6">
          <li>Ihren Namen bzw. Ihr Unternehmen</li>
          <li>Ihre E-Mail-Adresse</li>
          <li>Den Betreff Ihrer Nachricht</li>
          <li>Den Nachrichtentext</li>
        </ul>
        <p className="mt-3 leading-relaxed">
          Diese Daten werden <strong className="text-white">nicht</strong> auf unseren Servern gespeichert. Stattdessen
          werden sie über den externen Dienstleister{' '}
          <a href="https://formsubmit.co" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">formsubmit.co</a>{' '}
          an unsere E-Mail-Adresse übermittelt. Wir haben keinen direkten Zugriff auf die dort gespeicherten Daten.
          Informationen dazu:{' '}
          <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">formsubmit.co/privacy.pdf</a>.
        </p>
      </div>

      <div>
        <H>Cookies und Tracking</H>
        <p className="mt-3 leading-relaxed">
          Unsere Website verwendet <strong className="text-white">keine Cookies</strong> und es findet{' '}
          <strong className="text-white">kein Tracking</strong> oder keine Analysedaten-Erhebung statt.
        </p>
      </div>

      <div>
        <H>Lokale Speicherung im Browser</H>
        <p className="mt-3 leading-relaxed">
          Zur Verbesserung der Nutzererfahrung speichern wir Ihre Sprachauswahl lokal in Ihrem Browser (Local Storage).
          Diese Information ist technisch notwendig und enthält <strong className="text-white">keine personenbezogenen
          Daten</strong>.
        </p>
      </div>

      <div>
        <H>Ihre Rechte</H>
        <p className="mt-3 leading-relaxed">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie Widerspruch
          gemäß Art. 15–21 DSGVO. Bitte wenden Sie sich hierfür an die unten angegebenen Kontaktdaten. Bei Daten, die
          über formsubmit.co verarbeitet werden, unterstützen wir Sie bei der Weiterleitung Ihres Anliegens.
        </p>
      </div>

      <div>
        <H>Kontakt</H>
        <p className="mt-3 leading-relaxed">
          All Workers GmbH<br />
          Meidlinger Hauptstraße 47/1, 1120 Wien<br />
          E-Mail: <a href="mailto:office@allworkers.at" className="text-amber-400 hover:underline">office@allworkers.at</a>
        </p>
      </div>

      <p className="text-sm text-steel-500">Stand: Juli 2025</p>
    </LegalLayout>
  )
}
