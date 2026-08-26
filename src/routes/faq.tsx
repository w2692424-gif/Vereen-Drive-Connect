import { createFileRoute } from "@tanstack/react-router";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact-info";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Plus } from "lucide-react";
import { seo } from "@/lib/seo";
import { ActionLink, Container, Notice, PageHero, Reveal, Section, SectionHeading } from "@/components/site/ui";
import interiorGolden from "@/assets/interior-golden.jpg";

export const Route = createFileRoute("/faq")({
  head: () =>
    seo({
      title: "FAQ — In-Car Audio & Assistance Questions | Veeren Drive Connect",
      description:
        "Categorised answers on general topics, vehicle compatibility, audio, SiriusXM-related questions, assistance and billing or service questions.",
      path: "/faq",
    }),
  component: FaqPage,
});

const CATEGORIES: { name: string; items: [string, string][] }[] = [
  {
    name: "General",
    items: [
      ["What is Veeren Drive Connect?", "An independent information and assistance resource for connected in-car audio. We explain how systems and services generally work so drivers can make informed decisions."],
      ["Do you sell anything?", "No. We do not sell hardware, subscriptions or installations, and we do not earn a commission on any purchase you make."],
      ["Are you affiliated with any manufacturer or service?", "No. We are not affiliated with, authorised by, or acting on behalf of any vehicle manufacturer, audio brand or service provider."],
      ["Is the information here specific to my car?", "No. Everything published here is general. Vehicle-specific answers must be confirmed with your manufacturer, owner's manual or a qualified installer."],
    ],
  },
  {
    name: "Vehicle & Compatibility",
    items: [
      ["Can you tell me if my vehicle supports a service?", "We cannot confirm it. We can explain what determines compatibility — head unit, receiver hardware, model year and service requirements — and how to verify each."],
      ["Do you have a vehicle lookup tool?", "No. The compatibility section on our homepage is an educational aid built from your own selections. It does not query any database."],
      ["How do I identify my head unit?", "Usually via the owner's manual, the vehicle's settings menu, or the model designation printed on the unit itself. A dealer can confirm it definitively."],
      ["Does model year really matter?", "Yes. Feature sets frequently change year to year within the same model line, particularly for connectivity."],
    ],
  },
  {
    name: "Audio",
    items: [
      ["Why does speech sound quieter than music?", "Road and wind noise occupy a similar frequency range to the human voice, masking it. A flatter equaliser usually helps more than raising volume."],
      ["Is Bluetooth lower quality than a cable?", "Generally yes. Bluetooth compresses audio before transmission; wired and projection connections typically carry a higher-quality stream."],
      ["Should I change the equaliser for different content?", "It often helps. Voice content benefits from reduced bass and flatter treble; music benefits from settings matched to the genre and cabin."],
      ["Will new speakers fix everything?", "Not necessarily. Source quality, amplification and cabin acoustics all contribute. Identifying the weakest link matters more than upgrading one part."],
    ],
  },
  {
    name: "SiriusXM-related Questions",
    items: [
      ["Are you SiriusXM?", "No. Veeren Drive Connect is not SiriusXM and is not an official, authorised or appointed representative, dealer or agent of SiriusXM."],
      ["What can you tell me about satellite radio?", "General information: what it is, how it differs from streaming and terrestrial radio, and what hardware questions determine whether a vehicle can receive it."],
      ["Can you activate, change or cancel a subscription?", "No. Account, activation, billing and cancellation matters must be handled directly with the service provider."],
      ["Can you tell me current pricing or channel line-ups?", "No. Pricing, plans and content availability change and vary by region. Confirm those directly with the provider."],
    ],
  },
  {
    name: "Assistance",
    items: [
      ["How do I get help?", "Use the contact form on our Contact & Assistance page. Include your vehicle information and a description of what you're trying to understand."],
      ["What information should I include?", "Vehicle type, model year, the audio system if you know it, how your phone connects, and the specific question or issue."],
      ["Is assistance free?", "Our published information is freely available. Any specific terms relating to paid services, where offered, would be stated explicitly before you commit to anything."],
      ["Will you tell me if you can't help?", "Yes. If a question belongs with a manufacturer, installer or service provider, we will say so directly rather than guess."],
    ],
  },
  {
    name: "Billing / Service Questions",
    items: [
      ["Can you see my account or invoices?", "No. We have no access to any provider's systems, accounts, payment records or subscriptions."],
      ["Who handles refunds for a subscription?", "The provider that issued the subscription. Their published terms govern eligibility and process."],
      ["Do you have a refund policy?", "Our Refund Policy page sets out our position, including clearly marked placeholders for details specific to any paid service that may be offered."],
      ["Where do I raise a billing dispute?", "Directly with the provider or your payment method issuer. We cannot intervene in a billing matter."],
    ],
  },
];

function FaqPage() {
  const [cat, setCat] = useState(0);
  const [open, setOpen] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const active = CATEGORIES[cat]!;

  return (
    <>
      <PageHero
        kicker="FAQ"
        index="[ 01 ]"
        title={
          <>
            Questions,
            <br />
            answered plainly.
          </>
        }
        lead="Grouped by topic and written to be accurate rather than reassuring. Where the honest answer is 'ask the provider', that's what it says."
        image={interiorGolden}
        imageAlt="Interior of a car at sunset with the highway visible through the windshield"
        meta={[
          ["Categories", "Six"],
          ["Answers", "24"],
          ["Style", "Factual"],
          ["Scope", "General information"],
        ]}
      />

      <Section>
        <nav aria-label="FAQ categories" className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.name}
              type="button"
              onClick={() => {
                setCat(i);
                setOpen(null);
              }}
              aria-pressed={cat === i}
              className={`label-mono min-h-11 shrink-0 border px-5 py-3 transition-colors ${
                cat === i
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.name}
            </button>
          ))}
        </nav>

        <Reveal className="mt-12">
          <SectionHeading kicker={active.name} index="[ 02 ]" title={`${active.name} questions`} />
        </Reveal>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {active.items.map(([q, a]) => {
            const id = `${active.name}-${q}`;
            const isOpen = open === id;
            return (
              <li key={id}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-extrabold leading-snug sm:text-xl">
                      {q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center border border-border-strong transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-brand text-brand" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-7 text-sm leading-relaxed text-muted-foreground">{a}</p>
                </motion.div>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-12">
          <Notice>
            Answers here describe general behaviour and our own scope. They are not guarantees, and
            they do not replace confirmation from your vehicle manufacturer or a service provider.
          </Notice>
        </Reveal>
      </Section>

      <Container className="pb-24 text-center sm:pb-32">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Still unresolved? Ask us directly.
          </h2>
          <div className="mt-10 flex justify-center">
            <ActionLink href={PHONE_HREF}>Call {PHONE_DISPLAY}</ActionLink>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
