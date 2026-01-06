"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const categories = [
  { value: "all", label: "Alle" },
  { value: "tech", label: "Tech" },
  { value: "haushalt", label: "Haushalt" },
  { value: "fashion", label: "Fashion" },
  { value: "gaming", label: "Gaming" },
]

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <motion.button
          key={category.value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.value)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            selectedCategory === category.value
              ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
          )}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  )
}
