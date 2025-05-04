import { Heart, Home, Shield, Users, Clock, Award } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Harmony Haven</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our specialist expertise and commitment to excellence make us the ideal choice for your loved ones
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 mt-12">
          {[
            {
              icon: <Award className="h-6 w-6 text-primary" />,
              title: "CQC Outstanding",
              description: "Recognized for our exceptional standards of care and service.",
            },
            {
              icon: <Heart className="h-6 w-6 text-primary" />,
              title: "Specialist Expertise",
              description: "Specialized in caring for adults with learning disabilities and autism.",
            },
            {
              icon: <Home className="h-6 w-6 text-primary" />,
              title: "Homely Environment",
              description: "A warm, comfortable setting that feels like home, not an institution.",
            },
            {
              icon: <Shield className="h-6 w-6 text-primary" />,
              title: "Safety First",
              description: "Comprehensive safety measures to ensure resident wellbeing.",
            },
            {
              icon: <Users className="h-6 w-6 text-primary" />,
              title: "Dedicated Staff",
              description: "Highly trained, compassionate team committed to personalized care.",
            },
            {
              icon: <Clock className="h-6 w-6 text-primary" />,
              title: "24/7 Support",
              description: "Round-the-clock care and assistance for all residents.",
            },
          ].map((feature, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)} direction="up">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-center text-muted-foreground">{feature.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
