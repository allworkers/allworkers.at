import { useI18n } from '../i18n/LanguageContext'
import LegalLayout from './LegalLayout'

function H({ children }) {
  return <h2 className="font-display text-xl font-bold uppercase tracking-wide text-white">{children}</h2>
}

export default function Impressum() {
  const { t } = useI18n()
  return (
    <LegalLayout title={t('legal.impressumTitle')}>
      <p className="rounded-lg border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-steel-400">
        Angaben gemäß § 5 ECG und § 14 UGB. / Legal information under Austrian law (in German).
      </p>

      <div>
        <H>All Workers GmbH</H>
        <p className="mt-3 leading-relaxed">
          Meidlinger Hauptstraße 47/1<br />
          1120 Wien, Österreich
        </p>
        <p className="mt-3 leading-relaxed">
          Telefon: <a href="tel:+436603213420" className="text-amber-400 hover:underline">+43 660 3213420</a><br />
          E-Mail: <a href="mailto:office@allworkers.at" className="text-amber-400 hover:underline">office@allworkers.at</a>
        </p>
      </div>

      <div>
        <H>Unternehmensdaten</H>
        <ul className="mt-3 space-y-1.5 leading-relaxed">
          <li><span className="text-steel-400">UID-Nr.:</span> ATU80827937</li>
          <li><span className="text-steel-400">Firmenbuchnummer (FN):</span> 630040 f</li>
          <li><span className="text-steel-400">Firmenbuchgericht:</span> Handelsgericht Wien</li>
          <li><span className="text-steel-400">Sitz:</span> 1120 Wien</li>
          <li><span className="text-steel-400">Mitglied:</span> Wirtschaftskammer Wien (WKW)</li>
        </ul>
      </div>

      <div>
        <H>Gewerbe</H>
        <ul className="mt-3 space-y-1.5 leading-relaxed">
          <li>FG Gewerbliche Dienstleister <span className="text-steel-400">(Hauptgewerbe)</span></li>
          <li>LI Denkmal-, Fassaden- und Gebäudereiniger <span className="text-steel-400">(Nebengewerbe)</span></li>
          <li>FG Entsorgungs- und Ressourcenmanagement <span className="text-steel-400">(Nebengewerbe)</span></li>
        </ul>
      </div>

      <div>
        <H>Berufsbezeichnungen</H>
        <ul className="mt-3 space-y-1.5 leading-relaxed">
          <li>Personalvermittler <span className="text-steel-400">(Hauptgewerbe)</span></li>
          <li>Denkmal-, Fassaden- und Gebäudereiniger <span className="text-steel-400">(Nebengewerbe)</span></li>
          <li>Entsorgungs- und Ressourcenmanagement <span className="text-steel-400">(Nebengewerbe)</span></li>
        </ul>
      </div>

      <div>
        <H>Anwendbare Rechtsvorschriften</H>
        <p className="mt-3 leading-relaxed">
          Gewerbeordnung (GewO), Unternehmensgesetzbuch (UGB), GmbH-Gesetz (GmbHG), E-Commerce-Gesetz (ECG),
          Abfallwirtschaftsgesetz (AWG). Abrufbar über das Rechtsinformationssystem des Bundes:{' '}
          <a href="https://www.ris.bka.gv.at" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline">ris.bka.gv.at</a>.
        </p>
      </div>

      <div>
        <H>Aufsichtsbehörde</H>
        <p className="mt-3 leading-relaxed">Magistratsabteilung 63 – Gewerberecht, Wien</p>
      </div>
    </LegalLayout>
  )
}
