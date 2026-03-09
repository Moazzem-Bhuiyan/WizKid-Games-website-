# WizKid Games — Website

Dark fantasy atmospheric website for WizKid Games & Stormroot Saga.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS variables
- **Icons**: Lucide React
- **Fonts**: Cinzel Decorative, Cinzel, Crimson Pro (Google Fonts)
- **UI**: shadcn/ui (optional — add components as needed)

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Pages

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.js` | Homepage — hero, mailing list, game preview |
| `/games` | `app/games/page.js` | Stormroot Saga game page |
| `/blog` | `app/blog/page.js` | Dev blog listing |
| `/blog/[slug]` | `app/blog/[slug]/page.js` | Individual blog post |
| `/about` | `app/about/page.js` | About WizKid Games |
| `/contact` | `app/contact/page.js` | Contact form & socials |

## Customising

### Add a Blog Post
Edit `lib/blog.js` and add an entry to the `blogPosts` array:

```js
{
  id: 'unique-id',
  slug: 'url-slug',
  title: 'Post Title',
  date: 'YYYY-MM-DD',
  category: 'Art Update',
  excerpt: 'Short description...',
  content: `Your markdown-ish content here.`,
  author: 'WizKid Games Team',
}
```

Markdown supported: `**bold section headers**`, `*italic*`, `- bullet lists`

### Mailing List Integration
In `app/page.js`, find `handleSubmit` and replace the mock delay with your email provider:
- **Mailchimp**: Use their API or embed form
- **ConvertKit**: Use their API
- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', ... })`

### Contact Form
In `app/contact/page.js`, find `handleSubmit` and replace with:
- **Formspree**: Add your form ID
- **Netlify Forms**: Add `netlify` attribute to form
- **Custom API**: `POST /api/contact`

### Update Social Links
Search for `wizkidgames` in the codebase and replace with your actual handles/URLs.

### Add shadcn/ui Components
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button input textarea
```

## Adding Real Concept Art
Replace the placeholder art sections in `app/games/page.js` with:
```jsx
import Image from 'next/image'
// ...
<Image src="/art/forest-concept.jpg" alt="Stormroot Forest" fill className="object-cover" />
```

Place images in the `/public` folder.

## Deployment
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect GitHub repo
- **Self-hosted**: `npm run build && npm start`
