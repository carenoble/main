import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Tables } from "@/types/supabase"

type PostWithAuthorAndCategory = Tables<"posts"> & {
  user_profiles?: Tables<"user_profiles"> | null
  categories?: Tables<"categories"> | null
}

interface PostCardProps {
  post: PostWithAuthorAndCategory
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        {post.featured_image ? (
          <Image src={post.featured_image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">No image</span>
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          {post.categories && <div className="text-sm text-primary font-medium">{post.categories.name}</div>}
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            <h3 className="font-bold text-xl line-clamp-2">{post.title}</h3>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        {post.excerpt && <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between text-sm text-muted-foreground">
        <div>{post.user_profiles?.display_name || "Anonymous"}</div>
        <div>{post.published_at ? formatDate(post.published_at) : formatDate(post.created_at)}</div>
      </CardFooter>
    </Card>
  )
}
