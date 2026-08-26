import { createFileRoute, Link } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { seo } from "@/lib/seo";
import {
  ActionLink,
  Container,
  Kicker,
  MetaRow,
  Notice,
  Reveal,
  Section,
  SectionHeading,
  TechPanel,
} from "@/components/site/ui";
import heroNight from "@/assets/hero-night-drive.jpg";
import dashboardImg from "@/assets/dashboard-hotspots.jpg";
import evolutionImg from "@/assets/evolution-detail.jpg";
import cabinWide from "@/assets/cabin-wide.jpg";
import roadDusk from "@/assets/road-dusk.jpg";
import speakerDetail from "@/assets/speaker-detail.jpg";
import steeringControls from "@/assets/steering-controls.jpg";
import connectivityConsole from "@/assets/connectivity-console.jpg";
import aerialNight from "@/assets/aerial-night-road.jpg";
import interiorGolden from "@/assets/interior-golden.jpg";
import roadtripCabin from "@/assets/roadtrip-cabin.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Veeren Drive Connect — Connected In-Car Audio Guidance",
      description:
        "Independent guidance, information and assistance for in-car audio, infotainment and connected listening. Understand your vehicle's audio options clearly.",
      path: "/",
    }),
  component: HomePage,
});

/* ------------------------------------------------------------------ data */

const HOTSPOTS = [
  {
    id: "satellite",
    label: "Satellite Radio",
    x: 26,
    y: 42,
    body: "Satellite radio is a subscription-based broadcast service delivered over a dedicated receiver or an app connection. Whether a vehicle can receive it depends on factory hardware, the head unit and the service you choose. We help you work out which of those applies to your car.",
  },
  {
    id: "music",
    label: "Music",
    x: 44,
    y: 47,
    body: "Streaming music in a vehicle usually runs through a phone projection layer, built-in apps, or Bluetooth. Each route behaves differently for audio quality, controls and data usage — worth knowing before you settle on one.",
  },
  {
    id: "talk",
    label: "Talk",
    x: 60,
    y: 44,
    body: "Talk formats are voice-forward and far more sensitive to cabin noise and speaker balance than music. Small equaliser and fade adjustments often make a bigger difference here than volume does.",
  },
  {
    id: "news",
    label: "News",
    x: 72,
    y: 52,
    body: "News listening tends to be short-form and interrupt-driven. Preset placement, steering-wheel shortcuts and source memory matter more than raw audio performance.",
  },
  {
    id: "sports",
    label: "Sports",
    x: 36,
    y: 62,
    body: "Live sports depends on coverage and rights, which vary by service and region. Understanding what a given subscription actually includes is usually the first thing to clarify.",
  },
  {
    id: "entertainment",
    label: "Entertainment",
    x: 52,
    y: 66,
    body: "Comedy, interviews and general entertainment channels sit between music and talk. They benefit from a flatter equaliser and a moderate centre balance so voices stay intelligible.",
  },
  {
    id: "podcasts",
    label: "Podcasts",
    x: 66,
    y: 70,
    body: "Podcast playback is typically app-driven from a phone. Resume behaviour, chapter skipping and metadata display vary widely between infotainment systems.",
  },
  {
    id: "connectivity",
    label: "Connectivity",
    x: 82,
    y: 34,
    body: "Bluetooth, USB data, wireless projection and embedded modems are four different things. Knowing which your vehicle has explains most audio behaviour people find confusing.",
  },
] as const;

