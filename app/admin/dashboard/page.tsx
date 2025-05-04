import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, MessageSquare, Tag, Plus } from "lucide-react"
import { requireAdmin } from "@/actions/auth"
import { getPosts } from "@/actions/posts"
import { getCategories } from "@/actions/categories"

export const metadata = {
  title: "Admin Dashboard | Harmony Haven Care Home",
}

export default async function AdminDashboardPage() {
  // Ensure user is an admin
  await requireAdmin()

  // Get counts for dashboard
  const { count: postCount } = await getPosts({ limit: 1 })
  const { count: draftCount } = await getPosts({ limit: 1, published: false })
  const categories = await getCategories()

  const stats = [
    {
      title: "Total Posts",
      value: postCount,
      icon: <FileText className="h-5 w-5" />,
      href: "/admin/posts",
    },
    {
      title: "Draft Posts",
      value: draftCount,
      icon: <FileText className="h-5 w-5" />,
      href: "/admin/posts",
    },
    {
      title: "Categories",
      value: categories.length,
      icon: <Tag className="h-5 w-5" />,
      href: "/admin/categories",
    },
    {
      title: "Comments",
      value: 0, // We'll implement this later
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/admin/comments",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button asChild>
          <Link href="/admin/posts/new">
            <Plus className="mr-2 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </div>
      
      <div className="  />
            New Post
          </Link>
        </Button>
      </div>
      
      <div className=\"grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className=""flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className="rounded-full bg-muted p-2">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground pt-1">
                <Link href={stat.href} className="hover:underline">
                  View all
                </Link>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Posts</CardTitle>
            <CardDescription>
              Your most recently published posts
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* We'll implement this later */}
            <p className="text-sm text-muted-foreground">
              No recent posts found.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/posts/new">
                <Plus className="mr-2 h-4 w-4" />
                Create New Post
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/blog" target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                View Blog
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
