import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mockDeals } from "@/data/deals";
import { formatPrice, formatDate, getTemperatureColor, getTemperatureLabel } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return mockDeals.map((deal) => ({
    id: String(deal.id),
  }));
}

export default async function DealDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const deal = mockDeals.find((d) => d.id === id);

  if (!deal) {
    notFound();
  }

  return (
    <div className="container py-8 max-w-6xl">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
      >
        ← Zurück zu allen Deals
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={deal.imageUrl}
              alt={deal.title}
              fill
              className="object-cover"
              priority
            />
            {deal.discount && (
              <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold">
                -{deal.discount}%
              </div>
            )}
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{deal.category}</Badge>
              <span className={`flex items-center gap-1 ${getTemperatureColor(deal.temperature)} font-bold`}>
                {getTemperatureLabel(deal.temperature)} {deal.temperature}°
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-2">{deal.title}</h1>
            <p className="text-muted-foreground">{deal.merchant}</p>
          </div>

          {/* Price */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold text-primary">
                    {formatPrice(deal.price)}
                  </span>
                  {deal.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(deal.originalPrice)}
                    </span>
                  )}
                </div>
                {deal.discount && (
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                    Du sparst {formatPrice(deal.originalPrice! - deal.price)} ({deal.discount}%)
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <a href={deal.dealUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full" size="lg">
              Zum Deal →
            </Button>
          </a>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Beschreibung</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{deal.description}</p>
            </CardContent>
          </Card>

          {/* Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Deal-Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Gepostet:</span>
                <span className="font-medium">{formatDate(deal.createdAt)}</span>
              </div>
              {deal.expiresAt && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Läuft ab:</span>
                  <span className="font-medium">
                    {new Date(deal.expiresAt).toLocaleDateString("de-DE")}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Kommentare:</span>
                <span className="font-medium">💬 {deal.comments}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Temperatur:</span>
                <span className={`font-medium ${getTemperatureColor(deal.temperature)}`}>
                  {deal.temperature}° {getTemperatureLabel(deal.temperature)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Deals */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Ähnliche Deals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockDeals
            .filter((d) => d.category === deal.category && d.id !== deal.id)
            .slice(0, 4)
            .map((relatedDeal) => (
              <Link key={relatedDeal.id} href={`/deals/${relatedDeal.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <Image
                      src={relatedDeal.imageUrl}
                      alt={relatedDeal.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold line-clamp-2 mb-2">
                      {relatedDeal.title}
                    </h3>
                    <p className="text-lg font-bold text-primary">
                      {formatPrice(relatedDeal.price)}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
