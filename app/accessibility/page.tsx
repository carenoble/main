import { FadeInSection } from "@/components/fade-in-section"

export default function AccessibilityPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Accessibility Statement</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Our commitment to making our website accessible to all users
          </p>
        </div>
      </FadeInSection>

      <div className="mx-auto max-w-3xl">
        <FadeInSection delay={0.2}>
          <div className="prose prose-green max-w-none dark:prose-invert">
            <p>
              Harmony Haven Care Home is committed to ensuring digital accessibility for people with disabilities. We
              are continually improving the user experience for everyone, and applying the relevant accessibility
              standards.
            </p>

            <h2>Conformance Status</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to
              improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level
              AA, and Level AAA. Harmony Haven Care Home's website is partially conformant with WCAG 2.1 level AA.
              Partially conformant means that some parts of the content do not fully conform to the accessibility
              standard.
            </p>

            <h2>Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>
            <ul>
              <li>Semantic HTML markup</li>
              <li>ARIA landmarks to identify regions of a page</li>
              <li>Alt text for all images</li>
              <li>Descriptive link text</li>
              <li>Sufficient color contrast</li>
              <li>Resizable text without loss of content or functionality</li>
              <li>Keyboard accessibility</li>
              <li>Clear and consistent navigation</li>
            </ul>

            <h2>Limitations and Alternatives</h2>
            <p>
              Despite our best efforts to ensure accessibility of Harmony Haven Care Home's website, there may be some
              limitations. Below is a description of known limitations, and potential solutions. Please contact us if
              you observe an issue not listed below.
            </p>
            <p>Known limitations for this website:</p>
            <ul>
              <li>
                <strong>PDF Documents:</strong> Some older PDF documents may not be fully accessible. We are working to
                fix these issues. Please contact us if you experience difficulties with specific documents.
              </li>
              <li>
                <strong>Third-party Content:</strong> Some content provided by third parties may not be fully
                accessible. We are working with our partners to improve this.
              </li>
            </ul>

            <h2>Feedback</h2>
            <p>
              We welcome your feedback on the accessibility of Harmony Haven Care Home's website. Please let us know if
              you encounter accessibility barriers:
            </p>
            <ul>
              <li>Phone: 01234 567890</li>
              <li>E-mail: accessibility@harmonyhaven.co.uk</li>
              <li>Postal address: 123 Care Lane, Buckinghamshire, BU12 3AB</li>
            </ul>
            <p>We try to respond to feedback within 3 business days.</p>

            <h2>Assessment Approach</h2>
            <p>Harmony Haven Care Home assessed the accessibility of this website by the following approaches:</p>
            <ul>
              <li>Self-evaluation: The website was evaluated internally by our web development team.</li>
              <li>External evaluation: We periodically engage external accessibility experts to review our website.</li>
            </ul>

            <h2>Additional Accessibility Resources</h2>
            <p>
              If you need information on this website in a different format like accessible PDF, large print, easy read,
              audio recording, or braille, please contact us:
            </p>
            <ul>
              <li>Phone: 01234 567890</li>
              <li>E-mail: accessibility@harmonyhaven.co.uk</li>
              <li>Postal address: 123 Care Lane, Buckinghamshire, BU12 3AB</li>
            </ul>
            <p>We'll consider your request and get back to you within 5 business days.</p>

            <p className="text-sm text-muted-foreground mt-8">Last updated: May 2, 2025</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
