import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import { Activity, Check, ArrowRight, Music, Palette, BookOpen, Dumbbell, Users, TreesIcon as Tree } from "lucide-react"

export default function ActivitiesPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <Activity className="mr-1 h-4 w-4" />
            Activities Program
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Engaging Activities for Wellbeing and Enjoyment
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A diverse range of activities designed to stimulate, entertain, and enhance quality of life
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-12 md:gap-16">
        {/* Overview */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection direction="left">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Meaningful Activities for All</h2>
              <p className="text-muted-foreground">
                At Harmony Haven, we believe that engaging in meaningful activities is essential for wellbeing and
                quality of life. Our comprehensive activities program is designed to cater to a wide range of interests,
                abilities, and preferences.
              </p>
              <p className="text-muted-foreground">
                Led by our dedicated Activities Coordinator, our program offers a balance of physical, creative, social,
                and cognitive activities. We encourage residents to participate in activities they enjoy, while also
                providing opportunities to try new experiences and develop new skills.
              </p>
              <p className="text-muted-foreground">
                All activities are adapted to ensure they are accessible and enjoyable for residents with different
                abilities and needs. We regularly review and update our program based on resident feedback and
                interests.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <Image
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Residents enjoying activities"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
        </div>

        {/* Activity Categories */}
        <FadeInSection delay={0.3}>
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Our Activities Program</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Explore the different types of activities we offer to enrich the lives of our residents
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Music className="h-10 w-10 text-primary" />,
              title: "Creative Arts",
              description:
                "Music therapy, arts and crafts, painting, and other creative activities that encourage self-expression and enjoyment.",
              activities: ["Music therapy sessions", "Arts and crafts workshops", "Painting classes", "Drama groups"],
            },
            {
              icon: <Dumbbell className="h-10 w-10 text-primary" />,
              title: "Physical Activities",
              description:
                "Gentle exercise, movement to music, seated yoga, and other physical activities adapted to different abilities.",
              activities: ["Chair-based exercises", "Gentle yoga", "Movement to music", "Walking club"],
            },
            {
              icon: <BookOpen className="h-10 w-10 text-primary" />,
              title: "Cognitive Stimulation",
              description:
                "Quizzes, puzzles, reminiscence therapy, and other activities that stimulate the mind and memory.",
              activities: ["Memory games", "Quizzes and puzzles", "Reminiscence therapy", "Reading groups"],
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "Social Activities",
              description:
                "Group discussions, celebrations, games, and other activities that promote social interaction and connection.",
              activities: ["Coffee mornings", "Birthday celebrations", "Board games", "Movie afternoons"],
            },
            {
              icon: <Tree className="h-10 w-10 text-primary" />,
              title: "Outdoor Activities",
              description:
                "Gardening, nature walks, outdoor games, and other activities that connect residents with the natural environment.",
              activities: ["Gardening club", "Nature walks", "Bird watching", "Outdoor games"],
            },
            {
              icon: <Palette className="h-10 w-10 text-primary" />,
              title: "Sensory Activities",
              description:
                "Aromatherapy, sensory gardens, tactile activities, and other experiences that stimulate the senses.",
              activities: ["Sensory garden visits", "Aromatherapy sessions", "Tactile art", "Food tasting"],
            },
          ].map((category, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)} direction="up">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-3">{category.icon}</div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                    <ul className="space-y-2 text-left w-full">
                      {category.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center mt-8">
          <FadeInSection direction="left">
            <Image
              src="https://images.unsplash.com/photo-1573497491765-55d5e4564001?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Residents enjoying group activity"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Benefits of Our Activities Program</h2>
              <p className="text-muted-foreground">
                Our activities program is designed to provide a range of benefits for our residents:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Improved physical health and mobility</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Enhanced mental wellbeing and cognitive function</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Increased social interaction and reduced isolation</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Opportunities for self-expression and creativity</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Sense of purpose and achievement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Fun and enjoyment, enhancing quality of life</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                We regularly evaluate the impact of our activities program to ensure it continues to meet the needs and
                preferences of our residents.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="rounded-xl bg-primary/5 p-8 text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Experience Our Activities Program</h2>
            <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
              We invite you to visit Harmony Haven and see our activities program in action. Contact us today to arrange
              a visit or to discuss how our program could benefit your loved one.
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
