import { asset, Head } from "fresh/runtime";
import { define } from "../utils.ts";
const ACCENT_HEX = "#59B0AD";

export default define.page(function Home() {
  return (
    <div class="min-h-screen bg-white text-slate-900">
      <Head>
        <title>Uben - Learn Without The Doom Scroll</title>
        <meta
          name="description"
          content="Uben is the iOS app cured for doom scrolling: swipe through curated cards, absorb fresh knowledge, and feel good about your screen time."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="border-b border-slate-200">
        <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <div class="flex items-center gap-3">
            <span class="text-xl font-semibold tracking-tight">Uben</span>
          </div>
          <nav class="hidden items-center gap-8 text-sm font-medium sm:flex">
            <a class="text-slate-600 hover:text-slate-900" href="#content">
              Content Promise
            </a>
            <a class="text-slate-600 hover:text-slate-900" href="#contact">
              Contact
            </a>
            <a class="text-slate-600 hover:text-slate-900" href="/privacy">
              Privacy
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section class="relative overflow-hidden">
          <div class="mx-auto grid max-w-5xl items-center gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="space-y-8">
              <div
                class="inline-flex rounded-full px-4 py-1 text-sm font-medium"
                style={{ backgroundColor: ACCENT_HEX, color: "#0F172A" }}
              >
                iOS | Learn with intention
              </div>
              <h1 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Swipe smarter. Uben turns idle scrolling into daily learning.
              </h1>
              <p class="max-w-xl text-lg text-slate-600">
                Discover concise educational cards. Glide through topics, save
                what matters, and make your screen time feel purposeful, anytime
                and anywhere.
              </p>
              <div class="flex flex-wrap items-center gap-4">
                <a
                  class="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                  style={{ backgroundColor: ACCENT_HEX }}
                  href="#"
                >
                  Download on the App Store
                </a>
              </div>
            </div>
            <div class="relative flex justify-center">
              <div class="relative w-full max-w-[11.5rem] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.16)] sm:max-w-[13rem] lg:max-w-[14.5rem]">
                <div class="pointer-events-none absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900/80" />
                <img
                  alt="Screenshot of the Uben iOS app interface"
                  class="w-full object-cover"
                  src={asset("/discover_page.png")}
                />
                <div class="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white" />
              </div>
            </div>
          </div>
        </section>

        <section id="content" class="bg-slate-50">
          <div class="mx-auto max-w-5xl px-6 py-20">
            <h2 class="text-3xl font-semibold tracking-tight text-slate-900">
              Content you can trust
            </h2>
            <p class="mt-4 max-w-2xl text-slate-600">
              Every card originates from Wikipedia references and is reviewed by
              editors. No generative filler, just well sourced knowledge
              delivered calmly.
            </p>
            <div class="mt-12 grid gap-8 sm:grid-cols-2">
              {[{
                title: "No AI guesswork",
                description:
                  "We avoid synthetic copy and cite the original Wikipedia article on every card.",
              }, {
                title: "Expert curation",
                description:
                  "We curate high-quality content across diverse topics, ensuring each card is informative and engaging.",
              }, {
                title: "Optional summaries",
                description:
                  "Toggle concise takeaways generated from the real source data; they are not shown by default.",
              }, {
                title: "Private by design",
                description:
                  "History stays on your device. We send anonymized swipe signals with a random ID to avoid repeats and keep content fresh — never for ads or cross‑app tracking.",
              }].map((feature) => (
                <div
                  class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-transparent hover:shadow-lg"
                  style={{ borderColor: ACCENT_HEX }}
                >
                  <h3 class="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p class="mt-3 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" class="bg-slate-900">
          <div class="mx-auto max-w-5xl px-6 py-16 text-center text-slate-200">
            <h2 class="text-3xl font-semibold">Need support?</h2>
            <p class="mt-4 text-slate-400">
              We're here to help you stay inspired. Reach out anytime and our
              team will get back within one business day.
            </p>
            <a
              class="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: ACCENT_HEX, color: "#0F172A" }}
              href="mailto:offthegully@gmail.com"
            >
              offthegully@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer class="border-t border-slate-200 bg-white">
        <div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-500 sm:flex-row">
          <span>
            Copyright {new Date().getFullYear()}{" "}
            OffTheGully. All rights reserved.
          </span>
          <div class="flex items-center gap-6">
            <a class="hover:text-slate-700" href="#content">Content Promise</a>
            <a class="hover:text-slate-700" href="#contact">Support</a>
            <a class="hover:text-slate-700" href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
});
