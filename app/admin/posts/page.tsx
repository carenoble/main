import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { requireAdmin } from "@/actions/auth"
import { getPosts } from "@/actions/posts"
import { PostTable } from "@/components/admin/post-table"

export const metadata = {
  title: "Manage Posts | Admin Dashboard",
}

export default async function AdminPostsPage() {
  // Ensure user is an admin
  await requireAdmin()

  // Get all posts, including drafts
  const { posts } = await getPosts({
    limit: 100,
    published: undefined, // Get all posts, published and drafts
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
        <Button asChild>
          <Link href="/admin/posts/new">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>

      <div className="rounded-md border">
        <PostTable posts={posts} />
      </div>
    </div>
  )
}
