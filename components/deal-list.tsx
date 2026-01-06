"use client"

import { useState } from "react"
import { Deal } from "@/data/deals"
import DealCard from "./deal-card"
import CategoryFilter from "./category-filter"

interface DealListProps {
  deals: Deal[]
}

export default function DealList({ deals }: DealListProps) {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredDeals = selectedCategory === "all" 
    ? deals 
    : deals.filter(deal => deal.category === selectedCategory)

  return (
    <div className="space-y-8">
      <CategoryFilter 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory}
      />
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDeals.map((deal, index) => (
          <DealCard key={deal.id} deal={deal} index={index} />
        ))}
      </div>

      {filteredDeals.length === 0 && (
        <div className="py-12 text-center text-neutral-500 dark:text-neutral-400">
          Keine Deals in dieser Kategorie gefunden.
        </div>
      )}
    </div>
  )
}
