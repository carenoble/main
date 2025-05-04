import { notFound } from "next/navigation"
import { requireAdmin } from "@/actions/auth"
import { getPostById } from "@/actions/posts"
import { getCategories } from "@/actions/categories"
import { PostForm } from "@/components/admin/post-form"

export const metadata = {
  title: "Edit Post | Admin Dashboard",
}

interface EditPostPageProps {
  params: {
    id: string
  }
}

export default async function EditPostPage({ params }: EditPostPageProps) {
  // Ensure user is an admin
  await requireAdmin()

  // Get post and categories
  const post = await getPostById(params.id)
  const categories = await getCategories()

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Post</h1>
        <p className="text-muted-foreground mt-2">Edit an existing blog post</p>
      </div>

      <div className="rounded-md border p-6">
        <PostForm post={post} categories={categories} />
      </div>
    </div>
  )
}
