"use server"

import { revalidatePath } from "next/cache"
import { createServerSupabaseClient } from "@/lib/supabase/server"
import { getCurrentUser } from "@/actions/auth"
import type { InsertTables, UpdateTables } from "@/types/supabase"

export async function getPosts({
  page = 1,
  limit = 10,
  categorySlug,
  published = true,
}: {
  page?: number
  limit?: number
  categorySlug?: string
  published?: boolean
} = {}) {
  const supabase = createServerSupabaseClient()

  let query = supabase
    .from("posts")
    .select(`
      *,
      user_profiles (*),
      categories (*)
    `)
    .order("created_at", { ascending: false })

  if (published) {
    query = query.eq("published", true)
  }

  if (categorySlug) {
    const { data: category } = await supabase.from("categories").select("id").eq("slug", categorySlug).single()

    if (category) {
      query = query.eq("category_id", category.id)
    }
  }

  // Calculate pagination
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error, count } = await query.range(from, to).order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching posts:", error)
    throw error
  }

  return {
    posts: data || [],
    count: count || 0,
    page,
    limit,
    totalPages: count ? Math.ceil(count / limit) : 0,
  }
}

export async function getPostBySlug(slug: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("posts")
    .select(`
      *,
      user_profiles (*),
      categories (*)
    `)
    .eq("slug", slug)
    .single()

  if (error) {
    console.error("Error fetching post:", error)
    return null
  }

  return data
}

export async function getPostById(id: string) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("posts")
    .select(`
      *,
      user_profiles (*),
      categories (*)
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching post:", error)
    return null
  }

  return data
}

export async function createPost(post: InsertTables<"posts">) {
  const supabase = createServerSupabaseClient()
  const user = await getCurrentUser()

  if (!user) {
    throw new Error("You must be logged in to create a post")
  }

  const { data, error } = await supabase
    .from("posts")
    .insert({
      ...post,
      author_id: user.id,
      published_at: post.published ? new Date().toISOString() : null,
    })
    .select()
    .single()

  if (error) {
    console.error("Error creating post:", error)
    throw error
  }

  revalidatePath("/blog")
  revalidatePath("/admin/posts")

  return data
}

export async function updatePost(id: string, post: UpdateTables<"posts">) {
  const supabase = createServerSupabaseClient()

  // Check if published status is changing from false to true
  if (post.published) {
    const { data: currentPost } = await supabase.from("posts").select("published").eq("id", id).single()

    if (currentPost && !currentPost.published) {
      post.published_at = new Date().toISOString()
    }
  }

  const { data, error } = await supabase
    .from("posts")
    .update({
      ...post,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error("Error updating post:", error)
    throw error
  }

  revalidatePath("/blog")
  revalidatePath(`/blog/${post.slug}`)
  revalidatePath("/admin/posts")

  return data
}

export async function deletePost(id: string) {
  const supabase = createServerSupabaseClient()

  const { error } = await supabase.from("posts").delete().eq("id", id)

  if (error) {
    console.error("Error deleting post:", error)
    throw error
  }

  revalidatePath("/blog")
  revalidatePath("/admin/posts")
}

export async function togglePostPublished(id: string, published: boolean) {
  const supabase = createServerSupabaseClient()

  const { data, error } = await supabase
    .from("posts")
    .update({
      published,
      published_at: published ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single()

  if (error) {
    console.error("Error updating post:", error)
    throw error
  }

  revalidatePath("/blog")
  revalidatePath(`/blog/${data.slug}`)
  revalidatePath("/admin/posts")

  return data
}
