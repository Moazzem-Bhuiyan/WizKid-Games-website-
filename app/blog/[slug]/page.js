// /app/blog/[slug]/page.jsx
import BlogPostPage from './_Component/BlogDetailsContainer'

export const metadata = {
  title: 'Dev Blog – WizKid Games',
  description: 'Development updates, news, and behind-the-scenes posts from WizKid Games.',
}

export default function page({ params }) { 
  return (
    <div>
      <BlogPostPage params={params} />
    </div>
  )
}