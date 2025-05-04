import { redirect } from "next/navigation"
import { getCurrentUser } from "@/actions/auth"
import { LoginForm } from "@/components/admin/login-form"

export const metadata = {
  title: "Admin Login | Harmony Haven Care Home",
}

export default async function AdminLoginPage() {
  const user = await getCurrentUser()

  if (user) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40">
      <div className="w-full max-w-md space-y-8 p-8 bg-background rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-muted-foreground mt-2">Sign in to access the admin dashboard</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
