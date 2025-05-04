import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Award, Heart, Users, Clock, Shield, HomeIcon } from "lucide-react"
import { AnimatedTestimonials } from "@/components/animated-testimonials"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Harmony Haven</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Providing exceptional care for adults with special needs since 2005
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-12 md:gap-16">
        {/* Our Story */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection direction="left">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter">Our Journey of Care</h2>
              <p className="text-muted-foreground">
                Harmony Haven was founded in 2005 by Jane and Michael Thompson, who had a vision to create a truly
                person-centered care home after their own experiences caring for a family member with special needs.
              </p>
              <p className="text-muted-foreground">
                What began as a small residential home has grown into a respected care provider, known for our
                outstanding quality of care and specialist expertise. Throughout our growth, we've maintained our
                founding principles of dignity, respect, and compassionate support.
              </p>
              <p className="text-muted-foreground">
                In 2022, we were proud to receive an "Outstanding" rating from the Care Quality Commission, recognizing
                our commitment to excellence in every aspect of our service.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <Image
              src="https://images.unsplash.com/photo-1532461844054-cee312ab1ce2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Harmony Haven Care Home building"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
        </div>

        {/* Our Values */}
        <FadeInSection>
          <div className="space-y-6 text-center">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Values</div>
            <h2 className="text-3xl font-bold tracking-tighter">The Principles That Guide Us</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              At Harmony Haven, our values are at the heart of everything we do. They shape our approach to care and
              guide our interactions with residents, families, and each other.
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Heart className="h-10 w-10 text-primary" />,
              title: "Compassion",
              description:
                "We provide care with kindness, empathy and respect, recognizing each person's unique needs and preferences.",
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "Dignity",
              description:
                "We respect the dignity and rights of each individual, ensuring privacy and promoting independence.",
            },
            {
              icon: <Shield className="h-10 w-10 text-primary" />,
              title: "Safety",
              description: "We maintain a safe, secure environment where residents can feel comfortable and protected.",
            },
            {
              icon: <HomeIcon className="h-10 w-10 text-primary" />,
              title: "Homeliness",
              description: "We create a warm, welcoming atmosphere that feels like home, not an institution.",
            },
            {
              icon: <Award className="h-10 w-10 text-primary" />,
              title: "Excellence",
              description: "We strive for excellence in all aspects of our care, continuously improving our services.",
            },
            {
              icon: <Clock className="h-10 w-10 text-primary" />,
              title: "Reliability",
              description: "We provide consistent, dependable care that families and residents can count on.",
            },
          ].map((value, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)} direction="up">
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6 text-center">
                <div className="rounded-full bg-primary/10 p-3">{value.icon}</div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Our Team */}
        <FadeInSection>
          <div className="space-y-6 text-center mt-8">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter">Meet Our Dedicated Staff</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Our team of experienced, compassionate professionals is committed to providing the highest standard of
              care for our residents.
            </p>
          </div>
        </FadeInSection>

        <AnimatedTestimonials
          testimonials={[
            {
              name: "Dr. Sarah Johnson",
              designation: "Care Home Manager",
              src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              quote:
                "With over 20 years of experience in specialist care, Sarah leads our team with compassion and expertise.",
            },
            {
              name: "James Wilson",
              designation: "Head of Care",
              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              quote:
                "James oversees our care delivery, ensuring the highest standards are maintained at all times.",
            },
            {
              name: "Emily Chen",
              designation: "Activities Coordinator",
              src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              quote:
                "Emily creates engaging, meaningful activities that enhance our residents' wellbeing and enjoyment.",
            },
            {
              name: "Michael Patel",
              designation: "Specialist Support Worker",
              src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              quote:
                "Michael specializes in supporting adults with complex needs, with particular expertise in autism support.",
            },
          ]}
          autoplay={true}
        />

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="rounded-xl bg-primary/5 p-8 text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Come and See Us in Person</h2>
            <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
              The best way to understand what makes Harmony Haven special is to visit us. We'd be delighted to show you
              around and introduce you to our team.
            </p>
            <Button asChild size="lg">
              <Link href="/book-visit">Book a Visit</Link>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
