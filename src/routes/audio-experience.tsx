import { createFileRoute } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { seo } from "@/lib/seo";
import {
  ActionLink,
  Container,
  Notice,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
  TechPanel,
} from "@/components/site/ui";
import roadtripCabin from "@/assets/roadtrip-cabin.jpg";
import speakerDetail from "@/assets/speaker-detail.jpg";
import interiorGolden from "@/assets/interior-golden.jpg";
import aerialNight from "@/assets/aerial-night-road.jpg";
import steeringControls from "@/assets/steering-controls.jpg";
import connectivityConsole from "@/assets/connectivity-console.jpg";
import roadDusk from "@/assets/road-dusk.jpg";

export const Route = createFileRoute("/audio-experience")({
  head: () =>
    seo({
      title: "Audio Experience — Listening Modes for Every Drive | Veeren",
      description:
        "Music, sports, news, talk, entertainment, podcasts and long-drive listening — how each behaves in a vehicle, plus an interactive Choose Your Drive selector.",
      path: "/audio-experience",
    }),
  component: AudioExperiencePage,
});

const MODES = [
  {
    id: "commute",
    label: "Commute",
    headline: "Short trips, repeated daily",
    text: "Commuting rewards speed of access over everything else. Presets, steering-wheel shortcuts and reliable source recall matter more than fidelity — you want the right thing playing before you leave the driveway.",
    tips: ["Set presets you actually use", "Check that the last source resumes on start", "Keep voice content near the top of your list"],
    image: steeringControls,
    alt: "Driver's hand on a steering wheel with audio control buttons in morning light",
  },
  {
    id: "roadtrip",
    label: "Road Trip",
    headline: "Hours of continuous listening",
    text: "Long drives expose coverage gaps and battery limits. Broadcast and satellite hold up where mobile data thins out; downloaded content covers the rest. Planning beats improvising at hour four.",
    tips: ["Download episodes before departure", "Know where coverage typically drops", "Plan charging for the device driving playback"],
    image: roadtripCabin,
    alt: "Long desert highway seen through a car windshield at golden hour",
  },
  {
    id: "relax",
    label: "Relax",
    headline: "Unhurried, low-effort listening",
    text: "Slower drives are when audio settings are worth touching. Balance, fade and a gentler equaliser curve make a bigger difference than volume, especially with a full cabin.",
    tips: ["Centre the fade for shared listening", "Reduce treble before raising volume", "Match content length to the drive"],
    image: interiorGolden,
    alt: "Warm sunset light inside a car cabin with the dashboard lit",
  },
  {
    id: "sports",
    label: "Sports",
    headline: "Live coverage, when it's available",
    text: "Sports depends on rights and region more than technology. Before you rely on it, confirm with the provider what a given plan actually includes in your area.",
    tips: ["Confirm coverage with the provider", "Check whether an app or receiver is required", "Have a fallback source for blackouts"],
    image: aerialNight,
    alt: "Aerial view of a car on a dark road at night with red light reflections",
  },
  {
    id: "news",
    label: "News",
    headline: "Short-form and interrupt-driven",
    text: "News listening is about switching, not settling. Fast source changes, clear speech and predictable presets carry more weight than audio performance.",
    tips: ["Keep two news sources easily reachable", "Flatten the equaliser for speech", "Lower bass to reduce cabin masking"],
    image: connectivityConsole,
    alt: "Phone connected on a car centre console beside physical audio controls",
  },
  {
    id: "music",
    label: "Music",
    headline: "The full range of the system",
    text: "Music is the only category that uses your system's whole capability. It's also where source quality, connection type and speaker configuration all become audible.",
    tips: ["Prefer wired or projection over Bluetooth for quality", "Check source quality settings in the app", "Adjust the equaliser per genre, not per song"],
    image: speakerDetail,
    alt: "Close-up of a dark car speaker with a metallic mesh grille",
  },
] as const;

const LAYOUTS = [
  ["Music", "Full-range content that reveals the system's real capability — and its weakest link."],
  ["Sports", "Live, region-dependent, and worth verifying with the provider before you rely on it."],
  ["News", "Short bursts where access speed beats fidelity every time."],
  ["Talk", "Voice-forward listening that competes directly with cabin noise."],
  ["Entertainment", "Mixed formats sitting between speech and music in their demands."],
  ["Podcasts", "App-driven playback where resume behaviour varies widely by system."],
  ["Long Drive", "Endurance listening: coverage, downloads and device power all matter."],
];

