import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-10 px-4 py-10 md:px-6 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-2 lg:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold">Harmony Haven</span>
            </Link>
            <p className="text-muted-foreground mt-2">
              Providing outstanding specialist residential care for adults with special needs in Buckinghamshire. CQC
              rated "Outstanding".
            </p>
            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="space-y-3">
              <h3 className="text-base font-medium">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/facilities" className="text-sm text-muted-foreground hover:text-foreground">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-medium">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/specialist-support"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Specialist Support
                  </Link>
                </li>
                <li>
                  <Link href="/services/personal-care" className="text-sm text-muted-foreground hover:text-foreground">
                    Personal Care
                  </Link>
                </li>
                <li>
                  <Link href="/services/activities" className="text-sm text-muted-foreground hover:text-foreground">
                    Activities Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/skills-development"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Skills Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-medium">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground">
                    Accessibility
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Harmony Haven Care Home. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Created By CareNoble.co.uk
          </p>
        </div>
      </div>
    </footer>
  )
}
