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
                &nbsp;Yes — limited, anonymous usage events (swipe interactions and content IDs seen) and a random app‑scoped identifier.
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
                <span class="font-medium text-slate-900">On‑Device vs Server:</span>
                &nbsp;Your saved history remains on device. We send anonymized swipe signals and a random app‑scoped ID to our service to avoid repeats and keep content fresh.
              </li>
            </ul>
            <p class="text-sm text-slate-500">
              If our practices change, we will update both this policy and our
              App Store privacy responses before publishing an update.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Data Categories & Purposes (Apple)</h2>
            <p class="text-base text-slate-700">
              For App Store Connect, Uben’s current disclosures are:
            </p>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>
                <span class="font-medium text-slate-900">Identifiers (Not Linked to You):</span>
                &nbsp;Random app‑scoped ID — used for <span class="italic">App Functionality</span> (deduping content). Not used for tracking.
              </li>
              <li>
                <span class="font-medium text-slate-900">Usage Data (Not Linked to You):</span>
                &nbsp;Product interaction (swipe events, content IDs seen) — used for <span class="italic">App Functionality</span> and may support non‑sensitive future <span class="italic">Product Personalization</span> within Uben only.
              </li>
            </ul>
            <p class="text-sm text-slate-500">
              If we add new data types, purposes, or SDKs, we will update these
              disclosures before release.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Information We Store</h2>
            <p class="text-base text-slate-700">
              We keep a history of the cards you have viewed so that you can
              revisit them later. This history is stored on your device. In
              addition, the app sends anonymized swipe events and content IDs
              you’ve seen, together with a random app‑scoped identifier, to our
              service strictly to prevent duplicate cards and maintain content
              freshness.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">Swipe Signals (Anonymous)</h2>
            <p class="text-base text-slate-700">
              To avoid showing duplicate cards and to support eventual
              non‑sensitive content recommendations, Uben records swipe signals
              and the IDs of cards you have seen. These are sent with a random
              app‑scoped identifier and are not linked to your identity. We do
              not use this data for advertising or cross‑app tracking.
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
            <h2 class="text-2xl font-semibold text-slate-900">No Accounts; Random App‑Scoped ID</h2>
            <p class="text-base text-slate-700">
              Uben does not require an account. We use a random identifier that
              is scoped to this app to associate anonymous swipe events. It is
              not based on your device identifier or Apple ID. We do not use
              the IDFA and do not fingerprint devices.
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
              On‑device history remains under your control. You can clear local
              data by using app settings (if available) or by uninstalling the
              app. Anonymous swipe events stored on our service are retained
              only as needed to support deduplication and content freshness. To
              request deletion or a reset of your random identifier, contact
              <a class="ml-1 underline decoration-slate-400 underline-offset-4" href="mailto:offthegully@gmail.com">support</a>.
              If you use Apple device backups or iCloud, Apple may store copies
              as part of those services; we do not access that data.
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
