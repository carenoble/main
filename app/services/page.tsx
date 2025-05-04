import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import { Brain, Heart, Utensils, Activity, BookOpen, Users, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Comprehensive, person-centered care tailored to individual needs
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-12 md:gap-16">
        {/* Overview */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection direction="left">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Approach</div>
              <h2 className="text-3xl font-bold tracking-tighter">Person-Centered Care</h2>
              <p className="text-muted-foreground">
                At Harmony Haven, we believe that every individual deserves care that's as unique as they are. Our
                person-centered approach means that we take the time to understand each resident's needs, preferences,
                and aspirations.
              </p>
              <p className="text-muted-foreground">
                We work closely with residents, families, and healthcare professionals to develop personalized care
                plans that promote wellbeing, independence, and quality of life.
              </p>
              <p className="text-muted-foreground">
                Our CQC "Outstanding" rating reflects our commitment to providing exceptional care that goes above and
                beyond standard requirements.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <Image
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Care staff member with resident"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
        </div>

        {/* Services */}
        <FadeInSection>
          <div className="space-y-6 text-center mt-8">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter">Comprehensive Care Services</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              We offer a range of specialist services designed to meet the diverse needs of adults with special needs,
              including learning disabilities and autism spectrum disorder.
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Brain className="h-10 w-10 text-primary" />,
              title: "Specialist Support",
              description:
                "Expert care for adults with learning disabilities and autism, tailored to individual needs.",
              link: "/services/specialist-support",
            },
            {
              icon: <Heart className="h-10 w-10 text-primary" />,
              title: "Personal Care",
              description: "Dignified assistance with daily living activities, promoting independence and wellbeing.",
              link: "/services/personal-care",
            },
            {
              icon: <Utensils className="h-10 w-10 text-primary" />,
              title: "Nutrition & Dining",
              description:
                "Delicious, nutritious meals catering to dietary needs and preferences, prepared by our in-house chefs.",
              link: "#",
            },
            {
              icon: <Activity className="h-10 w-10 text-primary" />,
              title: "Activities Program",
              description: "Engaging activities promoting wellbeing, enjoyment, and personal development.",
              link: "/services/activities",
            },
            {
              icon: <BookOpen className="h-10 w-10 text-primary" />,
              title: "Skills Development",
              description:
                "Supporting residents to learn and maintain life skills, promoting independence and confidence.",
              link: "/services/skills-development",
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "Community Integration",
              description: "Supporting participation in the wider community, building connections and experiences.",
              link: "#",
            },
          ].map((service, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)} direction="up">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <div className="rounded-full bg-primary/10 p-3 w-fit mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.link} className="flex items-center justify-center gap-2">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </FadeInSection>
          ))}
        </div>

        {/* Assessment Process */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mt-8">
          <FadeInSection direction="left">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Care assessment meeting"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Assessment Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Tailored to Individual Needs</h2>
              <p className="text-muted-foreground">
                Our comprehensive assessment process ensures that we understand each resident's unique needs,
                preferences, and goals. This allows us to create personalized care plans that deliver the right support
                at the right time.
              </p>
              <p className="text-muted-foreground">
                We regularly review and update these plans in collaboration with residents and their families, ensuring
                that our care evolves as needs change.
              </p>
              <p className="text-muted-foreground">
                Our multidisciplinary approach brings together expertise from various healthcare professionals to
                provide holistic, coordinated care.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="rounded-xl bg-primary/5 p-8 text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Discuss Your Care Needs</h2>
            <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
              We're here to answer your questions about our services and how we can support your loved one. Contact us
              today to discuss your specific care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/book-visit">Book a Visit</Link>
              </Button>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
