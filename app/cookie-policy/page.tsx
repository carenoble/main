import { FadeInSection } from "@/components/fade-in-section"

export default function CookiePolicyPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeInSection>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cookie Policy</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">How we use cookies on our website</p>
        </div>
      </FadeInSection>

      <div className="mx-auto max-w-3xl">
        <FadeInSection delay={0.2}>
          <div className="prose prose-green max-w-none dark:prose-invert">
            <p>
              This Cookie Policy explains what cookies are and how Harmony Haven Care Home uses them on our website. We
              encourage you to read this policy to understand what cookies are, how we use them, and how you can manage
              them.
            </p>

            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the website owners.
              Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device when you go
              offline, while session cookies are deleted as soon as you close your web browser.
            </p>

            <h2>How We Use Cookies</h2>
            <p>
              We use cookies for several reasons. Some cookies are necessary for technical reasons for our website to
              operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to
              track and target the interests of our users to enhance the experience on our website. Third parties may
              also serve cookies through our website for advertising, analytics, and other purposes.
            </p>

            <h2>Types of Cookies We Use</h2>
            <p>The types of cookies used on our website can be classified as follows:</p>
            <ul>
              <li>
                <strong>Strictly Necessary Cookies:</strong> These cookies are essential for you to browse the website
                and use its features, such as accessing secure areas of the site. These cookies don't collect
                information about you that could be used for marketing or remembering where you've been on the internet.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies collect information about how you use our website,
                like which pages you visited and which links you clicked on. None of this information can be used to
                identify you. It is all aggregated and, therefore, anonymized. Their sole purpose is to improve website
                functions.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies allow the website to remember choices you make (such
                as your user name, language, or the region you are in) and provide enhanced, more personal features.
              </li>
              <li>
                <strong>Targeting/Advertising Cookies:</strong> These cookies are used to deliver advertisements more
                relevant to you and your interests. They are also used to limit the number of times you see an
                advertisement as well as help measure the effectiveness of the advertising campaign.
              </li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit
              the ability of websites to set cookies, you may worsen your overall user experience, since it will no
              longer be personalized to you. It may also stop you from saving customized settings like login
              information.
            </p>

            <h2>Cookie Preferences</h2>
            <p>
              When you first visit our website, you will be presented with a cookie banner that allows you to accept or
              decline non-essential cookies. You can change your cookie preferences at any time by clicking on the
              "Cookie Settings" link in the footer of our website.
            </p>

            <h2>Changes to This Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the effective date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:
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
