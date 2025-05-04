'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export default function BookVisitPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [time, setTime] = useState<string>("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    const res = await fetch("/api/book-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        date: date ? date.toISOString().split("T")[0] : "",
        time,
        message,
      }),
    })
    setLoading(false)
    if (res.ok) setSuccess(true)
  }

  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col items-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Book a Visit</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          We'd love to show you around Harmony Haven and discuss how we can meet your loved one's needs.
        </p>
      </div>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Visit Request Form</CardTitle>
            <CardDescription>Please fill out the form below and we'll contact you to confirm your visit.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Enter your first name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Enter your last name" required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter your phone number" required />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="preferred-date">Preferred visit date</Label>
                <div className="flex">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button type="button" variant={"outline"} className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}> 
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? date.toLocaleDateString() : <span>Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferred-time">Preferred time</Label>
                <Select value={time} onValueChange={setTime} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12pm - 3pm)</SelectItem>
                    <SelectItem value="evening">Evening (3pm - 5pm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Additional information</Label>
              <Textarea
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Please share any specific requirements or questions you have"
                className="min-h-[120px]"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit Request"}</Button>
          </CardFooter>
          {success && <div className="p-4 text-green-600 text-center">Your request has been sent successfully!</div>}
        </form>
      </Card>
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Prefer to speak with someone directly? Call us at <span className="font-medium">01234 567890</span>
        </p>
      </div>
    </div>
  )
}
