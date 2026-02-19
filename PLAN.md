# Project Plan: Modern Blog Black (Blog Detail)

## Pages
- **Blog Detail**: Detailed view of a specific blog post including content, author info, and category tags.

## Features
- **Dark Mode UI**: Implementation of a sleek dark theme using DaisyUI 'dark' theme or custom black/gray palettes.
- **Dynamic Content**: Rendering post body content with support for markdown or HTML.
- **Responsive Design**: Mobile-first approach ensuring the layout adapts from iPhone to Desktop.
- **Newsletter Signup**: Form at the bottom of the page to collect user emails for the database.
- **Navigation**: Persistent header/navbar across the site.

## Components
- **Header**: Navigation links and branding.
- **Blog Section**: Title, metadata (date/author), and the main article body.
- **Footer**: Social links and copyright information.
- **Newsletter Form**: Input and button for email subscription.

## Database
- `posts`: Stores the article content and metadata.
- `categories`: Groups posts into logical sections.
- `newsletter_subscribers`: Captures lead information.

## Status
- [x] Database Setup: Completed
- [x] UI Layout Implementation: Completed
- [x] Integration: Completed

## Tasks
- [x] Initialize Next.js project with TypeScript, Tailwind, ESLint, App Router, src-dir, and @/* alias
- [x] Install and configure daisyUI for styling
- [x] Database Setup
- [x] UI Layout Implementation
- [x] Integration

## Discovered Tasks
- [x] Setup opencode config with permissions
- [x] Setup Supabase client configuration
- [x] Create database schema for posts, categories, and newsletter_subscribers
- [x] Add seed data for development
- [x] Build Header component with navigation
- [x] Build Blog Detail page layout
- [x] Build Footer component
- [x] Create Newsletter signup form
- [x] Implement dark mode theming with daisyUI
- [x] Add responsive design for mobile/desktop
- [x] Create server actions for newsletter subscription
- [x] Integrate BlogSection with Supabase data fetching
- [x] Integrate BlogDetail with Supabase data fetching
- [x] Create blog detail route at /blog/[slug]
- [x] Update NewsletterForm to save subscribers to database
