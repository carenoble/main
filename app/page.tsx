import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { CQCRating } from "@/components/cqc-rating"
import { AboutUs } from "@/components/about-us"
import { OurServices } from "@/components/our-services"
import { ContactCTA } from "@/components/contact-cta"
import { ImageCTA } from "@/components/image-cta"
import { RecentPosts } from "@/components/recent-posts"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-24">
      <Hero />
      <CQCRating />
      <AboutUs />
      <Features />
      <OurServices />
      <ImageCTA />
      <Testimonials />
      <ContactCTA />
      <RecentPosts />
    </div>
  )
}
