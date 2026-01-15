import { Head } from "fresh/runtime";
import { define } from "../utils.ts";

const LAST_UPDATED = "Oct 11, 2025";

export default define.page(function PrivacyPolicy() {
  return (
    <div class="min-h-screen bg-white text-slate-900">
      <Head>
        <title>Privacy Policy | Fakta</title>
        <meta
          name="description"
          content="Learn how the Fakta iOS app handles your data with transparency and care."
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

        <section class="space-y-10">
          <p class="text-base text-slate-700">
            Fakta is an iOS application designed to help you learn with
            intention. We prioritize your privacy and keep our data practices
            straightforward. This policy explains our data practices and is
            intended to align with Apple’s App Store Review Guidelines.
          </p>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">1. Scope</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>
                This policy explains how our iOS application Fakta and our website at [your domain] collect, use, and share information.
              </li>
              <li>
                It covers app users and website visitors. If a term differs between the app and website, we state it explicitly.
              </li>
            </ul>
          </div>

          <div class="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 class="text-2xl font-semibold text-slate-900">2. Summary For App Store Review</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>
                <span class="font-medium text-slate-900">Data Collection:</span>
                &nbsp;We collect a random app‑scoped identifier, usage events (impressions/swipes, likes/bookmarks), and search terms. We do not collect contact info, precise location, or sensitive categories.
              </li>
              <li>
                <span class="font-medium text-slate-900">Data Linking:</span>
                &nbsp;Not linked to your identity (no login/account). Events are associated with a pseudonymous device ID.
              </li>
              <li>
                <span class="font-medium text-slate-900">Tracking Across Apps:</span>
                &nbsp;No cross‑app/website tracking. We do not use IDFA and do not request ATT.
              </li>
              <li>
                <span class="font-medium text-slate-900">Third‑Party SDKs:</span>
                &nbsp;None for analytics/ads. We use Supabase (managed Postgres/Storage/functions) as backend infrastructure.
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">3. Information We Collect</h2>
            <ul class="list-disc space-y-3 pl-6 text-base text-slate-700">
              <li>
                <span class="font-medium text-slate-900">Device Identifier (pseudonymous):</span>
                &nbsp;A random UUID stored in iOS Keychain to prevent duplicates, reduce abuse, and enable session continuity. Not your Apple ID/IDFA; used only within our service and may persist across reinstalls.
              </li>
              <li>
                <span class="font-medium text-slate-900">Usage Data:</span>
                &nbsp;Article impressions and reactions (viewed, liked, bookmarked, dismissed), timestamps, minimal context to operate feeds and avoid repeats, and search terms to return relevant results.
              </li>
              <li>
                <span class="font-medium text-slate-900">App Preferences & Local History:</span>
                &nbsp;Theme preference and local session history (viewed items), likes, and bookmarks stored on‑device. You can clear this in‑app.
              </li>
              <li>
                <span class="font-medium text-slate-900">Network/Log Data:</span>
                &nbsp;Standard network information (e.g., IP address, device type) may be processed by hosting/infrastructure partners to deliver content and secure the service.
              </li>
              <li>
                <span class="font-medium text-slate-900">No Sensitive/Intrusive Data:</span>
                &nbsp;We do not request or collect precise location, contacts, photos, camera, microphone, health, or motion data. We do not collect advertising identifiers (IDFA) and do not show personalized ads.
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">4. How We Use Information</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>
                <span class="font-medium text-slate-900">Provide and Improve the Service:</span>
                &nbsp;Deliver content and images; protect content links; prevent duplicate recommendations and keep a fresh feed (e.g., via aggregated impressions).
              </li>
              <li>
                <span class="font-medium text-slate-900">Search:</span>
                &nbsp;Handle your search queries to return relevant articles.
              </li>
              <li>
                <span class="font-medium text-slate-900">Personalization (Limited and Non‑Tracking):</span>
                &nbsp;Arrange content suggestions and avoid immediate repeats using pseudonymous interaction summaries. No cross‑app profiles, and we do not buy/sell audience segments.
              </li>
              <li>
                <span class="font-medium text-slate-900">Security and Abuse Prevention:</span>
                &nbsp;Use pseudonymous device identifiers and basic instrumentation to prevent abuse and maintain service quality.
              </li>
              <li>
                <span class="font-medium text-slate-900">Legal Compliance:</span>
                &nbsp;Comply with law and enforce our terms and policies.
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">5. Legal Bases (EEA/UK)</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li><span class="font-medium text-slate-900">Performance of a contract:</span>&nbsp;Provide the app and core features you request.</li>
              <li><span class="font-medium text-slate-900">Legitimate interests:</span>&nbsp;Secure the service, measure quality (aggregated), prevent abuse, and understand usage to improve content delivery.</li>
              <li><span class="font-medium text-slate-900">Consent:</span>&nbsp;Not required for current behaviors because we do not perform cross‑app tracking or collect sensitive categories. If this changes, we will request consent where required.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">6. Sharing and Disclosure</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>
                <span class="font-medium text-slate-900">Service Providers (Processors):</span>
                &nbsp;Supabase (database, storage, serverless functions) processes data on our behalf; some requests include a pseudonymous header (e.g., x‑device‑id) to deduplicate and secure content delivery. Apple and platform/CDN providers also process network‑level data to deliver the app and content.
              </li>
              <li>
                <span class="font-medium text-slate-900">No Sale or Advertising Sharing:</span>
                &nbsp;We do not sell personal information. We do not share data for cross‑context behavioral advertising.
              </li>
              <li>
                <span class="font-medium text-slate-900">Legal/Compliance:</span>
                &nbsp;We may disclose information if required by law, court order, or to protect rights, safety, or security.
              </li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">7. Data Retention</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li><span class="font-medium text-slate-900">On‑Device:</span>&nbsp;Likes, bookmarks, and viewed history remain on your device until you clear them in the app or uninstall the app.</li>
              <li><span class="font-medium text-slate-900">Server‑Side:</span>&nbsp;Pseudonymous impression and search logs are retained only as long as needed to operate and improve the service and protect integrity. We may aggregate or delete old records.</li>
            </ul>
            <p class="text-base text-slate-700">To request deletion (or reset) of records keyed to your device ID, contact <a class="underline decoration-slate-400 underline-offset-4" href="mailto:offthegully@gmail.com">offthegully@gmail.com</a> and provide your in‑app device identifier.</p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">8. Security</h2>
            <p class="text-base text-slate-700">
              We use reasonable technical and organizational measures to protect data in transit and at rest, including TLS for transport and access controls on our infrastructure. No method of transmission or storage is completely secure.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">9. Your Choices and Controls</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li><span class="font-medium text-slate-900">Clear Local Data:</span>&nbsp;Use in‑app controls to clear viewing history and related likes. You can also remove bookmarks individually.</li>
              <li><span class="font-medium text-slate-900">Resetting the App:</span>&nbsp;Uninstalling the app removes on‑device data. The pseudonymous device ID is stored in Keychain and may persist across reinstalls; contact us to disassociate server‑side logs.</li>
              <li><span class="font-medium text-slate-900">Do Not Track/ATT:</span>&nbsp;We do not engage in cross‑app tracking and do not request App Tracking Transparency permission.</li>
            </ul>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">10. Your Rights</h2>
            <p class="text-base text-slate-700">
              Depending on where you live, you may have rights to access, correct, delete, or export your information, or to object/restrict certain processing. Because we do not have accounts or direct identity information, requests may require you to provide the device identifier from the app so we can locate and delete server‑side records. To exercise rights, contact <a class="underline decoration-slate-400 underline-offset-4" href="mailto:offthegully@gmail.com">offthegully@gmail.com</a>.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">11. Children’s Privacy</h2>
            <p class="text-base text-slate-700">
              The app is not directed to children under 13 (or under the age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child provided data, contact us so we can delete it.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">12. International Data Transfers</h2>
            <p class="text-base text-slate-700">
              We may process and store data in the United States and other countries. Where required, we use appropriate safeguards for cross‑border transfers (e.g., Standard Contractual Clauses).
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">13. Changes To This Policy</h2>
            <p class="text-base text-slate-700">
              We may update this policy to reflect changes to our practices. We will post the updated version with a new effective date. If we make material changes, we will provide additional notice in the app or on our website.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-2xl font-semibold text-slate-900">14. Contact</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>Email: <a class="underline decoration-slate-400 underline-offset-4" href="mailto:offthegully@gmail.com">offthegully@gmail.com</a></li>
              <li>Address: [Company name and address]</li>
            </ul>
          </div>

          <div class="space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 class="text-2xl font-semibold text-slate-900">App Store Privacy “Nutrition” Mapping</h2>
            <ul class="list-disc space-y-2 pl-6 text-base text-slate-700">
              <li>
                <span class="font-medium text-slate-900">Data Not Linked to You:</span>
                &nbsp;Identifiers — Device ID (random, app‑scoped; used only within our service). Usage Data — Product Interaction (impressions, likes/bookmarks), and Search History/Queries.
              </li>
              <li>
                <span class="font-medium text-slate-900">Not Collected:</span>
                &nbsp;Contact Info, Health & Fitness, Financial Info, Precise Location, Contacts, User Content uploads, Browsing History outside the app, Sensitive Info.
              </li>
              <li>
                <span class="font-medium text-slate-900">Tracking:</span>
                &nbsp;Not performed. We do not link collected data to third‑party data for advertising, share data with data brokers, or track users across apps or websites.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
});
