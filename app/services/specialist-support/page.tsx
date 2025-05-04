import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import { Brain, Check, ArrowRight } from "lucide-react"

export default function SpecialistSupportPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Brain className="mr-1 h-4 w-4" />
            Specialist Support
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Expert Care for Adults with Special Needs
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Personalized support tailored to individual needs, delivered by our experienced team
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-12 md:gap-16">
        {/* Overview */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection direction="left">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Specialist Approach</h2>
              <p className="text-muted-foreground">
                At Harmony Haven, we specialize in providing high-quality, compassionate care for adults with special
                needs, including learning disabilities and autism spectrum disorder. Our approach is centered on
                understanding each individual's unique needs and preferences.
              </p>
              <p className="text-muted-foreground">
                Our team of experienced professionals works closely with residents, families, and healthcare
                professionals to develop personalized care plans that promote wellbeing, independence, and quality of
                life.
              </p>
              <p className="text-muted-foreground">
                We believe in a holistic approach to care, addressing physical, emotional, social, and psychological
                needs to ensure that each resident can live their life to the fullest.
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

        {/* Key Features */}
        <FadeInSection delay={0.3}>
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Our Specialist Support Includes</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Comprehensive care tailored to individual needs and preferences
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Personalized Care Plans",
              description:
                "Individually tailored care plans developed in collaboration with residents, families, and healthcare professionals.",
            },
            {
              title: "Autism Spectrum Support",
              description:
                "Specialized support for individuals with autism, including structured routines and sensory-friendly environments.",
            },
            {
              title: "Learning Disability Support",
              description:
                "Expert support for adults with learning disabilities, focusing on developing skills and promoting independence.",
            },
            {
              title: "Behavioral Support",
              description:
                "Positive behavioral support strategies to help residents manage challenging behaviors and develop coping skills.",
            },
            {
              title: "Communication Support",
              description:
                "Support with communication needs, including alternative communication methods where appropriate.",
            },
            {
              title: "Health Monitoring",
              description:
                "Regular monitoring of physical and mental health, with access to healthcare professionals as needed.",
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

        {/* Our Team */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mt-8">
          <FadeInSection direction="left">
            <Image
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Care team meeting"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Specialist Team</h2>
              <p className="text-muted-foreground">
                Our team of experienced professionals includes care staff with specialized training in learning
                disabilities and autism support, as well as access to healthcare professionals such as:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Registered nurses with experience in learning disability nursing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Behavioral support specialists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Occupational therapists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Speech and language therapists</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Psychologists</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                All our staff receive ongoing training to ensure they have the skills and knowledge to provide the
                highest standard of care.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="rounded-xl bg-primary/5 p-8 text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Discuss Your Specialist Care Needs</h2>
            <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
              We're here to answer your questions about our specialist support services and how we can meet your loved
              one's specific needs.
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
