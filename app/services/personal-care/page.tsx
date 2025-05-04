import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import { Heart, Check, ArrowRight } from "lucide-react"

export default function PersonalCarePage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Heart className="mr-1 h-4 w-4" />
            Personal Care
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Dignified Assistance with Daily Living
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Compassionate support that respects privacy and promotes independence
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-12 md:gap-16">
        {/* Overview */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection direction="left">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Compassionate Personal Care</h2>
              <p className="text-muted-foreground">
                At Harmony Haven, we understand that personal care is about more than just meeting physical needs – it's
                about maintaining dignity, respecting privacy, and promoting independence wherever possible.
              </p>
              <p className="text-muted-foreground">
                Our approach to personal care is person-centered, meaning that we take the time to understand each
                resident's preferences, routines, and needs. We work at the resident's pace, encouraging independence
                while providing the right level of support.
              </p>
              <p className="text-muted-foreground">
                Our team is trained to provide personal care with sensitivity and respect, ensuring that residents feel
                comfortable and at ease at all times.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <Image
              src="https://images.unsplash.com/photo-1576765608866-5b51f8509665?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Care staff member assisting resident"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
        </div>

        {/* Key Features */}
        <FadeInSection delay={0.3}>
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Our Personal Care Services Include</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive support tailored to individual needs and preferences
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Bathing and Showering",
              description: "Assistance with bathing and showering, with respect for privacy and dignity at all times.",
            },
            {
              title: "Dressing and Grooming",
              description:
                "Support with dressing, grooming, and personal appearance, respecting individual preferences.",
            },
            {
              title: "Continence Care",
              description:
                "Sensitive support with continence needs, including toileting assistance and continence management.",
            },
            {
              title: "Medication Management",
              description: "Safe administration of medication, ensuring that prescriptions are followed correctly.",
            },
            {
              title: "Mobility Support",
              description:
                "Assistance with mobility, including transfers and positioning, using appropriate equipment where needed.",
            },
            {
              title: "Eating and Drinking",
              description:
                "Support with eating and drinking, including special diets and feeding assistance where required.",
            },
          ].map((feature, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)} direction="up">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>

        {/* Our Approach */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mt-8">
          <FadeInSection direction="left">
            <Image
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Care staff member with resident"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Approach to Personal Care</h2>
              <p className="text-muted-foreground">
                Our approach to personal care is guided by the following principles:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Respect for dignity and privacy at all times</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Promotion of independence and choice</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Person-centered care tailored to individual preferences</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Consistency in care delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Regular review and adaptation of care plans</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                We work closely with residents and their families to ensure that personal care is delivered in a way
                that meets individual needs and preferences.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="rounded-xl bg-primary/5 p-8 text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Discuss Your Personal Care Needs</h2>
            <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
              We're here to answer your questions about our personal care services and how we can support your loved one
              with their daily living needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-visit" className="flex items-center gap-2">
                  Book a Visit <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
