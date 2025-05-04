"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import type { InsertTables, UpdateTables } from "@/types/supabase"

export async function getCategories() {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase.from("categories").select("*").order("name")

  if (error) {
    console.error("Error fetching categories:", error)
    throw error
  }

  return data || []
}

export async function getCategoryBySlug(slug: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase.from("categories").select("*").eq("slug", slug).single()

  if (error) {
    console.error("Error fetching category:", error)
    return null
  }

  return data
}

export async function createCategory(category: InsertTables<"categories">) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase.from("categories").insert(category).select().single()

  if (error) {
    console.error("Error creating category:", error)
    throw error
  }

  revalidatePath("/blog")
  revalidatePath("/admin/categories")

  return data
}

export async function updateCategory(id: string, category: UpdateTables<"categories">) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("categories")
    .update({
      ...category,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error("Error updating category:", error)
    throw error
  }

  revalidatePath("/blog")
  revalidatePath("/admin/categories")

  return data
}

export async function deleteCategory(id: string) {
  const supabase = createServerSupabaseClient()

  const { error } = await supabase.from("categories").delete().eq("id", id)

  if (error) {
    console.error("Error deleting category:", error)
    throw error
  }

  revalidatePath("/blog")
  revalidatePath("/admin/categories")
}
