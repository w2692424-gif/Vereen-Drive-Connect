import { createFileRoute } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { seo } from "@/lib/seo";
import {
  ActionLink,
  Container,
  Notice,
  PageHero,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/ui";
import speakerDetail from "@/assets/speaker-detail.jpg";
import dashboardImg from "@/assets/dashboard-hotspots.jpg";
import connectivityConsole from "@/assets/connectivity-console.jpg";
import steeringControls from "@/assets/steering-controls.jpg";
import interiorGolden from "@/assets/interior-golden.jpg";
import garageNight from "@/assets/garage-night.jpg";
import roadtripCabin from "@/assets/roadtrip-cabin.jpg";

export const Route = createFileRoute("/services")({
  head: () =>
    seo({
      title: "Services — In-Car Audio Guidance & Assistance | Veeren",
      description:
        "Six areas of support: in-car audio guidance, SiriusXM-related information, vehicle audio support, connected entertainment guidance, service information and general assistance.",
      path: "/services",
    }),
  component: ServicesPage,
});

const SERVICES = [
  {
    n: "01",
    title: "In-Car Audio Guidance",
    image: speakerDetail,
    alt: "Close-up of a dark car speaker cone and metallic grille",
    summary:
      "Understanding how sound actually reaches your ears: sources, head unit, amplification, speakers and the settings between them.",
    detail: [
      "How source selection changes what your system can and can't do.",
      "What equaliser, balance and fade adjustments realistically achieve.",
      "Why cabin noise affects voice content more than music.",
      "When a limitation is hardware and when it's simply configuration.",
    ],
  },
  {
    n: "02",
    title: "SiriusXM Information & Assistance",
    image: dashboardImg,
    alt: "Car infotainment screen displaying an audio interface",
    summary:
      "General, independent information about satellite radio as a category and about SiriusXM-related questions drivers commonly have.",
    detail: [
      "What satellite radio is, and how it differs from streaming and terrestrial radio.",
      "The hardware and receiver questions that determine whether a vehicle can use it.",
      "What to confirm directly with the provider before subscribing.",
      "Where account, billing and cancellation matters must be handled — with the provider, not with us.",
    ],
  },
  {
    n: "03",
    title: "Vehicle Audio Support",
    image: garageNight,
    alt: "A modern dark car parked in a concrete garage under a single light",
    summary:
      "Help interpreting what your specific vehicle supports, based on its type, model year, head unit and connectivity.",
    detail: [
      "Reading your owner's manual sections on audio and connectivity.",
      "Identifying the head unit and its supported input sources.",
      "Understanding factory versus premium versus aftermarket configurations.",
      "Knowing which questions belong with a manufacturer or installer.",
    ],
  },
  {
    n: "04",
    title: "Connected Entertainment Guidance",
    image: connectivityConsole,
    alt: "A smartphone connected on a car centre console with charging pad and USB ports",
    summary:
      "Projection interfaces, streaming apps, podcasts and phone-driven listening — and how each behaves in a vehicle.",
    detail: [
      "Wired versus wireless projection, and what changes between them.",
      "Why Bluetooth is the most compatible and the most limited option.",
      "How playback resume, metadata and skip controls differ by system.",
      "Data, coverage and offline planning for longer drives.",
    ],
  },
  {
    n: "05",
    title: "Service Information",
    image: steeringControls,
    alt: "Hand on a steering wheel with integrated audio control buttons",
    summary:
      "Neutral information about what audio and entertainment services generally involve, and what to verify before committing.",
    detail: [
      "The questions worth asking about coverage, hardware and trial terms.",
      "How renewal and cancellation processes typically differ between providers.",
      "Reading service terms without needing a legal background.",
      "Recognising when an offer needs confirming at the source.",
    ],
  },
  {
    n: "06",
    title: "General Customer Assistance",
    image: interiorGolden,
    alt: "Driver's view of a highway at sunset from inside a car",
    summary:
      "A place to ask when you're not sure who to ask. If it isn't ours to answer, we'll tell you clearly where it belongs.",
    detail: [
      "Plain-language answers to in-car audio and connectivity questions.",
      "Help framing a question before you contact a manufacturer or provider.",
      "Clarification of terminology used in vehicle and service documentation.",
      "An honest 'we don't know' when that's the accurate answer.",
    ],
  },
];

function ServicesPage() {
  const [open, setOpen] = useState<string | null>(SERVICES[0]!.n);
  const reduce = useReducedMotion();

  return (
    <>
      <PageHero
        kicker="Services"
        index="[ 01 ]"
        title={
          <>
            Six areas.
            <br />
            All of them explanatory.
          </>
        }
        lead="Everything below is information, guidance and assistance. We do not install hardware, manage accounts, process payments or act on behalf of any service provider."
        image={roadtripCabin}
        imageAlt="Desert highway seen through the windshield of a car in late afternoon light"
        meta={[
          ["Scope", "Guidance & information"],
          ["Delivery", "Written assistance"],
          ["Sales", "None"],
          ["Account access", "None"],
        ]}
      />

      <Section>
        <Reveal>
          <SectionHeading
            kicker="Index"
            index="[ 02 ]"
            title="What we cover"
            intro="Select a service to expand its detail. Each panel describes exactly what the assistance includes."
          />
        </Reveal>

        <nav aria-label="Service index" className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2">
          {SERVICES.map((s) => (
            <button
              key={s.n}
              type="button"
              onClick={() => setOpen(s.n)}
              aria-pressed={open === s.n}
              className={`label-mono flex min-h-11 shrink-0 items-center gap-3 border px-4 py-3 transition-colors ${
                open === s.n
                  ? "border-brand text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-brand">{s.n}</span>
              {s.title}
            </button>
          ))}
        </nav>

        <div className="mt-12 space-y-6">
          {SERVICES.map((s, i) => {
            const isOpen = open === s.n;
            return (
              <Reveal key={s.n} delay={Math.min(i * 0.05, 0.2)}>
                <article
                  className={`group relative grid overflow-hidden border transition-colors lg:grid-cols-12 ${
                    isOpen ? "border-brand/50" : "border-border"
                  }`}
                >
                  <div className="relative min-h-56 overflow-hidden lg:col-span-5">
                    <img
                      src={s.image}
                      alt={s.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-r from-background/60 to-background/10"
                    />
                    <span className="label-mono absolute left-6 top-6 text-brand">{s.n}</span>
                  </div>

                  <div className="p-7 sm:p-10 lg:col-span-7">
                    <div className="flex items-start justify-between gap-6">
                      <h3 className="font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                        {s.title}
                      </h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : s.n)}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${s.title}`}
                        className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-border-strong transition-colors hover:border-brand"
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </button>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {s.summary}
                    </p>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 space-y-3 border-t border-border pt-6">
                        {s.detail.map((d) => (
                          <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              kicker="Boundaries"
              index="[ 03 ]"
              title="What these services do not include"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="divide-y divide-border border-y border-border">
              {[
                "Installation, repair or physical work on any vehicle.",
                "Account creation, changes, cancellation or billing support.",
                "Acting as an agent, dealer or representative of any provider.",
                "Guarantees of compatibility, coverage, pricing or outcomes.",
                "Legal, financial or warranty advice of any kind.",
              ].map((t) => (
                <li key={t} className="py-4 text-sm leading-relaxed text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mt-10">
          <Notice>
            If your question involves an existing subscription, a payment or an account, contact
            that provider directly. We can explain how something generally works, but we have no
            access to any provider's systems.
          </Notice>
        </Reveal>
      </Section>

      <Container className="pb-24 pt-4 text-center sm:pb-32">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Not sure which of these fits your question?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Describe the situation and we'll point you to the right one — or tell you plainly if
            it belongs elsewhere.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink href={PHONE_HREF}>Call {PHONE_DISPLAY}</ActionLink>
            <ActionLink to="/faq" variant="outline">
              Read the FAQ
            </ActionLink>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
