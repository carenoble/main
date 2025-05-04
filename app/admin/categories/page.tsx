import { requireAdmin } from "@/actions/auth"
import { getCategories } from "@/actions/categories"

export const metadata = {
  title: "Manage Categories | Admin Dashboard",
}

export default async function AdminCategoriesPage() {
  // Ensure user is an admin
  await requireAdmin()

  // Get all categories
  const categories = await getCategories()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
        <p className="text-muted-foreground mt-2">Manage blog categories</p>
      </div>

      <div className="rounded-md border p-6">
        <p className="text-muted-foreground">Category management will be implemented soon.</p>
      </div>
    </div>
  )
}
