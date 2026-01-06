"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800",
        "bg-white/80 backdrop-blur-md dark:bg-black/80"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-neutral-900 dark:text-neutral-100"
            >
              DealsHub
            </motion.span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/#deals"
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              Deals
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
