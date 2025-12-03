# GoldTest Lab - Next.js Landing Page

A modern, interactive gold testing laboratory website built with Next.js 14, TypeScript, Tailwind CSS, and Motion animations. Fully integrated from the Interactive Website Design project.

## Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Styled with Tailwind CSS and custom design system
- 🎬 Smooth animations with Motion (Framer Motion)
- 📱 Fully responsive design
- 🧮 Interactive Gold Purity Calculator
- 🎯 Modern UI components (Radix UI)
- ⚙️ TypeScript for type safety
- 🚀 Optimized for performance
- 🖼️ Image optimization with Next.js Image

## Project Structure

```
gold-lab/
├── app/
│   ├── globals.css          # Global styles with Tailwind & design system
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── HeroSection.tsx      # Hero section with animated gold bar
│   ├── ServicesSection.tsx  # Services showcase
│   ├── ProcessSection.tsx   # 4-step process explanation
│   ├── WhyChooseUs.tsx     # Features section with image
│   ├── PurityCalculator.tsx # Interactive gold value calculator
│   ├── TestimonialsSection.tsx # Client testimonials
│   ├── Footer.tsx           # Footer with contact info
│   ├── figma/
│   │   └── ImageWithFallback.tsx # Image component with error handling
│   └── ui/                  # UI component library
│       ├── button.tsx
│       ├── input.tsx
│       ├── label.tsx
│       └── utils.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── postcss.config.js       # PostCSS configuration
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### HeroSection
- Animated hero section with floating particles
- 3D gold bar visualization
- Navigation bar
- Key statistics display

### ServicesSection
- Four main services with icons
- Hover animations
- Feature lists

### ProcessSection
- Four-step testing process
- Interactive hover effects
- Visual connection lines

### PurityCalculator
- Interactive gold value calculator
- Karat selection (10K, 14K, 18K, 22K, 24K)
- Real-time value calculation
- Educational content about gold purity

### TestimonialsSection
- Client testimonials with ratings
- Trust badges and statistics
- Image fallback handling

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Motion (Framer Motion)** - Animation library
- **Radix UI** - Accessible UI component primitives
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants

## Design System

The project uses a custom design system with:
- CSS variables for theming
- Consistent color palette (gold theme: #D4AF37, #FFD700)
- Typography system (Poppins for headings, Inter for body)
- Responsive breakpoints
- Dark mode support (configured but not fully implemented)

## Attributions

This project includes components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

This project includes photos from [Unsplash](https://unsplash.com) used under [Unsplash License](https://unsplash.com/license).

Original design from [Figma - Interactive Website Design](https://www.figma.com/design/7xWelVZhWRzDE8U5uTebTT/Interactive-Website-Design).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Motion Documentation](https://motion.dev)
- [Radix UI Documentation](https://www.radix-ui.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

