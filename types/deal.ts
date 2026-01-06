export interface Deal {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  imageUrl: string;
  category: DealCategory;
  merchant: string;
  dealUrl: string;
  createdAt: string;
  expiresAt?: string;
  temperature: number; // Hot score like mydealz
  comments: number;
}

export type DealCategory = 
  | "Elektronik"
  | "Mode"
  | "Haushalt"
  | "Sport"
  | "Gaming"
  | "Beauty"
  | "Lebensmittel"
  | "Sonstiges";

export const CATEGORIES: DealCategory[] = [
  "Elektronik",
  "Mode",
  "Haushalt",
  "Sport",
  "Gaming",
  "Beauty",
  "Lebensmittel",
  "Sonstiges",
];
