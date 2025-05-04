"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import type { Tables } from "@/types/supabase"

interface CategoryFilterProps {
  categories: Tables<"categories">[]
  activeCategory?: string
}

export function CategoryFilter({ categories, activeCategory }: CategoryFilterProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link
        href="/blog"
        className={cn(
          "px-3 py-1 rounded-full text-sm border transition-colors",
          !activeCategory ? "bg-primary text-primary-foreground border-primary" : "bg-background hover:bg-muted",
        )}
      >
        All
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/blog?category=${category.slug}`}
          className={cn(
            "px-3 py-1 rounded-full text-sm border transition-colors",
            activeCategory === category.slug
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background hover:bg-muted",
          )}
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}
