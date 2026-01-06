import { deals } from "@/data/deals"
import DealList from "@/components/deal-list"

export default function Home() {
  const sortedDeals = [...deals].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-6xl">
              Die besten Deals
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neutral-600 to-neutral-900 dark:from-neutral-400 dark:to-neutral-100">
                täglich neu
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Entdecke handverlesene Angebote aus Tech, Haushalt, Fashion und Gaming. 
              Spare bares Geld bei deinen Lieblingsprodukten.
            </p>
          </div>
        </div>
      </section>

      <section id="deals" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <DealList deals={sortedDeals} />
      </section>
    </main>
  )
}