const CATEGORIES = [
  {
    n: "01",
    title: "Music",
    image: speakerDetail,
    alt: "Close-up of a car door speaker grille with metallic mesh",
    text: "Streaming, stored libraries and broadcast — and how each reaches your speakers.",
  },
  {
    n: "02",
    title: "News",
    image: connectivityConsole,
    alt: "Smartphone connected on a car centre console with USB and wireless charging",
    text: "Short-form listening built around presets, shortcuts and reliable source recall.",
  },
  {
    n: "03",
    title: "Sports",
    image: aerialNight,
    alt: "Aerial view of a car crossing a wet city road at night",
    text: "Live coverage varies by service and region. Clarity on what's included comes first.",
  },
  {
    n: "04",
    title: "Talk",
    image: steeringControls,
    alt: "Driver's hand resting on a steering wheel with audio control buttons",
    text: "Voice-forward content that rewards careful balance, fade and equaliser settings.",
  },
  {
    n: "05",
    title: "Entertainment",
    image: interiorGolden,
    alt: "View from inside a car at sunset with lit dashboard gauges",
    text: "Comedy, interviews and mixed formats for the middle of a long drive.",
  },
  {
    n: "06",
    title: "Podcasts",
    image: roadtripCabin,
    alt: "Desert highway seen through a car windshield in late afternoon light",
    text: "App-driven playback, and how different infotainment systems handle resume and skip.",
  },
  {
    n: "07",
    title: "In-Car Audio",
    image: dashboardImg,
    alt: "Modern car dashboard with an infotainment screen showing an audio waveform",
    text: "Speakers, amplification, head units and the settings that shape all of the above.",
  },
];

const DRIVE_POINTS = [
  { x: 22, y: 30, title: "Commute", text: "Short, repeated trips where presets and quick source switching matter most." },
  { x: 70, y: 24, title: "Road Trip", text: "Long stretches where coverage, offline content and battery planning come into play." },
  { x: 34, y: 68, title: "Weekend", text: "Unhurried driving where sound quality and speaker balance are worth tuning." },
  { x: 78, y: 62, title: "Family", text: "Shared cabins, rear-seat listening and volume balance across seating rows." },
  { x: 52, y: 46, title: "Late Night", text: "Low-volume clarity, dimmed displays and voice-forward content selection." },
];

const STAGES = [
  {
    n: "01",
    title: "Tell us what you need",
    text: "Describe what you're trying to listen to, or what isn't working. No account, no obligation, no scripted upsell.",
  },
  {
    n: "02",
    title: "We understand your vehicle",
    text: "Vehicle type, model year, head unit and connectivity all change the answer. We ask about those before suggesting anything.",
  },
  {
    n: "03",
    title: "Explore the options",
    text: "We lay out the realistic routes — built-in hardware, phone projection, subscription services or aftermarket — with trade-offs stated plainly.",
  },
  {
    n: "04",
    title: "Get clear guidance",
    text: "You leave with an understanding of what applies to your car and what to check next. Decisions stay entirely with you.",
  },
];

const INSIGHTS = [
  {
    n: "01",
    kicker: "Connectivity",
    title: "Bluetooth, USB, wireless projection and embedded data — what's actually different",
    text: "Four connection types, four sets of behaviour. Understanding which one your car uses explains most of the audio quirks drivers report.",
    image: connectivityConsole,
    alt: "Smartphone charging on a wireless pad in a car centre console",
    to: "/vehicle-audio",
  },
  {
    n: "02",
    kicker: "Listening",
    title: "Why voice content needs different settings than music",
    text: "Cabin noise sits in the same frequency range as speech. A flatter equaliser and a centred fade usually beat turning the volume up.",
    image: speakerDetail,
    alt: "Detail of a dark car speaker cone and grille",
    to: "/audio-experience",
  },
  {
    n: "03",
    kicker: "Subscriptions",
    title: "Questions worth asking before you commit to any audio subscription",
    text: "Coverage, hardware requirements, trial terms, renewal behaviour and cancellation steps — all things to confirm directly with the provider.",
    image: garageFallback(),
    alt: "Dark car parked under a single overhead light in a concrete garage",
    to: "/faq",
  },
];

function garageFallback() {
  return aerialNight;
}

/* ------------------------------------------------------------------ page */

function HomePage() {
  return (
    <>
      <Hero />
      <Evolution />
      <DashboardExperience />
      <CategoryGallery />
      <BuiltAround />
      <AssistanceTimeline />
      <CompatibilityExplorer />
      <WhyVeeren />
      <Insights />
      <ClosingCTA />
    </>
  );
}

