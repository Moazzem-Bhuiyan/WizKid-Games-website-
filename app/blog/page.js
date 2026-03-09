import BlogPage from "./_Component/BlogContainer"

export const metadata = {
  title: 'Dev Blog – WizKid Games',
  description: 'Development updates, news, and behind-the-scenes posts from WizKid Games.',
}

export default function page() {
  return (
    <div>
      <BlogPage />
    </div>
  )
}
