import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Families Say</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from families who have entrusted us with the care of their loved ones
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {[
            {
              quote:
                "The care and attention my brother receives at Harmony Haven is exceptional. The staff truly understand his needs and have helped him flourish in ways we never thought possible.",
              author: "Sarah T., Sister of Resident",
            },
            {
              quote:
                "Finding Harmony Haven was a blessing. The homely environment and dedicated staff have made such a positive difference to our daughter's life. We have complete peace of mind knowing she is in such good hands.",
              author: "Michael & Jane P., Parents of Resident",
            },
            {
              quote:
                "As a social worker, I've placed several clients at Harmony Haven and have always been impressed by their outstanding level of care and the genuine warmth of their approach.",
              author: "David L., Local Authority Social Worker",
            },
          ].map((testimonial, index) => (
            <FadeInSection key={index} delay={0.2 * (index + 1)} direction="up">
              <Card className="border-0 bg-muted/50">
                <CardHeader>
                  <Quote className="h-8 w-8 text-primary/60" />
                </CardHeader>
                <CardContent className="text-lg">"{testimonial.quote}"</CardContent>
                <CardFooter className="text-sm text-muted-foreground">— {testimonial.author}</CardFooter>
              </Card>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
