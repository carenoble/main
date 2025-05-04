import { requireAdmin } from "@/actions/auth"
import { getCategories } from "@/actions/categories"
import { PostForm } from "@/components/admin/post-form"

export const metadata = {
  title: "Create Post | Admin Dashboard",
}

export default async function NewPostPage() {
  // Ensure user is an admin
  await requireAdmin()

  // Get categories for the form
  const categories = await getCategories()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create Post</h1>
        <p className="text-muted-foreground mt-2">Create a new blog post</p>
      </div>

      <div className="rounded-md border p-6">
        <PostForm categories={categories} />
      </div>
    </div>
  )
}
