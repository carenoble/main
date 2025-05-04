"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"

export async function uploadImage(file: File) {
  const supabase = createServerSupabaseClient()

  // Convert File to ArrayBuffer
  const arrayBuffer = await file.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)

  // Generate a unique file name
  const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-").toLowerCase()}`
  const filePath = `blog-images/${fileName}`

  const { data, error } = await supabase.storage.from("blog-media").upload(filePath, buffer, {
    contentType: file.type,
    cacheControl: "3600",
    upsert: false,
  })

  if (error) {
    console.error("Error uploading image:", error)
    throw error
  }

  // Get the public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from("blog-media").getPublicUrl(data.path)

  return publicUrl
}

export async function deleteImage(url: string) {
  const supabase = createServerSupabaseClient()

  // Extract the path from the URL
  const urlObj = new URL(url)
  const pathMatch = urlObj.pathname.match(/\/storage\/v1\/object\/public\/blog-media\/(.+)/)

  if (!pathMatch || !pathMatch[1]) {
    throw new Error("Invalid image URL")
  }

  const filePath = pathMatch[1]

  const { error } = await supabase.storage.from("blog-media").remove([filePath])

  if (error) {
    console.error("Error deleting image:", error)
    throw error
  }

  return true
}
