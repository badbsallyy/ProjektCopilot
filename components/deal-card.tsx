import Link from "next/link";
import Image from "next/image";
import { Deal } from "@/types/deal";
import { formatPrice, formatDate, getTemperatureColor } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  return (
    <Link href={`/deals/${deal.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={deal.imageUrl}
            alt={deal.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {deal.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              -{deal.discount}%
            </div>
          )}
        </div>

        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg line-clamp-2 flex-1">
              {deal.title}
            </h3>
            <div className={`flex items-center gap-1 ${getTemperatureColor(deal.temperature)} font-bold text-sm whitespace-nowrap`}>
              {deal.temperature > 200 ? "🔥" : "👍"} {deal.temperature}°
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Badge variant="secondary">{deal.category}</Badge>
            <span className="text-xs text-muted-foreground">{deal.merchant}</span>
          </div>
        </CardHeader>

        <CardContent className="pb-3 flex-1">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {deal.description}
          </p>
        </CardContent>

        <CardFooter className="flex-col items-start gap-2 pt-0">
          <div className="flex items-baseline gap-2 w-full">
            <span className="text-2xl font-bold text-primary">
              {formatPrice(deal.price)}
            </span>
            {deal.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(deal.originalPrice)}
              </span>
            )}
          </div>
          <div className="flex items-center justify-between w-full text-xs text-muted-foreground">
            <span>{formatDate(deal.createdAt)}</span>
            <span>💬 {deal.comments}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
