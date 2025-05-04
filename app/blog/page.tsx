import Link from "next/link"

export const metadata = {
  title: "Blog | Harmony Haven Care Home",
  description: "Latest news and updates from Harmony Haven Care Home",
}

export const posts = [
  {
    title: "Welcome to Harmony Haven's New Website!",
    slug: "welcome-to-harmony-haven",
    date: "2024-06-01",
    excerpt: "We're excited to launch our new website, making it easier for families to learn about our care home and services.",
    content: `We are thrilled to announce the launch of our brand new website! Our goal is to provide families and professionals with clear, accessible information about Harmony Haven, our specialist services, and the warm, homely environment we offer. Stay tuned for regular updates, news, and stories from our community.`
  },
  {
    title: "Outstanding CQC Rating Achieved",
    slug: "outstanding-cqc-rating",
    date: "2024-05-15",
    excerpt: "Harmony Haven has been rated 'Outstanding' by the Care Quality Commission!",
    content: `We are proud to share that Harmony Haven has received an 'Outstanding' rating from the Care Quality Commission (CQC). This achievement reflects the dedication and compassion of our staff, and our ongoing commitment to providing the highest standard of care.`
  },
  {
    title: "Summer Garden Party Announced",
    slug: "summer-garden-party",
    date: "2024-05-01",
    excerpt: "Join us for our annual Summer Garden Party! All families and friends are welcome.",
    content: `Mark your calendars! Our annual Summer Garden Party will take place on July 10th. There will be food, games, music, and fun for all ages. We look forward to celebrating with our residents, families, and the local community.`
  }
];

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Latest news and updates from Harmony Haven Care Home
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
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
    </div>
  )
}
