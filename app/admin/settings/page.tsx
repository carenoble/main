import { requireAdmin } from "@/actions/auth"

export const metadata = {
  title: "Settings | Admin Dashboard",
}

export default async function AdminSettingsPage() {
  // Ensure user is an admin
  await requireAdmin()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage blog settings</p>
      </div>

      <div className="rounded-md border p-6">
        <p className="text-muted-foreground">Settings will be implemented soon.</p>
      </div>
    </div>
  )
}
