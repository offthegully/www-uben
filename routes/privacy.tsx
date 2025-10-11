import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

const LAST_UPDATED = "Oct 11, 2025";

export default define.page(function PrivacyPolicy() {
  return (
    <div class="min-h-screen bg-white text-slate-900">
      <Head>
        <title>Privacy Policy | Uben</title>
        <meta
          name="description"
          content="Learn how the Uben iOS app handles your data with transparency and care."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="mx-auto max-w-4xl px-6 py-16">
        <header class="mb-12">
          <h1 class="text-4xl font-bold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p class="mt-4 text-base text-slate-600">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <section class="space-y-8">
          <p class="text-base text-slate-700">
            Uben is an iOS application designed to help you learn with
            intention. We prioritize your privacy and keep our data practices
            straightforward. This policy explains what information we collect
            and how we handle it.
          </p>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">
              Information We Store
            </h2>
            <p class="text-base text-slate-700">
              We keep a history of the cards you have viewed so that you can
              revisit them later. This history is stored solely on your device
              and never leaves it unless you back up your device through Apple’s
              own services.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">
              Anonymous Swipe Tracking
            </h2>
            <p class="text-base text-slate-700">
              To improve your experience and avoid showing duplicate cards, we
              track swipe interactions within the app. These interactions are
              processed anonymously and are not tied to your identity or any
              personal profile. They are used exclusively to manage the flow of
              content on your device.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">
              Data Sharing
            </h2>
            <p class="text-base text-slate-700">
              We do not sell, rent, or share your personal data. Because Uben
              does not collect personally identifiable information, there is
              nothing to share or disclose with third parties.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">
              Your Controls
            </h2>
            <p class="text-base text-slate-700">
              You can reset your learning history at any time from within the
              app settings. Doing so clears the locally stored history and swipe
              data immediately.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">
              Contact Us
            </h2>
            <p class="text-base text-slate-700">
              If you have any questions about this privacy policy or how Uben
              handles data, reach out at{" "}
              <a
                class="text-slate-900 underline decoration-slate-400 underline-offset-4 hover:text-slate-700"
                href="mailto:offthegully@gmail.com"
              >
                offthegully@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
});
