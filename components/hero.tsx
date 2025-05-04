"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Award, Heart, Home } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Harmony Haven Care Home Exterior",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1681883882438-84077fb862f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Residents enjoying activities in our garden",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1667680774655-903aa950e739?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Our comfortable and homely living spaces",
  },
]

const keyFeatures = [
  {
    icon: <Award className="h-5 w-5" />,
    text: "CQC Outstanding Rated",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    text: "Specialist Care Expertise",
  },
  {
    icon: <Home className="h-5 w-5" />,
    text: "Warm, Homely Environment",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, isHovering, nextSlide])

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-16 md:py-20 lg:py-24"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Content Column */}
          <div className="flex flex-col justify-center space-y-6 lg:col-span-5 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Award className="mr-1 h-4 w-4" />
                CQC Outstanding Rated
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
                Exceptional Care in a Warm, Homely Environment
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Providing compassionate, specialist care for adults with special needs in Buckinghamshire.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-sm"
                >
                  <span className="mr-1 text-primary">{feature.icon}</span>
                  {feature.text}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="font-semibold">
                <Link href="/book-visit">Book a Visit</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>

          {/* Image Carousel Column */}
          <div className="relative lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative h-[300px] w-full overflow-hidden rounded-xl sm:h-[400px] md:h-[450px] lg:h-[500px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={heroImages[currentSlide].src || "/placeholder.svg"}
                    alt={heroImages[currentSlide].alt}
                    fill
                    className="object-cover"
                    priority={currentSlide === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-medium">{heroImages[currentSlide].alt}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="rounded-full bg-white/80 p-2 text-gray-800 backdrop-blur-sm transition-colors hover:bg-white"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="rounded-full bg-white/80 p-2 text-gray-800 backdrop-blur-sm transition-colors hover:bg-white"
                  aria-label="Next slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={cn(
                      "h-2 w-2 rounded-full bg-white/50 transition-all",
                      currentSlide === index && "w-6 bg-white",
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={currentSlide === index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 hidden w-64 rounded-lg border bg-background p-4 shadow-lg md:block lg:-bottom-8 lg:-right-8 lg:w-72"
            >
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">CQC Outstanding</h3>
                  <p className="text-sm text-muted-foreground">
                    Recognized for our exceptional standards of care and service
                  </p>
                  <Link href="/about" className="mt-2 inline-flex text-sm font-medium text-primary hover:underline">
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
    </section>
  )
}
