import { requireAdmin } from "@/actions/auth"

export const metadata = {
  title: "Manage Users | Admin Dashboard",
}

export default async function AdminUsersPage() {
  // Ensure user is an admin
  await requireAdmin()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground mt-2">Manage user accounts</p>
      </div>

      <div className="rounded-md border p-6">
        <p className="text-muted-foreground">User management will be implemented soon.</p>
      </div>
    </div>
  )
}
