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
            straightforward. This policy explains our data practices and is
            intended to align with Apple’s App Store Review Guidelines.
          </p>

          <div class="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 class="text-2xl font-semibold text-slate-900">App Store Privacy Summary</h2>
            <p class="text-base text-slate-700">
              The following summarizes how Uben handles data, as displayed on
              our App Store product page:
            </p>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>
                <span class="font-medium text-slate-900">Data Collected:</span>
                &nbsp;None. Uben does not collect data from your device.
              </li>
              <li>
                <span class="font-medium text-slate-900">Data Linked to You:</span>
                &nbsp;None.
              </li>
              <li>
                <span class="font-medium text-slate-900">Data Used to Track You:</span>
                &nbsp;None. Uben does not track you across apps or websites owned by other companies and does not use device advertising identifiers.
              </li>
              <li>
                <span class="font-medium text-slate-900">On‑Device Processing:</span>
                &nbsp;Viewing history and swipe signals are processed on your device and are not transmitted to our servers.
              </li>
            </ul>
            <p class="text-sm text-slate-500">
              If our practices change, we will update both this policy and our
              App Store privacy responses before publishing an update.
            </p>
          </div>

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
            <h2 class="text-2xl font-semibold text-slate-900">Swipe Signals (On‑Device Only)</h2>
            <p class="text-base text-slate-700">
              To avoid showing duplicate cards, Uben records swipe signals
              solely on your device. These signals are not tied to your
              identity, are not shared, and are not used for advertising or
              cross‑app tracking. They exist only to manage content flow locally.
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
            <h2 class="text-2xl font-semibold text-slate-900">No Accounts or Identifiers</h2>
            <p class="text-base text-slate-700">
              Uben does not require you to create an account and does not use
              persistent identifiers linked to you. We do not use the IDFA, do
              not fingerprint devices, and do not link app data to your
              identity.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Third‑Party SDKs</h2>
            <p class="text-base text-slate-700">
              As of {LAST_UPDATED}, Uben does not include third‑party analytics
              or advertising SDKs. If this changes, we will disclose the
              integration and purposes and update the App Store privacy
              responses accordingly before release.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Data Retention & Deletion</h2>
            <p class="text-base text-slate-700">
              Viewing history and swipe signals persist only on your device and
              remain under your control. You can clear them in the app settings
              or by uninstalling the app. If you use Apple device backups or
              iCloud, Apple may store copies as part of those services; we do
              not access that data.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Security</h2>
            <p class="text-base text-slate-700">
              We rely on iOS system protections for local data storage. Because
              Uben does not transmit personal data to our servers, there is no
              remote data set for us to secure or retain.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Children’s Privacy</h2>
            <p class="text-base text-slate-700">
              Uben does not collect personal data, and it is not directed to
              children under 13. If our practices or audience change, we will
              update this policy and our App Store disclosures.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Changes to This Policy</h2>
            <p class="text-base text-slate-700">
              We may update this policy to reflect product changes, legal
              requirements, or guidance from Apple. Material changes will be
              posted here and reflected in our App Store privacy responses prior
              to release.
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
