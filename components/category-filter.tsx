"use client";

import { DealCategory, CATEGORIES } from "@/types/deal";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  selectedCategory: DealCategory | "Alle";
  onCategoryChange: (category: DealCategory | "Alle") => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === "Alle" ? "default" : "outline"}
        onClick={() => onCategoryChange("Alle")}
        className="text-sm"
      >
        Alle
      </Button>
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="text-sm"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
