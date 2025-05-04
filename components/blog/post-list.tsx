import { PostCard } from "@/components/blog/post-card"
import type { Tables } from "@/types/supabase"

type PostWithAuthorAndCategory = Tables<"posts"> & {
  user_profiles?: Tables<"user_profiles"> | null
  categories?: Tables<"categories"> | null
}

interface PostListProps {
  posts: PostWithAuthorAndCategory[]
}

export function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-muted-foreground">No posts found</h3>
        <p className="mt-2">Check back later for new content.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
