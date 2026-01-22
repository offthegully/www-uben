import { asset, Head } from "fresh/runtime";
import { define } from "../utils.ts";

const HIGHLIGHTS = [
  "Wikipedia sourced",
  "Curated daily drops",
  "No ads or tracking",
];

const FEATURES = [
  {
    title: "Source-linked learning",
    description:
      "Every card points to the original Wikipedia article so you can go deeper.",
  },
  {
    title: "Editors in the loop",
    description:
      "Humans review and refine each card to keep facts clear, calm, and true.",
  },
  {
    title: "Privacy by design",
    description:
      "History stays on your device and swipe signals stay anonymous. No profiles.",
  },
  {
    title: "Summaries on demand",
    description:
      "Optional takeaways help you skim fast when you want the quick gist.",
  },
];

const SESSION_STEPS = [
  {
    title: "Pick a vibe",
    description:
      "Jump into history, science, culture, or let Fakta mix a daily blend.",
  },
  {
    title: "Swipe and save",
    description: "Learn in under a minute and save what sparks your curiosity.",
  },
  {
    title: "Return smarter",
    description:
      "Come back to a short list of facts that actually stick with you.",
  },
];

export default define.page(function Home() {
  return (
    <div class="min-h-screen bg-white text-[var(--fakta-ink)]">
      <Head>
        <title>Fakta | Learn Without the Doom Scroll</title>
        <meta
          name="description"
          content="Fakta is the iOS app curated for mindful scrolling: swipe through sourced cards, absorb fresh knowledge, and feel good about your screen time."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a class="flex items-center gap-3 text-lg font-semibold" href="/">
            <span class="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--fakta-accent-soft)] text-[var(--fakta-ink)]">
              F
            </span>
            <span class="tracking-tight">Fakta</span>
          </a>
          <nav class="hidden items-center gap-8 text-sm font-semibold sm:flex">
            <a
              class="text-[var(--fakta-ink-soft)] transition hover:text-[var(--fakta-ink)]"
              href="#content"
            >
              Content Promise
            </a>
            <a
              class="text-[var(--fakta-ink-soft)] transition hover:text-[var(--fakta-ink)]"
              href="#contact"
            >
              Contact
            </a>
            <a
              class="text-[var(--fakta-ink-soft)] transition hover:text-[var(--fakta-ink)]"
              href="/privacy"
            >
              Privacy
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section class="relative overflow-hidden fakta-hero">
          <div class="pointer-events-none absolute inset-0 fakta-grid opacity-40" />
          <div class="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-[var(--fakta-accent-glow)] blur-3xl" />
          <div class="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[var(--fakta-sun-soft)] blur-3xl" />
          <div class="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div class="space-y-8">
              <div class="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fakta-ink-soft)] backdrop-blur">
                Learn without the doom scroll
              </div>
              <h1 class="font-display text-4xl tracking-tight text-[var(--fakta-ink)] sm:text-5xl lg:text-6xl">
                A calmer feed for curious minds.
              </h1>
              <p class="max-w-xl text-lg text-[var(--fakta-ink-soft)]">
                Fakta turns idle scrolling into intentional learning with
                curated, source linked cards you can actually finish.
              </p>
              <div class="flex flex-wrap items-center gap-4">
                <a
                  class="rounded-full bg-[var(--fakta-accent)] px-6 py-3 text-sm font-semibold text-[var(--fakta-ink)] shadow-[0_18px_40px_rgba(91,183,179,0.35)] transition hover:-translate-y-0.5"
                  href="#"
                >
                  Download on the App Store
                </a>
                <a
                  class="rounded-full border border-white/80 bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--fakta-ink)] shadow-sm backdrop-blur transition hover:-translate-y-0.5"
                  href="#content"
                >
                  See the content promise
                </a>
              </div>
              <div class="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--fakta-ink-soft)]">
                {HIGHLIGHTS.map((item) => (
                  <span class="flex items-center gap-2" key={item}>
                    <span class="h-2 w-2 rounded-full bg-[var(--fakta-accent)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div class="relative flex justify-center">
              <div class="absolute -left-6 top-6 hidden w-44 rounded-2xl border border-white/70 bg-white/80 p-4 text-xs text-[var(--fakta-ink-soft)] shadow-xl backdrop-blur sm:block">
                <p class="font-semibold text-[var(--fakta-ink)]">
                  Today in 45 seconds
                </p>
                <p class="mt-2">
                  Why volcanoes glow even after they stop erupting.
                </p>
              </div>
              <div class="absolute -right-6 bottom-8 hidden w-44 rounded-2xl border border-white/70 bg-white/80 p-4 text-xs text-[var(--fakta-ink-soft)] shadow-xl backdrop-blur sm:block">
                <p class="font-semibold text-[var(--fakta-ink)]">
                  Saved for later
                </p>
                <p class="mt-2">
                  A quick tour of how the Mississippi reshaped the US.
                </p>
              </div>
              <div class="relative w-full max-w-[13.5rem] overflow-hidden rounded-[2.2rem] border border-white/80 bg-white shadow-[0_30px_70px_rgba(11,31,36,0.2)] sm:max-w-[15rem]">
                <div class="pointer-events-none absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-[var(--fakta-ink)]/80" />
                <img
                  alt="Screenshot of the Fakta iOS app interface"
                  class="w-full object-cover"
                  src={asset("/discover_page.png")}
                />
                <div class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white" />
              </div>
            </div>
          </div>
        </section>

        <section id="content" class="bg-[var(--fakta-mist)]">
          <div class="mx-auto max-w-6xl px-6 py-20">
            <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2 class="font-display text-3xl tracking-tight text-[var(--fakta-ink)] sm:text-4xl">
                  Content you can trust.
                </h2>
                <p class="mt-4 max-w-2xl text-[var(--fakta-ink-soft)]">
                  Every card is sourced from Wikipedia and reviewed by editors.
                  No filler, just calm, confident knowledge delivered in
                  minutes.
                </p>
              </div>
              <div class="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fakta-ink-soft)] shadow-sm backdrop-blur">
                Built for focus
              </div>
            </div>
            <div class="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div class="grid gap-6 sm:grid-cols-2">
                {FEATURES.map((feature) => (
                  <div
                    class="group rounded-3xl border border-white/70 bg-white/80 p-7 shadow-[0_20px_45px_rgba(11,31,36,0.08)] backdrop-blur transition hover:-translate-y-1"
                    key={feature.title}
                  >
                    <h3 class="text-lg font-semibold text-[var(--fakta-ink)]">
                      {feature.title}
                    </h3>
                    <p class="mt-3 text-sm text-[var(--fakta-ink-soft)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
              <div class="rounded-3xl border border-white/70 bg-white/80 p-8 shadow-[0_30px_70px_rgba(11,31,36,0.12)] backdrop-blur">
                <h3 class="text-xl font-semibold text-[var(--fakta-ink)]">
                  A five-minute session
                </h3>
                <p class="mt-3 text-sm text-[var(--fakta-ink-soft)]">
                  Short reads, zero pressure, and a simple ritual you can keep.
                </p>
                <ul class="mt-6 space-y-4 text-sm text-[var(--fakta-ink-soft)]">
                  {SESSION_STEPS.map((step, index) => (
                    <li class="flex gap-4" key={step.title}>
                      <span class="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--fakta-accent-soft)] text-sm font-semibold text-[var(--fakta-ink)]">
                        {index + 1}
                      </span>
                      <div>
                        <p class="font-semibold text-[var(--fakta-ink)]">
                          {step.title}
                        </p>
                        <p class="mt-1">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div class="mt-8 rounded-2xl bg-[var(--fakta-cream)] p-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--fakta-ink-soft)]">
                  Built for calm, not clicks
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          class="relative overflow-hidden bg-[var(--fakta-ink)]"
        >
          <div class="pointer-events-none absolute inset-0 fakta-grid opacity-20" />
          <div class="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-[var(--fakta-accent-glow)] blur-3xl" />
          <div class="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-[var(--fakta-sun-soft)] blur-3xl" />
          <div class="mx-auto max-w-5xl px-6 py-20 text-center text-white">
            <h2 class="font-display text-3xl sm:text-4xl">
              Need support or early access?
            </h2>
            <p class="mt-4 text-white/70">
              We love hearing from curious learners.
            </p>
            <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                class="inline-flex items-center justify-center rounded-full bg-[var(--fakta-accent)] px-6 py-3 text-sm font-semibold text-[var(--fakta-ink)] shadow-[0_18px_40px_rgba(91,183,179,0.35)] transition hover:-translate-y-0.5"
                href="mailto:offthegully@gmail.com"
              >
                offthegully@gmail.com
              </a>
              <span class="text-xs uppercase tracking-[0.2em] text-white/60">
                Always human, never bots
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer class="border-t border-slate-200/70 bg-white">
        <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-[var(--fakta-ink-soft)] sm:flex-row">
          <span>
            Copyright {new Date().getFullYear()}{" "}
            OffTheGully. All rights reserved.
          </span>
          <div class="flex items-center gap-6">
            <a class="transition hover:text-[var(--fakta-ink)]" href="#content">
              Content Promise
            </a>
            <a class="transition hover:text-[var(--fakta-ink)]" href="#contact">
              Support
            </a>
            <a class="transition hover:text-[var(--fakta-ink)]" href="/privacy">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
});
