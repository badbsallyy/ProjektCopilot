import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { deals } from "@/data/deals"
import { formatPrice, calculateDiscount } from "@/lib/utils"

interface DealPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return deals.map((deal) => ({
    slug: deal.slug,
  }))
}

export async function generateMetadata({ params }: DealPageProps) {
  const { slug } = await params
  const deal = deals.find((d) => d.slug === slug)
  
  if (!deal) {
    return {
      title: "Deal nicht gefunden",
    }
  }

  return {
    title: `${deal.title} - DealsHub`,
    description: deal.description,
  }
}

export default async function DealPage({ params }: DealPageProps) {
  const { slug } = await params
  const deal = deals.find((d) => d.slug === slug)

  if (!deal) {
    notFound()
  }

  const discount = calculateDiscount(deal.price, deal.oldPrice)
  const publishedDate = new Date(deal.createdAt).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <Link 
          href="/"
          className="inline-flex items-center text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 mb-8 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zu allen Deals
        </Link>

        <div className="overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 shadow-lg border border-neutral-200 dark:border-neutral-800">
          <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={deal.image}
              alt={deal.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <div className="absolute right-4 top-4">
              <div className="rounded-full bg-red-500 px-4 py-2 text-lg font-bold text-white shadow-xl">
                -{discount}%
              </div>
            </div>
          </div>

          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 px-4 py-1.5 text-sm font-medium text-neutral-700 dark:text-neutral-300 capitalize">
                  {deal.category}
                </span>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {publishedDate}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                {deal.title}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
                  {formatPrice(deal.price)}
                </span>
                <span className="text-xl text-neutral-500 line-through">
                  {formatPrice(deal.oldPrice)}
                </span>
              </div>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
              <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
                {deal.description}
              </p>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
              <a
                href={deal.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 dark:bg-neutral-100 px-6 py-4 text-base font-semibold text-white dark:text-neutral-900 transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                Zum Anbieter
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
