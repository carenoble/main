import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MapPin, Phone, Mail } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

export function ContactCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visit Harmony Haven</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We'd love to show you around our home and answer any questions you may have
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          <FadeInSection delay={0.2} direction="left">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Book a Visit</CardTitle>
                <CardDescription>Schedule a personal tour of our facilities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <span>Available 7 days a week, 9am-5pm</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Located in Buckinghamshire, with easy access from major routes</span>
                </div>
                <p className="mt-2">
                  Our team will be happy to show you around and discuss how we can meet your loved one's specific needs.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href="/book-visit">Book Your Visit Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.4} direction="right">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Get in Touch</CardTitle>
                <CardDescription>We're here to answer your questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>01234 567890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@harmonyhaven.co.uk</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Care Lane, Buckinghamshire, BU12 3AB</span>
                </div>
                <p className="mt-2">
                  Whether you have questions about our services, availability, or funding options, our friendly team is
                  ready to help.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardFooter>
            </Card>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
