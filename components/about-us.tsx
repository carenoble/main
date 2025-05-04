import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "./fade-in-section"

export function AboutUs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
          <FadeInSection direction="left">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Providing Exceptional Care Since 2005
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                At Harmony Haven, we specialize in providing high-quality, compassionate care for adults with special
                needs, including learning disabilities and autism spectrum disorder.
              </p>
              <p className="max-w-[600px] text-muted-foreground">
                Our approach is centered on dignity, respect, and promoting independence. We believe in creating a warm,
                homely environment where residents can thrive and reach their full potential.
              </p>
              <p className="max-w-[600px] text-muted-foreground">
                Located in the beautiful countryside of Buckinghamshire, our care home offers a peaceful setting with
                easy access to local amenities and services.
              </p>
              <Button asChild className="mt-4">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.2}>
            <div className="flex items-center justify-center">
              <Image
                alt="Harmony Haven Care Home Garden"
                className="aspect-[4/3] overflow-hidden rounded-xl object-cover"
                height={400}
                width={600}
                src="https://images.unsplash.com/photo-1587556930720-58ec521056a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
