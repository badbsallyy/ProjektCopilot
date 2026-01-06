"use client";

import { useState } from "react";
import { mockDeals } from "@/data/deals";
import { DealCategory } from "@/types/deal";
import { DealCard } from "@/components/deal-card";
import { CategoryFilter } from "@/components/category-filter";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<DealCategory | "Alle">("Alle");

  const filteredDeals = selectedCategory === "Alle"
    ? mockDeals
    : mockDeals.filter((deal) => deal.category === selectedCategory);

  return (
    <div className="container py-8 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Die besten <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Deals & Schnäppchen</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Entdecke täglich die heißesten Angebote aus allen Kategorien
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>

      {filteredDeals.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Keine Deals in dieser Kategorie gefunden.
          </p>
        </div>
      )}
    </div>
  );
}
