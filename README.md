# 🔥 DealsHub - Deals Blog

A clean, modern deals blog inspired by mydealz.de, built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- **Deal Feed**: Browse all deals in a clean, card-based layout
- **Category Filtering**: Filter deals by category (Elektronik, Mode, Haushalt, Sport, Gaming, Beauty, Lebensmittel, Sonstiges)
- **Deal Detail Pages**: View detailed information about each deal
- **Temperature System**: Hot deals rated by community temperature (🔥 indicators)
- **Dark Mode**: Toggle between light and dark themes
- **Mobile-First Design**: Fully responsive layout optimized for all devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) inspired components
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── deals/[id]/        # Dynamic deal detail pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page with deal feed
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── deal-card.tsx     # Deal card component
│   ├── category-filter.tsx
│   ├── header.tsx        # Navigation header
│   └── theme-provider.tsx
├── data/                 # Mock data
│   └── deals.ts         # Deal data
├── lib/                 # Utility functions
│   └── utils.ts         # Helper functions
├── types/               # TypeScript types
│   └── deal.ts          # Deal type definitions
└── public/              # Static assets
```

## 🎨 Design Philosophy

- **Minimal & Clean**: Focus on content with minimal distractions
- **Mobile-First**: Optimized for mobile devices with responsive breakpoints
- **Dark Mode Compatible**: Seamless theme switching with persistent preferences
- **Production-Ready**: Optimized performance and SEO-friendly

## 📝 Features Overview

### Deal Feed
- Grid layout showing all available deals
- Each deal card displays:
  - Product image with discount badge
  - Title and description
  - Category and merchant
  - Current and original price
  - Temperature (hot score)
  - Comment count
  - Time posted

### Category Filtering
- Filter deals by 8 categories
- Real-time filtering without page reload
- Active category highlighting

### Deal Detail Page
- Large product image
- Comprehensive deal information
- Price comparison with savings calculation
- Deal metadata (posted date, expiry, comments, temperature)
- Related deals section
- CTA button to external deal link

### Dark Mode
- System preference detection
- Manual toggle with persistent storage
- Smooth theme transitions
- Optimized color schemes for both modes

## 🔧 Configuration

### Adding New Deals

Edit `data/deals.ts` to add new deals:

```typescript
{
  id: "unique-id",
  title: "Deal Title",
  description: "Deal description",
  price: 99.99,
  originalPrice: 149.99,
  discount: 33,
  imageUrl: "https://example.com/image.jpg",
  category: "Elektronik",
  merchant: "Merchant Name",
  dealUrl: "https://example.com/deal",
  createdAt: "2024-01-06T10:00:00Z",
  expiresAt: "2024-01-10T23:59:59Z",
  temperature: 250,
  comments: 42,
}
```

### Customizing Categories

Edit `types/deal.ts` to modify categories:

```typescript
export type DealCategory = 
  | "YourCategory1"
  | "YourCategory2"
  // ...
```

### Theme Customization

Modify `app/globals.css` and `tailwind.config.ts` to customize colors and themes.

## 🌐 Deployment

This project can be deployed on any platform that supports Next.js:

- [Vercel](https://vercel.com) (Recommended)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- Any Node.js hosting platform

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

- Inspired by [mydealz.de](https://www.mydealz.de)
- Built with [Next.js](https://nextjs.org/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)