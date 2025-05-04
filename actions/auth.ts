"use server"
import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase/server"

export async function signIn(email: string, password: string) {
  const supabase = createServerSupabaseClient()

  const result = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  return result
}

export async function signOut() {
  const supabase = createServerSupabaseClient()
  await supabase.auth.signOut()
  redirect("/admin")
}

export async function getCurrentUser() {
  const supabase = createServerSupabaseClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data: profile } = await supabase.from("user_profiles").select("*").eq("id", user.id).single()

  return {
    ...user,
    role: profile?.role || "reader",
  }
}

export async function isAdmin() {
  const user = await getCurrentUser()
  return user?.role === "admin"
}

export async function requireAdmin() {
  const isUserAdmin = await isAdmin()

  if (!isUserAdmin) {
    redirect("/admin")
  }
}
