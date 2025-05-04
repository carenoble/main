"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { formatDate } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import type { Tables } from "@/types/supabase"
import { deletePost, togglePostPublished } from "@/actions/posts"
import { Edit, MoreHorizontal, Eye, Trash, Globe, XCircle } from "lucide-react"

type PostWithCategory = Tables<"posts"> & {
  categories?: Tables<"categories"> | null
}

interface PostTableProps {
  posts: PostWithCategory[]
}

export function PostTable({ posts }: PostTableProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState<string | null>(null)
  const [isUpdating, setIsUpdating] = useState<string | null>(null)

  const handleTogglePublished = async (post: PostWithCategory) => {
    try {
      setIsUpdating(post.id)
      await togglePostPublished(post.id, !post.published)
      toast({
        title: post.published ? "Post unpublished" : "Post published",
        description: `"${post.title}" has been ${post.published ? "unpublished" : "published"}.`,
      })
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem updating the post.",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(null)
    }
  }

  const handleDelete = async (id: string, title: string) => {
    const confirmed = window.confirm(`Are you sure you want to delete "${title}"?`)

    if (confirmed) {
      try {
        setIsDeleting(id)
        await deletePost(id)
        toast({
          title: "Post deleted",
          description: `"${title}" has been deleted.`,
        })
        router.refresh()
      } catch (error) {
        toast({
          title: "Error",
          description: "There was a problem deleting the post.",
          variant: "destructive",
        })
      } finally {
        setIsDeleting(null)
      }
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Status</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {posts.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
              No posts found. Create your first post.
            </TableCell>
          </TableRow>
        ) : (
          posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleTogglePublished(post)}
                  disabled={isUpdating === post.id}
                >
                  {post.published ? (
                    <Globe className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="sr-only">{post.published ? "Published" : "Draft"}</span>
                </Button>
              </TableCell>
              <TableCell className="font-medium">{post.title}</TableCell>
              <TableCell>{post.categories?.name || "Uncategorized"}</TableCell>
              <TableCell>{formatDate(post.created_at)}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href={`/blog/${post.slug}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/posts/${post.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(post.id, post.title)}
                      disabled={isDeleting === post.id}
                      className="text-red-600 focus:text-red-600"
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  )
}
