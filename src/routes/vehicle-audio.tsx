import { createFileRoute } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";
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
import dashboardImg from "@/assets/dashboard-hotspots.jpg";
import connectivityConsole from "@/assets/connectivity-console.jpg";
import speakerDetail from "@/assets/speaker-detail.jpg";
import cabinWide from "@/assets/cabin-wide.jpg";
import garageNight from "@/assets/garage-night.jpg";

export const Route = createFileRoute("/vehicle-audio")({
  head: () =>
    seo({
      title: "Vehicle Audio — Dashboards, Infotainment & Connectivity | Veeren",
      description:
        "Guidance on vehicle audio systems: head units, infotainment, speakers, connectivity types and compatibility questions, explained transparently.",
      path: "/vehicle-audio",
    }),
  component: VehicleAudioPage,
});

const LAYERS = [
  ["Head unit", "The centre of the system. It selects sources, applies processing and sends signal onward. Factory, premium and aftermarket units differ significantly in what they accept."],
  ["Amplification", "Either built into the head unit or a separate module. Premium factory systems almost always use a discrete amplifier."],
  ["Speakers", "Position, size and count define the ceiling of what any setting can achieve. Door-mounted mid-range drivers do most of the work in most cars."],
  ["Sources", "Broadcast tuner, satellite receiver, USB, Bluetooth, projection and embedded apps. Each arrives at the head unit differently."],
  ["Processing", "Equaliser, balance, fade, loudness and manufacturer-specific modes. This is the layer you can actually change."],
];

const CONNECTIONS = [
  ["Bluetooth", "Universal", "Works with nearly everything. Compressed, limited metadata, and the most likely to drop out."],
  ["USB / wired projection", "Stable", "Wired data connection carrying both audio and interface. Generally the most reliable route."],
  ["Wireless projection", "Convenient", "Same interface without the cable. More sensitive to phone battery and interference."],
  ["Embedded connectivity", "Vehicle-native", "The car's own data connection. Availability and features are tied to the manufacturer."],
];

const FAQS = [
  ["Can you confirm whether my car supports a specific service?", "No. We can explain what determines compatibility — head unit, receiver hardware and service requirements — but confirmation must come from your manufacturer or the service provider."],
  ["Do you install or modify audio equipment?", "No. We provide information and guidance only. Physical work should be handled by a qualified installer or service centre."],
  ["Why does my phone sound worse over Bluetooth?", "Bluetooth compresses audio before transmission. A wired or projection connection typically passes a higher-quality stream."],
  ["Is aftermarket always better than factory audio?", "No. Modern factory premium systems are often well matched to the cabin. Aftermarket offers more control, but requires careful integration."],
  ["Can you tell me what my subscription costs or covers?", "No. Pricing, coverage and plan details must be confirmed directly with the provider. We can help you identify the right questions to ask."],
];

function VehicleAudioPage() {
  return (
    <>
      <PageHero
        kicker="Vehicle Audio"
        index="[ 01 ]"
        title={
          <>
            Understand the
            <br />
            system you own.
          </>
        }
        lead="Dashboards, infotainment, speakers and connectivity — described in the order the signal actually travels, so the behaviour of your system starts to make sense."
        image={dashboardImg}
        imageAlt="Modern car dashboard with a centre infotainment screen displaying an audio interface"
        meta={[
          ["Layers", "Five"],
          ["Connection types", "Four"],
          ["Confirmation", "Manufacturer / provider"],
          ["Nature", "Informational"],
        ]}
      />

      <Section>
        <Reveal>
          <SectionHeading
            kicker="System Layers"
            index="[ 02 ]"
            title="Signal path, front to back"
            intro="Most confusing audio behaviour traces back to one of these five layers. Identifying which one narrows the question immediately."
          />
        </Reveal>
        <ol className="mt-12 grid gap-px border border-border bg-border lg:grid-cols-5">
          {LAYERS.map(([t, d], i) => (
            <Reveal key={t} as="li" delay={i * 0.06} className="bg-background p-7">
              <span className="label-mono text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-lg font-extrabold">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border bg-surface/30">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              kicker="Connectivity"
              index="[ 03 ]"
              title="Four ways audio reaches your car"
            />
            <figure className="mt-10">
              <img
                src={connectivityConsole}
                alt="Smartphone on a wireless charging pad in a car centre console next to USB ports"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="label-mono mt-4 text-muted-foreground">
                Fig. 01 — Connection determines behaviour
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Comparison of in-car audio connection types</caption>
              <thead>
                <tr className="border-b border-border-strong">
                  <th scope="col" className="label-mono py-3 text-muted-foreground">Type</th>
                  <th scope="col" className="label-mono py-3 text-muted-foreground">Character</th>
                </tr>
              </thead>
              <tbody>
                {CONNECTIONS.map(([name, tag, desc]) => (
                  <tr key={name} className="border-b border-border align-top">
                    <th scope="row" className="w-2/5 py-6 pr-4 font-display text-base font-bold">
                      {name}
                    </th>
                    <td className="py-6">
                      <span className="label-mono text-brand">{tag}</span>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </Section>

      <section className="relative isolate border-t border-border">
        <img
          src={cabinWide}
          alt="Wide view of a car cabin interior showing seats, roof and dashboard"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/75" />
        <Container className="py-20 sm:py-28">
          <Reveal>
            <SectionHeading
              kicker="Compatibility"
              index="[ 04 ]"
              title="What compatibility actually depends on"
              intro="Four variables decide almost every compatibility question. None of them can be answered from a car's badge alone."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Head unit", "Its model determines supported sources and interfaces."],
              ["Receiver hardware", "Some services require dedicated hardware fitted to the vehicle."],
              ["Model year", "Feature sets change year to year, even within the same model line."],
              ["Service requirements", "What the provider requires in-vehicle, which only they can confirm."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <TechPanel className="h-full p-7">
                  <span className="label-mono text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 font-display text-lg font-extrabold">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </TechPanel>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-10">
            <Notice title="No compatibility database">
              Veeren Drive Connect does not operate a vehicle lookup system and cannot confirm
              compatibility for any specific car. We help you identify what to check and where to
              check it.
            </Notice>
          </Reveal>
        </Container>
      </section>

      <Section className="border-t border-border">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading kicker="Transparent FAQs" index="[ 05 ]" title="Straight answers" />
            <figure className="mt-10">
              <img
                src={speakerDetail}
                alt="Detailed view of a car speaker cone behind a mesh grille"
                width={1400}
                height={1000}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <dl className="divide-y divide-border border-y border-border">
              {FAQS.map(([q, a]) => (
                <div key={q} className="py-7">
                  <dt className="font-display text-lg font-extrabold leading-snug">{q}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden border-t border-border">
        <img
          src={garageNight}
          alt="A dark car parked in a concrete garage lit by a single overhead lamp"
          width={1600}
          height={1000}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-background/70" />
        <Container className="py-24 text-center sm:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Bring us the make, model and the confusing part.
            </h2>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ActionLink href={PHONE_HREF}>Call {PHONE_DISPLAY}</ActionLink>
              <ActionLink to="/faq" variant="outline">
                Browse the FAQ
              </ActionLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
