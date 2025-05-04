import { FadeInSection } from "@/components/fade-in-section"

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms & Conditions</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            The terms and conditions governing the use of our website and services
          </p>
        </div>
      </FadeInSection>

      <div className="mx-auto max-w-3xl">
        <FadeInSection delay={0.2}>
          <div className="prose prose-green max-w-none dark:prose-invert">
            <p>
              Welcome to the Harmony Haven Care Home website. By accessing and using this website, you accept and agree
              to be bound by the terms and conditions set forth below.
            </p>

            <h2>Website Use</h2>
            <p>
              The content of the pages of this website is for your general information and use only. It is subject to
              change without notice. This website uses cookies to monitor browsing preferences. If you do allow cookies
              to be used, personal information may be stored by us for use by third parties.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are
              acknowledged on the website. Unauthorized use of this website may give rise to a claim for damages and/or
              be a criminal offense.
            </p>

            <h2>External Links</h2>
            <p>
              From time to time, this website may also include links to other websites. These links are provided for
              your convenience to provide further information. They do not signify that we endorse the website(s). We
              have no responsibility for the content of the linked website(s).
            </p>

            <h2>Service Information</h2>
            <p>
              While we endeavor to provide accurate and up-to-date information about our services on this website, we
              make no warranties or representations as to its accuracy. We recommend contacting us directly to discuss
              your specific care needs and to confirm current service availability and pricing.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Your use of any information or materials on this website is entirely at your own risk, for which we shall
              not be liable. It shall be your own responsibility to ensure that any products, services, or information
              available through this website meet your specific requirements.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the United
              Kingdom. Any disputes relating to these terms and conditions shall be subject to the exclusive
              jurisdiction of the courts of the United Kingdom.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. Changes will be posted on this
              page. Your continued use of the website after any changes indicates your acceptance of the modified terms
              and conditions.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these terms and conditions, please contact us at:
              <br />
              Email: info@harmonyhaven.co.uk
              <br />
              Phone: 01234 567890
              <br />
              Address: 123 Care Lane, Buckinghamshire, BU12 3AB
            </p>

            <p className="text-sm text-muted-foreground mt-8">Last updated: May 2, 2025</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
