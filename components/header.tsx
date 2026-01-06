"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            📰 BaddestNews
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-sm"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
        </nav>
      </div>
    </header>
  );
}
