// lib/blog.js – replace with a CMS (Contentful, Sanity, etc.) when ready

export const blogPosts = [
  {
    id: 'website-launch',
    slug: 'wizkid-games-website-launched',
    title: 'WizKid Games Official Website Launched!',
    date: '2025-01-01',
    category: 'Studio Update',
    excerpt: "We're thrilled to officially introduce WizKid Games to the world. Today marks the launch of our website and the beginning of our public development journey for Stormroot Saga.",
    content: `
We're thrilled to officially introduce WizKid Games to the world.

Today marks the launch of our studio website and the beginning of our public development journey. We're a small, focused UK indie studio with one goal: to craft an atmospheric, story-driven dark fantasy RPG that feels genuinely immersive and personal.

**Who We Are**

WizKid Games is an independent game studio based in the United Kingdom. We're passionate about deep worldbuilding, meaningful player choice, and the kind of atmospheric fantasy that stays with you long after you put down the controller.

**What We're Building**

Our debut title — *Stormroot Saga* — is currently in active development. It's a dark fantasy RPG set in a world shaped by ancient storms, forgotten magic, and deep wilderness. More details will follow as we reach development milestones.

**What's Next**

Over the coming months, we'll be sharing:

- Art updates and concept reveals
- Logo and branding announcements  
- Game mechanics teasers
- Behind-the-scenes development posts

We'd love for you to follow the journey. Sign up to our mailing list on the homepage to be the first to know about major reveals and the eventual launch.

Thank you for being here at the beginning.

— The WizKid Games Team
    `,
    author: 'WizKid Games Team',
  },
]

export function getPostBySlug(slug) {
  return blogPosts.find(p => p.slug === slug) || null
}