/* ------------------------------------------------------------------ hero */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <motion.div
        style={reduce ? {} : { y, opacity: fade }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={heroNight}
          alt="View across a dark car dashboard at night with city light trails through the windshield"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover object-[60%_center]"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/40"
      />
      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? {} : { opacity: [0, 0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 4 }}
        className="absolute inset-x-0 top-1/3 -z-10 h-40 bg-gradient-to-r from-transparent via-brand/20 to-transparent blur-3xl"
      />

      <Container className="pb-16 pt-40 sm:pb-24">
        <Reveal>
          <Kicker index="[ 01 ]">Connected Audio Experience</Kicker>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-7 max-w-5xl font-display text-[3rem] font-extrabold leading-[0.92] sm:text-7xl lg:text-[6.5rem]">
            Your Drive.
            <br />
            <span className="text-muted-foreground">Your</span> Soundtrack.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Veeren Drive Connect is an independent information and assistance resource for
            connected in-car audio. We help drivers understand infotainment, satellite and
            streaming options — including SiriusXM-related questions — without sales pressure and
            without pretending to be anyone we're not.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={PHONE_HREF} variant="outline">Call {PHONE_DISPLAY}</ActionLink>
            <ActionLink to="/services">Explore Audio Services</ActionLink>
          </div>
        </Reveal>
        <Reveal delay={0.4} className="mt-14">
          <MetaRow
            items={[
              ["Discipline", "Connected in-car audio"],
              ["Role", "Information & assistance"],
              ["Coverage", "Guidance, not sales"],
              ["Affiliation", "Independent"],
            ]}
          />
        </Reveal>
        <div className="mt-12 flex items-center gap-3 text-muted-foreground">
          <motion.span
            aria-hidden="true"
            animate={reduce ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
          <span className="label-mono">Scroll to continue</span>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- evolution */

function Evolution() {
  return (
    <Section className="border-t border-border">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <SectionHeading
              kicker="Evolution"
              index="[ 02 ]"
              title={
                <>
                  The Drive Has
                  <br />
                  Changed.
                </>
              }
              intro="The dashboard stopped being a radio a long time ago. It became a connected surface — a place where broadcast, streaming, phone projection and vehicle software all meet, often awkwardly."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-10 space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most confusion about in-car audio isn't really about audio. It's about which layer is
              doing the work: the head unit, the phone, the subscription, or the vehicle's own data
              connection. Once that's clear, the rest usually follows.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Our role is to make that map legible. We explain what a system can do, what it can't,
              and where a question genuinely belongs with a manufacturer or a service provider
              instead of with us.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-4">
          <figure className="relative">
            <img
              src={evolutionImg}
              alt="A hand adjusting a metal control dial on a modern car dashboard"
              width={1200}
              height={1500}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-center"
            />
            <figcaption className="label-mono mt-4 text-muted-foreground">
              Fig. 01 — Physical control, digital source
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.25} className="lg:col-span-3">
          <dl className="divide-y divide-border border-y border-border">
            {[
              ["Broadcast", "Terrestrial and satellite reception handled by dedicated hardware."],
              ["Projection", "Phone-driven interfaces mirrored onto the vehicle display."],
              ["Embedded", "Software and apps that live in the vehicle itself."],
              ["Bluetooth", "The universal fallback — convenient, and the most limited."],
            ].map(([k, v]) => (
              <div key={k} className="py-5">
                <dt className="font-display text-sm font-bold uppercase tracking-[0.14em]">{k}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}

/* --------------------------------------------------- dashboard hotspots */

function DashboardExperience() {
  const [active, setActive] = useState<string>(HOTSPOTS[0].id);
  const current = HOTSPOTS.find((h) => h.id === active) ?? HOTSPOTS[0];
  const reduce = useReducedMotion();

  return (
    <Section id="experience" className="border-t border-border bg-surface/30">
      <Reveal>
        <SectionHeading
          kicker="Interactive"
          index="[ 03 ]"
          title="The Vehicle Audio Experience"
          intro="Select a point on the dashboard to read what that part of connected listening actually involves. Use Tab and Enter, or arrow keys, to move between points."
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <Reveal delay={0.1} className="lg:col-span-8">
          <div className="relative overflow-hidden border border-border">
            <img
              src={dashboardImg}
              alt="Modern car dashboard and infotainment touchscreen displaying an audio waveform"
              width={1600}
              height={1008}
              loading="lazy"
              className="w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-background/35"
            />
            <div role="group" aria-label="Audio experience points">
              {HOTSPOTS.map((h, i) => {
                const isActive = h.id === active;
                return (
                  <button
                    key={h.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-label={`${h.label} — show details`}
                    onClick={() => setActive(h.id)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
                        e.preventDefault();
                        setActive(HOTSPOTS[(i + 1) % HOTSPOTS.length]!.id);
                      }
                      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
                        e.preventDefault();
                        setActive(HOTSPOTS[(i - 1 + HOTSPOTS.length) % HOTSPOTS.length]!.id);
                      }
                    }}
                    style={{ left: `${h.x}%`, top: `${h.y}%` }}
                    className="absolute flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  >
                    <span
                      aria-hidden="true"
                      className={`block h-3 w-3 rotate-45 border transition-all duration-300 ${
                        isActive
                          ? "scale-125 border-brand bg-brand"
                          : "border-foreground/70 bg-background/70 hover:border-brand"
                      }`}
                    />
                    {isActive && !reduce ? (
                      <span
                        aria-hidden="true"
                        className="absolute h-8 w-8 rounded-full border border-brand/60"
                        style={{ animation: "veeren-pulse 2s ease-in-out infinite" }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
            {HOTSPOTS.map((h) => (
              <button
                key={h.id}
                type="button"
                onClick={() => setActive(h.id)}
                aria-pressed={h.id === active}
                className={`label-mono shrink-0 border px-4 py-3 transition-colors ${
                  h.id === active
                    ? "border-brand text-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-4">
          <TechPanel className="h-full p-8">
            <p className="label-mono text-brand">Selected</p>
            <motion.div key={current.id} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <h3 className="mt-4 font-display text-2xl font-extrabold">{current.label}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{current.body}</p>
            </motion.div>
            <div className="mt-8 border-t border-border pt-6">
              <Notice title="How to read this">
                These descriptions are general and educational. Exact behaviour depends on your
                specific vehicle, head unit and any service you subscribe to.
              </Notice>
            </div>
          </TechPanel>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------ categories */

function CategoryGallery() {
  return (
    <Section className="border-t border-border" container={false}>
      <Container>
        <Reveal>
          <SectionHeading
            kicker="Audio Categories"
            index="[ 04 ]"
            title="What people actually listen to"
            intro="Seven listening categories, and what changes about your setup depending on which one dominates your drive."
          />
        </Reveal>
      </Container>
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
        {CATEGORIES.map((c, i) => (
          <Reveal
            key={c.title}
            delay={Math.min(i * 0.06, 0.3)}
            className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[26vw]"
          >
            <article className="group relative h-full overflow-hidden border border-border">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"
                />
                <span className="label-mono absolute left-5 top-5 text-brand">{c.n}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-extrabold uppercase tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Container>
        <p className="label-mono mt-6 text-muted-foreground">Swipe or scroll horizontally →</p>
      </Container>
    </Section>
  );
}

/* ----------------------------------------------------------- built around */

function BuiltAround() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative isolate border-t border-border">
      <img
        src={cabinWide}
        alt="Wide interior view of a modern car cabin looking forward from the rear seats"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-30"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/60" />
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            kicker="Context"
            index="[ 05 ]"
            title="Built Around Your Drive"
            intro="The right setup isn't universal — it depends on how and when you drive. Select a driving context to see what tends to matter."
          />
        </Reveal>

        <div className="relative mt-14 hidden aspect-[16/8] w-full border border-border lg:block">
          <img
            src={cabinWide}
            alt="Interior of a car cabin used as a map for driving contexts"
            width={1920}
            height={1080}
            loading="lazy"
            className="h-full w-full object-cover opacity-70"
          />
          {DRIVE_POINTS.map((p, i) => (
            <button
              key={p.title}
              type="button"
              aria-pressed={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <span
                className={`label-mono flex min-h-11 items-center gap-2 border px-4 py-2 backdrop-blur-md transition-colors ${
                  open === i
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border-strong bg-background/70 text-foreground hover:border-brand"
                }`}
              >
                <span className="h-1.5 w-1.5 bg-current" aria-hidden="true" />
                {p.title}
              </span>
            </button>
          ))}
          {open !== null ? (
            <div className="absolute bottom-6 left-6 max-w-md border border-border bg-background/90 p-6 backdrop-blur-md">
              <h3 className="font-display text-lg font-extrabold">{DRIVE_POINTS[open]!.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {DRIVE_POINTS[open]!.text}
              </p>
            </div>
          ) : null}
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border lg:hidden">
          {DRIVE_POINTS.map((p) => (
            <li key={p.title} className="py-6">
              <h3 className="font-display text-lg font-extrabold uppercase tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- timeline */

function AssistanceTimeline() {
  const [active, setActive] = useState(0);
  return (
    <Section className="border-t border-border">
      <Reveal>
        <SectionHeading
          kicker="How Assistance Works"
          index="[ 06 ]"
          title="Four stages, no pressure"
          intro="A simple sequence designed to end with understanding — not with a purchase you didn't ask for."
        />
      </Reveal>

      <div className="mt-14 hidden lg:block">
        <div className="relative grid grid-cols-4 gap-6">
          <span aria-hidden="true" className="absolute left-0 right-0 top-6 h-px bg-border" />
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-6 h-px bg-brand"
            animate={{ width: `${((active + 1) / STAGES.length) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          {STAGES.map((s, i) => (
            <button
              key={s.n}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className="group pt-0 text-left"
            >
              <span
                aria-hidden="true"
                className={`block h-3 w-3 rotate-45 transition-colors ${
                  i <= active ? "bg-brand" : "bg-border-strong"
                }`}
                style={{ marginTop: "1.15rem" }}
              />
              <span className="label-mono mt-6 block text-muted-foreground">{s.n}</span>
              <h3
                className={`mt-3 font-display text-xl font-extrabold transition-colors ${
                  i === active ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </button>
          ))}
        </div>
      </div>

      <ol className="mt-12 lg:hidden">
        {STAGES.map((s) => (
          <li key={s.n} className="relative border-l border-border pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[6.5px] top-1.5 h-3 w-3 rotate-45 bg-brand"
            />
            <span className="label-mono text-muted-foreground">{s.n}</span>
            <h3 className="mt-2 font-display text-lg font-extrabold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* --------------------------------------------------------- compatibility */

const VEHICLE_TYPES = ["Sedan", "SUV / Crossover", "Truck / Pickup", "Hatchback", "Van / MPV"];
const YEARS = ["Before 2010", "2010 – 2014", "2015 – 2018", "2019 – 2022", "2023 or newer"];
const SYSTEMS = ["Factory head unit", "Manufacturer premium audio", "Aftermarket head unit", "Not sure"];
const CONNECTIVITY = ["Bluetooth only", "USB / wired projection", "Wireless projection", "Built-in connected services", "Not sure"];

function CompatibilityExplorer() {
  const [form, setForm] = useState({ type: "", year: "", system: "", conn: "" });
  const [shown, setShown] = useState(false);
  const complete = Object.values(form).every(Boolean);

  return (
    <Section className="border-t border-border bg-surface/30">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            kicker="Informational Tool"
            index="[ 07 ]"
            title="Vehicle Audio Compatibility"
            intro="An educational aid, not a lookup. Choosing options below produces general guidance about what to check — it does not query any vehicle database and cannot confirm compatibility."
          />
          <div className="mt-8">
            <Notice title="No database, no guesswork">
              Veeren Drive Connect does not maintain a vehicle compatibility database. Anything
              shown here is general information. Confirm specifics with your vehicle manufacturer,
              your owner's manual, or the relevant service provider.
            </Notice>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <TechPanel className="p-6 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Vehicle type" id="veh-type" options={VEHICLE_TYPES} value={form.type} onChange={(v) => setForm({ ...form, type: v })} />
              <Field label="Model year" id="veh-year" options={YEARS} value={form.year} onChange={(v) => setForm({ ...form, year: v })} />
              <Field label="Audio system" id="veh-system" options={SYSTEMS} value={form.system} onChange={(v) => setForm({ ...form, system: v })} />
              <Field label="Connectivity" id="veh-conn" options={CONNECTIVITY} value={form.conn} onChange={(v) => setForm({ ...form, conn: v })} />
            </div>
            <button
              type="button"
              disabled={!complete}
              onClick={() => setShown(true)}
              className="label-mono mt-8 inline-flex min-h-12 items-center gap-3 border border-border-strong px-6 py-3 transition-colors hover:border-brand disabled:cursor-not-allowed disabled:opacity-40"
            >
              Show general guidance
              <ArrowUpRight className="h-4 w-4" />
            </button>

            {shown && complete ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 border-t border-border pt-8"
              >
                <p className="label-mono text-brand">Informational result</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  For a {form.type.toLowerCase()} from {form.year.toLowerCase()} with a{" "}
                  {form.system.toLowerCase()} and {form.conn.toLowerCase()}, the questions worth
                  answering are: what the head unit supports natively, whether a separate receiver
                  or module is involved, and whether the service you're considering requires
                  specific in-vehicle hardware.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Check the owner's manual section on audio and connectivity.",
                    "Confirm the head unit model and its supported input sources.",
                    "Ask the service provider directly what hardware their plan requires.",
                    "Ask us to walk through the answers with you if any of it is unclear.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                  This response is generated from your selections only. It is not a compatibility
                  check, a confirmation or a recommendation to purchase.
                </p>
              </motion.div>
            ) : null}
          </TechPanel>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  options,
  value,
  onChange,
}: {
  label: string;
  id: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={id} className="label-mono block text-muted-foreground">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 h-12 w-full border border-input bg-background px-3 text-sm text-foreground transition-colors hover:border-border-strong focus:border-brand"
      >
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

/* -------------------------------------------------------------- why us */

function WhyVeeren() {
  return (
    <Section className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHeading kicker="Why Veeren" index="[ 08 ]" title="Clarity over conversion" />
          <figure className="mt-10">
            <img
              src={roadDusk}
              alt="A car driving along an open highway at dusk with red tail lights glowing"
              width={1920}
              height={1080}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="label-mono mt-4 text-muted-foreground">
              Fig. 02 — Open road, informed choices
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-7 lg:col-start-6">
          <ul className="divide-y divide-border border-y border-border">
            {[
              ["Independent by design", "We are not a dealer, a manufacturer, or an official representative of any audio service. That independence is the point — it lets us describe trade-offs honestly."],
              ["Plain explanations", "We explain how something works before we discuss whether you need it. If a question belongs with your manufacturer or provider, we say so."],
              ["No manufactured urgency", "No countdowns, no invented scarcity, no claims about awards or rankings we don't have."],
              ["Vehicle-first thinking", "Advice that ignores your specific car isn't advice. We ask about the vehicle before anything else."],
              ["Assistance that ends cleanly", "You should be able to leave a conversation with an answer and nothing else attached to it."],
            ].map(([t, d], i) => (
              <li key={t} className="group flex gap-6 py-8 transition-colors">
                <span className="label-mono shrink-0 text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- insights */

function Insights() {
  return (
    <Section className="border-t border-border bg-surface/30">
      <Reveal>
        <SectionHeading
          kicker="Featured Insights"
          index="[ 09 ]"
          title="Worth understanding before you change anything"
        />
      </Reveal>
      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        {INSIGHTS.map((a, i) => (
          <Reveal key={a.n} delay={i * 0.1}>
            <article className="group h-full">
              <Link to={a.to} className="block">
                <div className="overflow-hidden border border-border">
                  <img
                    src={a.image}
                    alt={a.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="label-mono mt-6 flex items-center gap-3 text-brand">
                  <span className="text-muted-foreground">{a.n}</span> {a.kicker}
                </p>
                <h3 className="mt-4 font-display text-xl font-extrabold leading-tight transition-colors group-hover:text-brand">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                <span className="label-mono mt-5 inline-flex items-center gap-2 text-foreground">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ CTA */

function ClosingCTA() {
  return (
    <section className="relative isolate overflow-hidden border-t border-border">
      <img
        src={aerialNight}
        alt="Aerial night view of a single car on a dark, wet road"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/60 to-background"
      />
      <Container className="py-28 text-center sm:py-40">
        <Reveal>
          <Kicker index="[ 10 ]" className="justify-center">
            Next
          </Kicker>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-8 max-w-4xl font-display text-4xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
            Make Every Mile
            <br />
            Sound Better.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us what you're trying to listen to and what vehicle you drive. We'll help you
            understand the options — clearly, and with nothing attached.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink href={PHONE_HREF}>Call {PHONE_DISPLAY}</ActionLink>
            <ActionLink to="/audio-experience" variant="outline">
              Explore the Audio Experience
            </ActionLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
