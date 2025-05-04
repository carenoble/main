import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"
import { BookOpen, Check, ArrowRight } from "lucide-react"

export default function SkillsDevelopmentPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <BookOpen className="mr-1 h-4 w-4" />
            Skills Development
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Supporting Residents to Learn and Maintain Skills
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Promoting independence, confidence, and a sense of achievement
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-12 md:gap-16">
        {/* Overview */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection direction="left">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Empowering Through Skills</h2>
              <p className="text-muted-foreground">
                At Harmony Haven, we believe that developing and maintaining skills is essential for promoting
                independence, building confidence, and enhancing quality of life. Our skills development program is
                designed to support residents in learning new skills and maintaining existing ones.
              </p>
              <p className="text-muted-foreground">
                We take a person-centered approach, working with each resident to identify their goals and interests,
                and providing the right level of support to help them achieve success. We celebrate every achievement,
                no matter how small, recognizing the importance of progress and personal growth.
              </p>
              <p className="text-muted-foreground">
                Our skilled staff provide guidance, encouragement, and practical support, creating a safe and supportive
                environment where residents can learn and practice skills at their own pace.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <Image
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Resident learning new skills"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
        </div>

        {/* Skill Areas */}
        <FadeInSection delay={0.3}>
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Skills Development Areas</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              We support residents to develop and maintain skills in a variety of areas
            </p>
          </div>
        </FadeInSection>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Daily Living Skills",
              description:
                "Support with developing and maintaining skills for everyday tasks such as personal care, meal preparation, and household tasks.",
              skills: [
                "Personal hygiene routines",
                "Meal preparation",
                "Laundry and clothing care",
                "Household cleaning",
              ],
            },
            {
              title: "Communication Skills",
              description:
                "Support with developing effective communication skills, including verbal communication, non-verbal communication, and use of communication aids.",
              skills: [
                "Conversation skills",
                "Listening and understanding",
                "Using communication aids",
                "Digital communication",
              ],
            },
            {
              title: "Social Skills",
              description:
                "Support with developing and maintaining skills for positive social interactions and relationships.",
              skills: [
                "Turn-taking and sharing",
                "Understanding social cues",
                "Building friendships",
                "Conflict resolution",
              ],
            },
            {
              title: "Money Management",
              description:
                "Support with developing skills for managing money, including budgeting, shopping, and understanding the value of money.",
              skills: ["Recognizing coins and notes", "Simple budgeting", "Shopping skills", "Understanding bills"],
            },
            {
              title: "Travel and Community Skills",
              description:
                "Support with developing skills for accessing the community and using public transport safely.",
              skills: [
                "Road safety awareness",
                "Using public transport",
                "Community orientation",
                "Accessing local facilities",
              ],
            },
            {
              title: "Technology Skills",
              description:
                "Support with developing skills for using technology, including computers, tablets, and smartphones.",
              skills: [
                "Basic computer skills",
                "Using tablets and smartphones",
                "Internet safety",
                "Video calling with family",
              ],
            },
          ].map((area, index) => (
            <FadeInSection key={index} delay={0.1 * (index + 1)} direction="up">
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-xl font-bold">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                    <ul className="space-y-2">
                      {area.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
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
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Staff member supporting resident with skills"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Approach to Skills Development</h2>
              <p className="text-muted-foreground">
                Our approach to skills development is guided by the following principles:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Person-centered planning based on individual goals and interests</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Breaking tasks down into manageable steps</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Providing the right level of support - not too much, not too little</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Consistent practice and reinforcement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>Celebrating achievements and progress</span>
                </li>
              </ul>
              <p className="text-muted-foreground">
                We work closely with residents, families, and healthcare professionals to develop personalized skills
                development plans that reflect individual needs, preferences, and aspirations.
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="rounded-xl bg-primary/5 p-8 text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Discover Our Skills Development Program</h2>
            <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
              We're here to support your loved one in developing and maintaining skills that enhance their independence
              and quality of life. Contact us today to learn more about our approach.
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
