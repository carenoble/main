import { FadeInSection } from "@/components/fade-in-section"

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </FadeInSection>

      <div className="mx-auto max-w-3xl">
        <FadeInSection delay={0.2}>
          <div className="prose prose-green max-w-none dark:prose-invert">
            <p>
              At Harmony Haven Care Home, we are committed to protecting and respecting your privacy. This Privacy
              Policy explains how we collect, use, and safeguard your personal information when you use our website or
              services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Name and contact details (including email address, phone number, and address)</li>
              <li>Information about your loved one's care needs</li>
              <li>Information provided when you contact us or provide feedback</li>
              <li>Technical information about your visits to our website</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li>To provide and improve our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To send you information about our services that may be of interest to you</li>
              <li>To comply with legal and regulatory requirements</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We are committed to ensuring that your information is secure. We have implemented suitable physical,
              electronic, and managerial procedures to safeguard and secure the information we collect.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies.
              Most web browsers automatically accept cookies, but you can usually modify your browser settings to
              decline cookies if you prefer.
            </p>

            <h2>Third-Party Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties
              unless we provide users with advance notice. This does not include website hosting partners and other
              parties who assist us in operating our website, conducting our business, or serving our users, so long as
              those parties agree to keep this information confidential.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of any inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Request transfer of your personal information</li>
              <li>Withdraw consent where we rely on consent to process your personal information</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@harmonyhaven.co.uk
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