function AudioExperiencePage() {
  const [mode, setMode] = useState<string>(MODES[0].id);
  const current = MODES.find((m) => m.id === mode) ?? MODES[0];
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        kicker="Audio Experience"
        index="[ 01 ]"
        title={
          <>
            Different drives.
            <br />
            Different listening.
          </>
        }
        lead="What sounds right on a twenty-minute commute rarely suits a six-hour drive. This page maps listening categories to the way people actually use their cars."
        image={roadtripCabin}
        imageAlt="View through a car windshield of an open desert road at sunset"
        meta={[
          ["Categories", "Seven"],
          ["Selector", "Six drive modes"],
          ["Basis", "General guidance"],
          ["Applies to", "Most modern vehicles"],
        ]}
      />

      <Section>
        <Reveal>
          <SectionHeading
            kicker="Choose Your Drive"
            index="[ 02 ]"
            title="Select a drive, see what changes"
            intro="An interactive selector. Choose the kind of drive you're planning and the guidance below adapts to it."
          />
        </Reveal>

        <div
          role="tablist"
          aria-label="Drive modes"
          className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2"
        >
          {MODES.map((m, i) => (
            <button
              key={m.id}
              role="tab"
              type="button"
              id={`tab-${m.id}`}
              aria-selected={mode === m.id}
              aria-controls={`panel-${m.id}`}
              tabIndex={mode === m.id ? 0 : -1}
              onClick={() => setMode(m.id)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") setMode(MODES[(i + 1) % MODES.length]!.id);
                if (e.key === "ArrowLeft") setMode(MODES[(i - 1 + MODES.length) % MODES.length]!.id);
              }}
              className={`label-mono min-h-11 shrink-0 border px-5 py-3 transition-colors ${
                mode === m.id
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <motion.div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid gap-8 lg:grid-cols-12"
        >
          <div className="overflow-hidden border border-border lg:col-span-7">
            <img
              src={current.image}
              alt={current.alt}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <TechPanel className="p-8 lg:col-span-5">
            <p className="label-mono text-brand">{current.label}</p>
            <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight">
              {current.headline}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{current.text}</p>
            <ul className="mt-6 space-y-3 border-t border-border pt-6">
              {current.tips.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </TechPanel>
        </motion.div>
      </Section>

      <Section className="border-t border-border bg-surface/30" container={false}>
        <Container>
          <Reveal>
            <SectionHeading
              kicker="Listening Layouts"
              index="[ 03 ]"
              title="Seven categories, seven behaviours"
              intro="Scroll horizontally through the categories. Each one places different demands on your vehicle's audio chain."
            />
          </Reveal>
        </Container>
        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-12">
          {LAYOUTS.map(([title, text], i) => (
            <Reveal
              key={title}
              delay={Math.min(i * 0.06, 0.3)}
              className="w-[80vw] shrink-0 snap-start sm:w-[42vw] lg:w-[28vw]"
            >
              <div className="flex h-full flex-col justify-between border border-border bg-background p-8">
                <span className="label-mono text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-16">
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              kicker="Sound In A Cabin"
              index="[ 04 ]"
              title="Why a car is a difficult listening room"
              intro="Reflective glass, absorbent seats, road noise and speakers pointed at your knees. Every setting you adjust is compensating for that."
            />
            <div className="mt-8">
              <Notice>
                These are general characteristics of vehicle cabins. Specific results depend on
                your car, its speaker layout and any factory audio processing.
              </Notice>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-border border-y border-border">
              {[
                ["Road noise masks speech", "Tyre and wind noise sit in the same range as voices, which is why talk content feels quieter than music at the same volume."],
                ["Speaker placement is compromised", "Doors and dashboards are not ideal positions. Balance and fade exist to partly correct for that."],
                ["Sources are not equal", "Bluetooth, USB, projection and broadcast each apply different processing before the sound reaches your speakers."],
                ["Speed changes everything", "A setting tuned while parked will rarely feel right at highway speed."],
              ].map(([t, d]) => (
                <li key={t} className="py-7">
                  <h3 className="font-display text-lg font-extrabold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden border-t border-border">
        <img
          src={roadDusk}
          alt="Car travelling an empty highway at dusk with glowing tail lights"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/70" />
        <Container className="py-24 text-center sm:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Tell us how you drive. We'll explain what fits.
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ActionLink href={PHONE_HREF}>Call {PHONE_DISPLAY}</ActionLink>
              <ActionLink to="/vehicle-audio" variant="outline">
                Vehicle Audio Guidance
              </ActionLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
