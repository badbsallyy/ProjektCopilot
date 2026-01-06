import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB - BaddestDeals",
  description: "Allgemeine Geschäftsbedingungen von BaddestDeals",
};

export default function AGBPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Geltungsbereich</h2>
            <p className="text-muted-foreground">
              Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung der
              Website BaddestDeals und aller damit verbundenen Dienste. Mit der
              Nutzung unserer Website erklären Sie sich mit diesen Bedingungen
              einverstanden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              2. Leistungsbeschreibung
            </h2>
            <p className="text-muted-foreground">
              BaddestDeals ist eine Informationsplattform, die Schnäppchen und
              Angebote aus verschiedenen Online-Shops präsentiert. Wir sind
              selbst kein Online-Shop und verkaufen keine Produkte direkt. Wir
              verlinken lediglich auf Angebote externer Händler.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              3. Haftungsausschluss
            </h2>
            <p className="text-muted-foreground mb-4">
              Wir bemühen uns, stets aktuelle und korrekte Informationen
              bereitzustellen. Dennoch können wir keine Gewähr für die
              Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
              Informationen übernehmen.
            </p>
            <p className="text-muted-foreground">
              Für Preise, Verfügbarkeit und Konditionen der auf externen
              Websites angebotenen Produkte und Dienstleistungen sind
              ausschließlich die jeweiligen Anbieter verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              4. Externe Links
            </h2>
            <p className="text-muted-foreground">
              Unsere Website enthält Links zu externen Websites Dritter. Für die
              Inhalte dieser verlinkten Seiten sind ausschließlich deren
              Betreiber verantwortlich. Wir haben keinen Einfluss auf deren
              Inhalte und übernehmen keine Haftung dafür.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Urheberrecht</h2>
            <p className="text-muted-foreground">
              Die auf dieser Website veröffentlichten Inhalte unterliegen dem
              deutschen Urheberrecht. Jede Verwertung, die nicht ausdrücklich
              vom Urheberrechtsgesetz zugelassen ist, bedarf der vorherigen
              schriftlichen Zustimmung des Anbieters.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              6. Änderung der AGB
            </h2>
            <p className="text-muted-foreground">
              Wir behalten uns vor, diese Allgemeinen Geschäftsbedingungen
              jederzeit zu ändern. Die jeweils aktuelle Version ist auf dieser
              Website einsehbar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">
              7. Schlussbestimmungen
            </h2>
            <p className="text-muted-foreground">
              Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
              Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die
              Wirksamkeit der übrigen Bestimmungen unberührt.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
