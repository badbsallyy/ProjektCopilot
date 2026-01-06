"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Deal } from "@/data/deals"
import { formatPrice, calculateDiscount, cn } from "@/lib/utils"

interface DealCardProps {
  deal: Deal
  index: number
}

export default function DealCard({ deal, index }: DealCardProps) {
  const discount = calculateDiscount(deal.price, deal.oldPrice)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/deals/${deal.slug}`}>
        <div className={cn(
          "group relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800",
          "bg-white dark:bg-neutral-900 transition-all duration-300",
          "hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700"
        )}>
          <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={deal.image}
              alt={deal.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute right-2 top-2">
              <div className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                -{discount}%
              </div>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {deal.category}
            </div>
            
            <h3 className="line-clamp-2 text-base font-semibold text-neutral-900 dark:text-neutral-100">
              {deal.title}
            </h3>
            
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                {formatPrice(deal.price)}
              </span>
              <span className="text-sm text-neutral-500 line-through">
                {formatPrice(deal.oldPrice)}
              </span>
            </div>
            
            <button className={cn(
              "w-full rounded-lg bg-neutral-900 dark:bg-neutral-100 py-2.5 text-sm font-medium",
              "text-white dark:text-neutral-900 transition-colors",
              "hover:bg-neutral-800 dark:hover:bg-neutral-200"
            )}>
              Deal ansehen
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
