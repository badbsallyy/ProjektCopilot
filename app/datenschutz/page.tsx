import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz - BaddestDeals",
  description: "Datenschutzerklärung von BaddestDeals",
};

export default function DatenschutzPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              2. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-lg font-medium mb-2">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h3>
            <p className="text-muted-foreground mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>

            <h3 className="text-lg font-medium mb-2">
              Wie erfassen wir Ihre Daten?
            </h3>
            <p className="text-muted-foreground">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben. Andere Daten werden automatisch oder
              nach Ihrer Einwilligung beim Besuch der Website durch unsere
              IT-Systeme erfasst. Das sind vor allem technische Daten (z.B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              3. Ihre Rechte
            </h2>
            <p className="text-muted-foreground">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              4. Hosting
            </h2>
            <p className="text-muted-foreground">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr
              Browser übermittelt: IP-Adresse, die Adresse der vorher besuchten
              Website (Referer Anfrage-Header), Datum und Uhrzeit der Anfrage,
              Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der
              Anforderung, HTTP-Statuscode, übertragene Datenmenge, Website, von
              der die Anforderung kommt und Informationen zu Browser und
              Betriebssystem.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              5. Cookies
            </h2>
            <p className="text-muted-foreground">
              Unsere Website verwendet Cookies. Das sind kleine Textdateien, die
              Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns
              dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer
              zu machen. Einige Cookies sind &quot;Session-Cookies.&quot;
              Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst
              gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              6. Kontakt
            </h2>
            <p className="text-muted-foreground">
              Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
              personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung
              oder Löschung von Daten wenden Sie sich bitte an die im Impressum
              angegebene Adresse.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
