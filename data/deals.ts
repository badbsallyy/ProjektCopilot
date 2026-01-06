export type Deal = {
  id: string
  title: string
  slug: string
  description: string
  price: number
  oldPrice: number
  category: "tech" | "haushalt" | "fashion" | "gaming"
  image: string
  createdAt: string
  affiliateUrl: string
}

export const deals: Deal[] = [
  {
    id: "1",
    title: "Apple AirPods Pro (2. Generation) mit MagSafe",
    slug: "apple-airpods-pro-2-generation",
    description: "Die Apple AirPods Pro der zweiten Generation bieten aktive Geräuschunterdrückung, adaptiven Transparenzmodus und personalisierten 3D-Audio mit dynamischem Head Tracking. Mit bis zu 6 Stunden Wiedergabe und einem MagSafe Ladecase, das bis zu 30 Stunden zusätzliche Akkulaufzeit bietet. Die neuen Touch-Bedienelemente am Stiel ermöglichen eine einfache Lautstärkeregelung. IPX4 wasserfest gegen Schweiß und Wasser. Perfekt für Musikliebhaber und alle, die unterwegs ungestört sein möchten.",
    price: 229,
    oldPrice: 299,
    category: "tech",
    image: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23374151'%3EAirPods Pro%3C/text%3E%3C/svg%3E",
    createdAt: "2026-01-06T15:00:00Z",
    affiliateUrl: "https://www.amazon.de/dp/B0CHWRXH8B"
  },
  {
    id: "2",
    title: "Dyson V15 Detect Absolute Staubsauger",
    slug: "dyson-v15-detect-absolute",
    description: "Der Dyson V15 Detect Absolute ist ein kabelloser Staubsauger mit Laser-Stauberkennung auf der Bodendüse, die selbst mikroskopisch kleine Staubpartikel sichtbar macht. Mit piezoelektrischem Sensor, der die Staubmenge in Echtzeit zählt und kategorisiert. Bis zu 60 Minuten Laufzeit im Eco-Modus. Drei Reinigungsmodi für verschiedene Aufgaben. HEPA-Filtersystem erfasst 99,99% der Partikel bis zu 0,3 Mikrometern. Perfekt für Allergiker und alle, die ein sauberes Zuhause schätzen.",
    price: 549,
    oldPrice: 749,
    category: "haushalt",
    image: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23dbeafe'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%231e40af'%3EDyson V15%3C/text%3E%3C/svg%3E",
    createdAt: "2026-01-06T14:30:00Z",
    affiliateUrl: "https://www.amazon.de/dp/B08XQWF6JV"
  },
  {
    id: "3",
    title: "Nike Air Max 270 Sneaker Herren",
    slug: "nike-air-max-270-herren",
    description: "Die Nike Air Max 270 bieten maximale Dämpfung durch die größte Air-Unit, die Nike je in einem Schuh verbaut hat. Das atmungsaktive Mesh-Obermaterial sorgt für optimale Belüftung, während die weiche Schaumstoff-Zwischensohle für zusätzlichen Komfort sorgt. Die Gummiaußensohle mit Waffelmuster bietet hervorragende Traktion. Perfekt für den Alltag, sportliche Aktivitäten oder als stylisches Statement-Piece.",
    price: 89.99,
    oldPrice: 150,
    category: "fashion",
    image: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23fce7f3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%239d174d'%3ENike Air Max%3C/text%3E%3C/svg%3E",
    createdAt: "2026-01-06T13:45:00Z",
    affiliateUrl: "https://www.nike.com/de/t/air-max-270"
  },
  {
    id: "4",
    title: "PlayStation 5 Slim Digital Edition",
    slug: "playstation-5-slim-digital",
    description: "Die neue PlayStation 5 Slim in der Digital Edition ist 30% kleiner und 24% leichter als das Original-Modell. Mit ultra-schneller SSD für blitzschnelle Ladezeiten, 4K-Gaming mit bis zu 120fps und 3D-Audio-Unterstützung. Ray-Tracing für ultra-realistische Grafik. Die Digital Edition kommt ohne Disc-Laufwerk und spart dadurch zusätzlich Platz. Mit 1TB Speicher für zahlreiche Spiele. Inklusive DualSense Wireless-Controller mit haptischem Feedback.",
    price: 399,
    oldPrice: 449,
    category: "gaming",
    image: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23e0e7ff'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%233730a3'%3EPlayStation 5%3C/text%3E%3C/svg%3E",
    createdAt: "2026-01-06T12:00:00Z",
    affiliateUrl: "https://www.playstation.com/de-de/ps5/"
  },
  {
    id: "5",
    title: "Samsung Galaxy Watch 6 Classic 43mm",
    slug: "samsung-galaxy-watch-6-classic",
    description: "Die Samsung Galaxy Watch 6 Classic kombiniert elegantes Design mit modernster Technologie. Das Super AMOLED Display ist auch bei Sonnenlicht perfekt ablesbar. Umfassendes Gesundheitstracking mit Herzfrequenzmessung, EKG, Blutdruckmessung und Schlafanalyse. Über 90 Trainingsmodi für alle Sportarten. Bis zu 40 Stunden Akkulaufzeit. Wasserdicht nach 5ATM. Kompatibel mit Android-Smartphones. Die drehbare Lünette ermöglicht intuitive Bedienung.",
    price: 319,
    oldPrice: 429,
    category: "tech",
    image: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23374151'%3EGalaxy Watch%3C/text%3E%3C/svg%3E",
    createdAt: "2026-01-06T11:15:00Z",
    affiliateUrl: "https://www.samsung.com/de/watches/galaxy-watch/"
  },
  {
    id: "6",
    title: "Philips Hue White & Color Ambiance Starter Set",
    slug: "philips-hue-starter-set",
    description: "Das Philips Hue White & Color Ambiance Starter Set verwandelt dein Zuhause in ein Smart Home. Enthält 3 E27 LED-Lampen und die Hue Bridge für die Steuerung. 16 Millionen Farben und verschiedene Weißtöne für jede Stimmung. Sprachsteuerung mit Alexa, Google Assistant oder Siri. Zeitgesteuerte Automation und Anwesenheitssimulation für mehr Sicherheit. Bis zu 25.000 Stunden Lebensdauer. Energieeffizienzklasse A.",
    price: 129.99,
    oldPrice: 199.99,
    category: "haushalt",
    image: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23dbeafe'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%231e40af'%3EPhilips Hue%3C/text%3E%3C/svg%3E",
    createdAt: "2026-01-06T10:30:00Z",
    affiliateUrl: "https://www.philips-hue.com/de-de"
  },
  {
    id: "7",
    title: "Levi's 501 Original Jeans Herren",
    slug: "levis-501-original-jeans",
    description: "Die legendäre Levi's 501 Original Jeans - ein zeitloser Klassiker seit 1873. Gefertigt aus 100% Baumwolle in Regular Fit mit geradem Bein. Die ikonische Button-Fly und die charakteristischen Nieten machen diese Jeans unverwechselbar. Stonewashed für einen authentischen Vintage-Look. In verschiedenen Waschungen erhältlich. Diese Jeans wird mit der Zeit immer besser und passt sich perfekt an deine Körperform an.",
    price: 69.99,
    oldPrice: 109.99,
    category: "fashion",
    image: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23fce7f3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%239d174d'%3ELevi's 501%3C/text%3E%3C/svg%3E",
    createdAt: "2026-01-06T09:00:00Z",
    affiliateUrl: "https://www.levi.com/DE/de_DE/"
  },
  {
    id: "8",
    title: "Razer BlackWidow V4 Pro Mechanische Gaming-Tastatur",
    slug: "razer-blackwidow-v4-pro",
    description: "Die Razer BlackWidow V4 Pro ist eine Premium-Gaming-Tastatur mit mechanischen Razer Green Switches für taktiles und hörbares Feedback. RGB-Beleuchtung mit Razer Chroma für 16,8 Millionen Farben. Programmierbares Drehrad und zusätzliche Makro-Tasten. Magnetische Handballenauflage für maximalen Komfort. Onboard-Speicher für Profile. USB-Passthrough-Port. Vollständig programmierbar mit Razer Synapse 3. N-Key-Rollover für präzise Eingaben.",
    price: 159.99,
    oldPrice: 229.99,
    category: "gaming",
    image: "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='600' fill='%23e0e7ff'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%233730a3'%3ERazer BlackWidow%3C/text%3E%3C/svg%3E",
    createdAt: "2026-01-06T08:00:00Z",
    affiliateUrl: "https://www.razer.com/de-de/gaming-keyboards"
  }
]
