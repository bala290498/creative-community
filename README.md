# Creative-Community Website

A modern, responsive website for Creative-Community built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, beautiful UI with smooth animations
- 📱 Fully responsive design
- 🎨 Custom Tailwind CSS styling
- 📝 Membership form with API integration
- 🧭 Smooth scroll navigation
- ⚡ Fast and optimized with Next.js
- 🚀 Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Vercel Deployment

### Setup

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Deploy to Vercel**:
   - Option A: Connect your GitHub repository to Vercel
   - Option B: Run `vercel` in the project directory

3. **Environment Variables** (if needed):
   - Add environment variables in Vercel dashboard
   - See `.env.example` for reference

### Form Integration

The membership form is set up with an API route at `/api/membership`. To integrate with Vercel Forms or other services:

1. **Vercel Forms**: Update `app/api/membership/route.ts` to use Vercel Forms API
2. **Email Service**: Add email sending logic (e.g., Resend, SendGrid)
3. **Database**: Connect to your database (e.g., Vercel Postgres, Supabase)

### Configuration Files

- `vercel.json` - Vercel deployment configuration
- `.vercelignore` - Files to exclude from Vercel deployment
- `.env.example` - Environment variables template

## Project Structure

```
creative-community/
├── app/
│   ├── api/
│   │   └── membership/
│   │       └── route.ts      # API endpoint for form submission
│   ├── layout.tsx            # Root layout with navigation and footer
│   ├── page.tsx              # Home page
│   ├── community-owned/
│   ├── initiatives/
│   ├── partners/
│   ├── membership/
│   ├── about/
│   └── globals.css           # Global styles and Tailwind directives
├── components/
│   ├── Navigation.tsx        # Header navigation component
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── CommunityOwned.tsx    # Community-Owned section
│   ├── InHouseInitiatives.tsx # In-House Initiatives section
│   ├── TrustedPartners.tsx   # Trusted Partners section
│   ├── Membership.tsx        # Membership section
│   ├── MembershipForm.tsx   # Membership application form
│   └── About.tsx             # About section
├── vercel.json               # Vercel configuration
├── .vercelignore            # Vercel ignore file
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The primary color is currently set to a blue palette.

### Content

All content is in the component files. Edit the respective component files to update text, sections, or add new features.

### Form Backend

Update `app/api/membership/route.ts` to:
- Integrate with Vercel Forms API
- Connect to a database
- Send email notifications
- Add form validation

## Build for Production

```bash
npm run build
npm start
```

## License

This project is for Creative-Community use.
