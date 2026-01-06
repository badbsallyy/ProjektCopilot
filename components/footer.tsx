"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                📰 BaddestNews
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Entdecke täglich die besten Angebote und Schnäppchen aus allen
              Kategorien.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link
                  href="/deals"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Alle Deals
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Kategorien</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/?category=electronics"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Elektronik
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=fashion"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=home"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Haushalt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  href="/agb"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BaddestDeals. Alle Rechte
              vorbehalten.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/impressum"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Impressum
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link
                href="/datenschutz"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Datenschutz
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link
                href="/agb"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
