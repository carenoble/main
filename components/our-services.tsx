import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Utensils, Activity, BookOpen, Users } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

export function OurServices() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Specialist Services</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive care tailored to individual needs and preferences
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            {
              icon: <Brain className="h-6 w-6 text-primary mb-2" />,
              title: "Specialist Support",
              subtitle: "Expert care for adults with learning disabilities and autism",
              description:
                "Our highly trained staff provide specialized support tailored to each resident's unique needs, focusing on promoting independence and quality of life.",
            },
            {
              icon: <Heart className="h-6 w-6 text-primary mb-2" />,
              title: "Personal Care",
              subtitle: "Dignified assistance with daily living activities",
              description:
                "We provide compassionate support with personal care needs while respecting privacy and promoting independence wherever possible.",
            },
            {
              icon: <Utensils className="h-6 w-6 text-primary mb-2" />,
              title: "Nutrition & Dining",
              subtitle: "Delicious, nutritious meals catering to dietary needs",
              description:
                "Our in-house chefs prepare tasty, balanced meals that accommodate special dietary requirements and personal preferences.",
            },
            {
              icon: <Activity className="h-6 w-6 text-primary mb-2" />,
              title: "Activities Program",
              subtitle: "Engaging activities promoting wellbeing and enjoyment",
              description:
                "We offer a diverse range of activities designed to stimulate, entertain, and enhance the physical and mental wellbeing of our residents.",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-primary mb-2" />,
              title: "Skills Development",
              subtitle: "Supporting residents to learn and maintain skills",
              description:
                "We work with residents to develop and maintain life skills, promoting confidence, independence, and a sense of achievement.",
            },
            {
              icon: <Users className="h-6 w-6 text-primary mb-2" />,
              title: "Community Integration",
              subtitle: "Supporting participation in the wider community",
              description:
                "We facilitate access to community activities and services, helping residents to build connections and enjoy experiences beyond the care home.",
            },
          ].map((service, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)} direction="up">
              <Card>
                <CardHeader className="pb-2">
                  {service.icon}
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
