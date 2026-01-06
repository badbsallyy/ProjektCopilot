import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    return `vor ${diffInMinutes} Minute${diffInMinutes !== 1 ? "n" : ""}`;
  } else if (diffInHours < 24) {
    return `vor ${diffInHours} Stunde${diffInHours !== 1 ? "n" : ""}`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `vor ${diffInDays} Tag${diffInDays !== 1 ? "en" : ""}`;
  }
}

export function getTemperatureColor(temperature: number): string {
  if (temperature >= 300) return "text-red-500";
  if (temperature >= 200) return "text-orange-500";
  if (temperature >= 100) return "text-yellow-500";
  return "text-blue-500";
}

export function getTemperatureLabel(temperature: number): string {
  if (temperature >= 300) return "🔥 Heiß";
  if (temperature >= 200) return "🔥 Warm";
  if (temperature >= 100) return "👍 Beliebt";
  return "❄️ Kalt";
}
