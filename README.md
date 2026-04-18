# Temazcal Los Mochis | Headless Marketing Architecture

A high-performance, statically generated marketing website built with a headless architecture to decouple content management from the presentation layer.

## System Architecture & Tech Stack

* **Framework:** Next.js (TypeScript)
* **Headless CMS:** Contentful
* **UI/Styling:** Tailwind CSS, shadcn/ui
* **Deployment & Edge Delivery:** Vercel

## Engineering Highlights

### 1. Headless CMS Integration (Contentful)
Architected a decoupled content strategy using Contentful as the single source of truth for all marketing copy and imagery. 
* **Business Impact:** Empowers non-technical marketing users to update site content, launch campaigns, and modify layouts without requiring developer intervention or new code deployments.
* **Technical Implementation:** Utilized GraphQL/REST APIs to fetch strongly-typed content models at build time.

### 2. Performance & SEO Optimization
Optimized for Core Web Vitals, prioritizing rapid Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS), which are critical metrics for marketing conversion rates.
* **Rendering Strategy:** Leveraged Next.js Static Site Generation (SSG) and Incremental Static Regeneration (ISR) to serve lightning-fast static pages while ensuring content remains up-to-date.
* **Asset Optimization:** Implemented automated image optimization and modern format delivery (WebP) via Next/Image.

### 3. Component-Driven Design System
Built a scalable and highly maintainable UI architecture using **Tailwind CSS** and **shadcn/ui**.
* Designed reusable, accessible UI primitives that map directly to Contentful content models, allowing for dynamic page construction based on CMS payloads.

## Getting Started

To run this project locally, you will need to configure your Contentful API keys.

### Prerequisites
* Node.js (v18+)
* A Contentful Space with the corresponding Content Models
* Contentful Space ID and Delivery/Preview Access Tokens

### Installation

```bash
# Install dependencies
npm install

# Configure environment variables
# Copy the example file and input your Contentful credentials
cp .env.example .env

# Run the development server
npm run dev
