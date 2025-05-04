import Link from "next/link"
import { posts } from "@/app/blog/page"

export function RecentPosts() {
  const recent = posts.slice(0, 3)
  return (
    <section className="w-full py-12 md:py-16 border-t mt-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Latest News & Updates</h2>
          <p className="text-muted-foreground max-w-xl">Catch up on the latest news, events, and stories from Harmony Haven.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {recent.map(post => (
            <div key={post.slug} className="border rounded-xl p-6 flex flex-col h-full bg-background">
              <h3 className="font-bold text-lg mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <div className="text-xs text-muted-foreground mb-2">{new Date(post.date).toLocaleDateString()}</div>
              <p className="mb-4 flex-grow">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary font-semibold hover:underline mt-auto">Read More</Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/blog" className="inline-block bg-primary text-primary-foreground font-bold px-6 py-2 rounded hover:bg-primary/90 transition">View All Posts</Link>
        </div>
      </div>
    </section>
  )
} 