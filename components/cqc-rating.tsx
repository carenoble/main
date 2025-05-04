import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { FadeInSection } from "./fade-in-section"

export function CQCRating() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <FadeInSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">CQC Outstanding Rated</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're proud to have achieved the highest possible rating from the Care Quality Commission
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <FadeInSection delay={0.2} direction="left">
            <Card className="border-2 border-primary">
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <Award className="h-12 w-12 text-primary" />
                  <h3 className="text-2xl font-bold">Outstanding Care</h3>
                  <p className="text-muted-foreground">
                    Our "Outstanding" CQC rating reflects our commitment to providing exceptional care that goes above
                    and beyond standard requirements.
                  </p>
                  <Button asChild variant="outline">
                    <Link
                      href="https://www.cqc.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View CQC Report <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.4} direction="right">
            <div className="flex flex-col space-y-4">
              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Safe</h4>
                    <p className="text-muted-foreground">
                      Rated "Outstanding" for providing a safe environment for our residents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Effective</h4>
                    <p className="text-muted-foreground">
                      Our care approaches deliver outstanding outcomes for residents.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Caring</h4>
                    <p className="text-muted-foreground">
                      Our compassionate staff provide dignified, person-centered care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
