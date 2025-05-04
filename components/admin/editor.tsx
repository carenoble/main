"use client"

import type React from "react"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface EditorProps {
  value: string
  onChange: (value: string) => void
}

export function Editor({ value, onChange }: EditorProps) {
  const [activeTab, setActiveTab] = useState<string>("write")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <Tabs defaultValue="write" className="w-full" onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="write">Write</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>

      <TabsContent value="write" className="mt-2">
        <Textarea
          value={value}
          onChange={handleChange}
          placeholder="Write your content here..."
          className="min-h-[500px] resize-none font-mono"
        />
      </TabsContent>

      <TabsContent value="preview" className="mt-2">
        <div className="rounded-md border p-4 min-h-[500px]">
          {activeTab === "preview" ? (
            <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: value }} />
          ) : null}
        </div>
      </TabsContent>
    </Tabs>
  )
}
