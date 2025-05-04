import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FadeInSection } from "@/components/fade-in-section"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            We're here to answer your questions and provide the information you need
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-12 md:gap-16">
        {/* Contact Info and Form */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <FadeInSection direction="left">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Whether you have questions about our services, availability, or would like to arrange a visit, our
                  friendly team is ready to help.
                </p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-muted-foreground">01234 567890</p>
                        <p className="text-sm text-muted-foreground mt-1">Available Monday to Friday, 9am to 5pm</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-muted-foreground">info@harmonyhaven.co.uk</p>
                        <p className="text-sm text-muted-foreground mt-1">We aim to respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Address</h3>
                        <p className="text-muted-foreground">123 Care Lane, Buckinghamshire, BU12 3AB</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Located in peaceful countryside with good transport links
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Visiting Hours</h3>
                        <p className="text-muted-foreground">Open for visits 7 days a week, 10am to 7pm</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          We recommend booking in advance for tours and assessments
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/book-visit" className="flex items-center justify-center gap-2">
                    Book a Visit <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is your message regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details of your inquiry"
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>

        {/* Map */}
        <FadeInSection delay={0.4}>
          <div className="space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Find Us</h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto">
                Located in the beautiful Buckinghamshire countryside, Harmony Haven is easily accessible by car and
                public transport
              </p>
            </div>

            <div className="aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Map location"
                width={1200}
                height={675}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>By Car</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Just 10 minutes from the M40 motorway. Free parking available on-site for visitors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>By Public Transport</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Regular bus services stop within a 5-minute walk. The nearest train station is 3 miles away.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our facilities are fully accessible. Please let us know if you have specific requirements for your
                    visit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </FadeInSection>

        {/* FAQ */}
        <FadeInSection delay={0.5}>
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto">
              Find quick answers to common questions about our care home
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your visiting hours?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We welcome visitors from 10am to 7pm, seven days a week. We recommend calling ahead if you're planning
                  to visit outside of these hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I arrange an assessment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contact us by phone or email to discuss your needs. We'll arrange an initial visit, followed by a
                  comprehensive assessment to determine how we can best support your loved one.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What funding options are available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We accept both private funding and local authority funding. Our team can provide guidance on funding
                  options and support you through the process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can residents bring personal belongings?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we encourage residents to personalize their rooms with their own belongings to create a familiar,
                  homely environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
