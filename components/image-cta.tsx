"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "./fade-in-section"

export function ImageCTA() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://plus.unsplash.com/premium_photo-1672760403439-bf51a26c1ae6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Residents enjoying activities"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/70 z-10" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 py-8 md:py-12">
        <FadeInSection direction="up">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4">
            Experience Our Care Firsthand
          </h2>
          <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8 max-w-2xl mx-auto">
            Join us for a personal tour and discover how our specialist care and supportive environment can make a difference in your loved one's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-100 font-semibold">
              Book a Tour
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold">
              Contact Us
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
} 