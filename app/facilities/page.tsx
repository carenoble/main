import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bed, Utensils, Tv, TreesIcon as Tree, Dumbbell, Music } from "lucide-react"

export default function FacilitiesPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Facilities</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A warm, homely environment designed for comfort, safety, and wellbeing
          </p>
        </div>
      </FadeInSection>

      <div className="grid gap-12 md:gap-16">
        {/* Overview */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeInSection direction="left">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Our Environment
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">A Home Away From Home</h2>
              <p className="text-muted-foreground">
                At Harmony Haven, we've created a warm, welcoming environment that feels like home, not an institution.
                Our purpose-built facilities combine comfort with functionality, ensuring that residents can live safely
                and comfortably while maintaining their independence.
              </p>
              <p className="text-muted-foreground">
                Set in the beautiful Buckinghamshire countryside, our care home offers peaceful surroundings with
                accessible gardens and outdoor spaces for residents to enjoy.
              </p>
              <p className="text-muted-foreground">
                Every aspect of our facilities has been designed with our residents' needs in mind, from wheelchair
                accessibility throughout to specially adapted bathrooms and sensory spaces.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <Image
              src="https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Harmony Haven Care Home lounge area"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full aspect-[4/3]"
            />
          </FadeInSection>
        </div>

        {/* Facility Areas */}
        <FadeInSection delay={0.3}>
          <div className="space-y-6 text-center mt-8">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Explore Our Spaces
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">Facility Areas</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Take a tour of our different areas, each designed to enhance the quality of life for our residents
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <Tabs defaultValue="accommodation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="accommodation">Accommodation</TabsTrigger>
              <TabsTrigger value="dining">Dining</TabsTrigger>
              <TabsTrigger value="communal">Communal Areas</TabsTrigger>
              <TabsTrigger value="gardens">Gardens</TabsTrigger>
              <TabsTrigger value="activity">Activity Rooms</TabsTrigger>
              <TabsTrigger value="sensory">Sensory Room</TabsTrigger>
            </TabsList>
            <TabsContent value="accommodation" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1639813806535-b206d3dcf3b6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Resident bedroom"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full aspect-[4/3]"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Comfortable Private Rooms</h3>
                  <p className="text-muted-foreground">
                    Our spacious, private bedrooms provide a personal sanctuary for each resident. Each room is
                    tastefully decorated and can be personalized with residents' own belongings to create a familiar,
                    homely environment.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span>En-suite bathroom facilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span>Television and telephone points</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span>Adjustable profiling beds for comfort</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Bed className="h-5 w-5 text-primary" />
                      <span>Nurse call system for 24/7 assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="dining" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1679932890019-558bbc8818ab?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Dining area"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full aspect-[4/3]"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Welcoming Dining Areas</h3>
                  <p className="text-muted-foreground">
                    Our bright, spacious dining areas provide a pleasant environment for residents to enjoy nutritious,
                    home-cooked meals. We believe that mealtimes should be a social, enjoyable experience, and our
                    dining areas are designed to facilitate this.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span>Nutritious, home-cooked meals prepared on-site</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span>Special diets and preferences accommodated</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span>Private dining area for family visits</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Utensils className="h-5 w-5 text-primary" />
                      <span>Support available for those who need assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="communal" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Communal lounge"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full aspect-[4/3]"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Comfortable Communal Areas</h3>
                  <p className="text-muted-foreground">
                    Our communal lounges and sitting areas provide comfortable spaces for residents to socialize, relax,
                    and enjoy activities. These areas are designed to be welcoming and accessible for all residents.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span>Comfortable seating arranged to encourage conversation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span>Entertainment systems with accessible controls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span>Quiet areas for reading and relaxation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Tv className="h-5 w-5 text-primary" />
                      <span>Fully accessible for wheelchair users</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="gardens" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1673141390230-8b4a3c3152b1?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Garden area"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full aspect-[4/3]"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Beautiful Gardens</h3>
                  <p className="text-muted-foreground">
                    Our landscaped gardens provide a peaceful outdoor space for residents to enjoy fresh air, nature,
                    and outdoor activities. The gardens are fully accessible and include seating areas, raised planting
                    beds, and sensory elements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Tree className="h-5 w-5 text-primary" />
                      <span>Wheelchair-accessible pathways throughout</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Tree className="h-5 w-5 text-primary" />
                      <span>Raised planting beds for gardening activities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Tree className="h-5 w-5 text-primary" />
                      <span>Sensory garden with aromatic plants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Tree className="h-5 w-5 text-primary" />
                      <span>Covered seating areas for year-round enjoyment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="activity" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1663011578612-802cc9904bd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Activity room"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full aspect-[4/3]"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Dedicated Activity Spaces</h3>
                  <p className="text-muted-foreground">
                    Our purpose-designed activity rooms provide the perfect space for our varied activities program.
                    These rooms are equipped with a range of materials and equipment to support different interests and
                    abilities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Dumbbell className="h-5 w-5 text-primary" />
                      <span>Arts and crafts materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Dumbbell className="h-5 w-5 text-primary" />
                      <span>Games and puzzles for cognitive stimulation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Dumbbell className="h-5 w-5 text-primary" />
                      <span>Exercise equipment for gentle physical activity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Dumbbell className="h-5 w-5 text-primary" />
                      <span>Technology for digital activities and communication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="sensory" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Sensory room"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover w-full aspect-[4/3]"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Calming Sensory Room</h3>
                  <p className="text-muted-foreground">
                    Our specially designed sensory room provides a calming environment for residents who benefit from
                    sensory stimulation or who need a quiet space to relax. The room features adjustable lighting,
                    textures, sounds, and aromas.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Music className="h-5 w-5 text-primary" />
                      <span>Fiber optic lighting and projections</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="h-5 w-5 text-primary" />
                      <span>Tactile surfaces and objects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="h-5 w-5 text-primary" />
                      <span>Gentle sound system for music therapy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Music className="h-5 w-5 text-primary" />
                      <span>Aromatherapy diffusers for calming scents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={0.5}>
          <div className="rounded-xl bg-primary/5 p-8 text-center mt-8">
            <h2 className="text-2xl font-bold mb-4">Experience Our Facilities in Person</h2>
            <p className="text-muted-foreground mb-6 max-w-[600px] mx-auto">
              Photos can only tell part of the story. We invite you to visit Harmony Haven and experience our warm,
              welcoming environment for yourself.
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
