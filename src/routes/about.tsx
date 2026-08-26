import { createFileRoute } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";
import { seo } from "@/lib/seo";
import {
  ActionLink,
  Container,
  Notice,
  Reveal,
  Section,
  SectionHeading,
  PageHero,
  TechPanel,
} from "@/components/site/ui";
import garageNight from "@/assets/garage-night.jpg";
import interiorGolden from "@/assets/interior-golden.jpg";
import steeringControls from "@/assets/steering-controls.jpg";
import roadDusk from "@/assets/road-dusk.jpg";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About Veeren Drive Connect — Independent Audio Guidance",
      description:
        "Who we are, what we do, and what we deliberately don't claim. Veeren Drive Connect is an independent in-car audio information and assistance resource.",
      path: "/about",
    }),
  component: AboutPage,
});

const PRINCIPLES = [
  ["Explain first", "Every conversation starts with how something works, not with what it costs."],
  ["Say what we don't know", "If an answer depends on a manufacturer or provider, we point you there rather than guessing."],
  ["No invented authority", "We don't claim awards, rankings, certifications or affiliations we don't hold."],
  ["Respect the driver", "You decide. Our job ends when you understand the options well enough to choose."],
  ["Keep it accurate", "Descriptions of technology are kept general where specifics vary between vehicles."],
  ["Stay reachable", "Assistance should be easy to ask for and easy to walk away from."],
];

const TIMELINE = [
  ["Stage 01", "A recurring question", "Drivers kept asking the same thing in different words: what can my car actually do, and what am I being asked to pay for?"],
  ["Stage 02", "A different approach", "Instead of selling a product, Veeren Drive Connect was shaped as an information and assistance resource for connected in-car audio."],
  ["Stage 03", "Scope defined", "Guidance across infotainment, connectivity, listening categories and subscription-related questions — including SiriusXM-related information."],
  ["Stage 04", "Transparency built in", "Clear boundaries on what we are and aren't, stated on every page rather than buried in a footer."],
];

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        index="[ 01 ]"
        title={
          <>
            We explain the drive,
            <br />
            not the sales pitch.
          </>
        }
        lead="Veeren Drive Connect exists for one reason: connected in-car audio became complicated, and most of the explanations available to drivers are attached to something being sold."
        image={garageNight}
        imageAlt="A dark modern car parked under a single overhead light in a concrete garage"
        meta={[
          ["Type", "Information resource"],
          ["Focus", "In-car audio & connectivity"],
          ["Approach", "Guidance, not sales"],
          ["Affiliation", "Independent"],
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading kicker="Our Story" index="[ 02 ]" title="Where this started" />
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground">
              Cars gained screens, apps, modems and subscription services faster than anyone
              produced plain-language explanations for them. A driver asking a simple question —
              can I listen to this in my car? — often ends up navigating manufacturer
              documentation, provider terms and forum folklore all at once.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Veeren Drive Connect was built to sit in that gap. Not as a retailer, not as an
              installer, and not as anyone's official channel — as a place to get the explanation
              first, and to be told honestly when a question belongs somewhere else.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              That framing shapes everything here: the language, the scope of what we'll answer,
              and the things we deliberately refuse to claim.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <TechPanel className="h-full p-8 sm:p-10">
              <p className="label-mono text-brand">Mission</p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight">
                Make connected in-car audio understandable to the person driving.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Understanding should come before any decision. We aim to leave every driver with a
                clearer picture of their own vehicle, their listening options and the questions
                worth asking next — whether or not they ever contact us again.
              </p>
            </TechPanel>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full border border-border p-8 sm:p-10">
              <p className="label-mono text-brand">What we do</p>
              <ul className="mt-6 divide-y divide-border">
                {[
                  ["In-car audio guidance", "How systems, sources and settings fit together."],
                  ["SiriusXM-related information", "General, independent information and assistance for questions about satellite radio services."],
                  ["Vehicle audio support", "Help interpreting what your specific vehicle supports."],
                  ["Connected entertainment guidance", "Projection, streaming and app-based listening explained."],
                  ["Service information", "What to verify, and who to verify it with."],
                  ["General customer assistance", "A place to ask when you're not sure who to ask."],
                ].map(([t, d]) => (
                  <li key={t} className="py-4">
                    <h3 className="font-display text-base font-bold">{t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border">
        <Reveal>
          <SectionHeading
            kicker="Timeline"
            index="[ 03 ]"
            title="How the approach took shape"
            intro="Not a corporate history — a description of how the scope of this resource was defined."
          />
        </Reveal>
        <ol className="mt-14 grid gap-px border border-border bg-border md:grid-cols-4">
          {TIMELINE.map(([stage, title, text], i) => (
            <Reveal key={stage} delay={i * 0.08} as="li" className="bg-background p-8">
              <span className="label-mono text-brand">{stage}</span>
              <h3 className="mt-5 font-display text-lg font-extrabold leading-tight">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <section className="relative isolate border-t border-border">
        <img
          src={interiorGolden}
          alt="Interior of a car at sunset with the dashboard silhouetted against the sky"
          width={1600}
          height={1100}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-25"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/70" />
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              kicker="Customer Assistance"
              index="[ 04 ]"
              title="What contacting us is actually like"
              intro="No queue theatre, no scripted escalation, no pretending to be a service provider's support desk."
            />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["You describe the situation", "In your own words — the vehicle, what you're trying to listen to, and what's unclear."],
              ["We ask clarifying questions", "Usually about the head unit, model year and how your phone connects."],
              ["You get an explanation", "Plus a clear statement of anything that must be confirmed with a manufacturer or provider."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.1}>
                <div className="border-t border-brand pt-6">
                  <span className="label-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-extrabold">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading kicker="Core Principles" index="[ 05 ]" title="Six rules we work to" />
            <figure className="mt-10">
              <img
                src={steeringControls}
                alt="A driver's hand on a steering wheel with audio controls in soft light"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="label-mono mt-4 text-muted-foreground">
                Fig. 01 — Control stays with the driver
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-border border-y border-border">
              {PRINCIPLES.map(([t, d], i) => (
                <li key={t} className="flex gap-6 py-7">
                  <span className="label-mono shrink-0 text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-extrabold">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <Reveal>
          <SectionHeading
            kicker="Positioning"
            index="[ 06 ]"
            title="What we are — and what we are not"
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full border border-border p-8">
              <p className="label-mono text-brand">We are</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {[
                  "An independent information and assistance resource.",
                  "A place to understand in-car audio and connectivity options.",
                  "A source of general, transparent SiriusXM-related information.",
                  "Clear about the limits of what we can confirm.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full border border-border p-8">
              <p className="label-mono text-muted-foreground">We are not</p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {[
                  "SiriusXM, or an official or authorised representative of it.",
                  "A dealership, manufacturer, installer or repair centre.",
                  "A billing, account or subscription management channel.",
                  "A source of guarantees about compatibility or outcomes.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-border-strong" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} className="mx-auto mt-8 max-w-5xl">
          <Notice>
            Account, billing and subscription matters must be handled directly with the relevant
            service provider. We can help you understand a topic; we cannot act on your account.
          </Notice>
        </Reveal>
      </Section>

      <section className="relative isolate overflow-hidden border-t border-border">
        <img
          src={roadDusk}
          alt="A car on an open highway at dusk with mountains on the horizon"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/70" />
        <Container className="py-24 text-center sm:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Ask the question you couldn't get a straight answer to.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ActionLink href={PHONE_HREF}>Call {PHONE_DISPLAY}</ActionLink>
              <ActionLink to="/services" variant="outline">
                See What We Cover
              </ActionLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
