import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    seo({
      title: "Disclaimer — Veeren Drive Connect",
      description:
        "Independence, scope and accuracy statements for Veeren Drive Connect, including our position regarding SiriusXM and other third parties.",
      path: "/disclaimer",
    }),
  component: () => (
    <LegalPage
      kicker="Legal"
      title="Disclaimer"
      lead="A plain statement of what Veeren Drive Connect is, what it isn't, and how the information on this site should be treated."
      sections={[
        {
          heading: "Independence",
          body: [
            "Veeren Drive Connect is an independent information and assistance resource. We are not SiriusXM, and we are not an official, authorised or appointed representative, dealer, agent or support channel of SiriusXM.",
            "We are equally not affiliated with any vehicle manufacturer, audio brand, retailer or installer.",
          ],
        },
        {
          heading: "Trademarks",
          body: [
            "All product, brand, service and company names referenced on this site are the property of their respective owners. They are used only for identification and informational purposes and do not imply endorsement or association.",
          ],
        },
        {
          heading: "General information only",
          body: [
            "Content on this site describes how in-car audio systems, connectivity and audio services generally work. It is not tailored to any individual vehicle, subscription or region.",
            "Always confirm vehicle-specific details with your manufacturer, your owner's manual, a qualified installer, or the relevant service provider.",
          ],
        },
        {
          heading: "No guarantees",
          body: [
            "We make no guarantee regarding compatibility, coverage, availability, pricing, performance or the outcome of any action taken based on information published here.",
            "We do not publish statistics, testimonials, awards or rankings, because we do not have verified ones to publish.",
          ],
        },
        {
          heading: "No account or billing access",
          body: [
            "We cannot view, create, modify, transfer or cancel any subscription or account. Those matters must be handled directly with the provider concerned.",
          ],
        },
        {
          heading: "Safety",
          body: [
            "Do not adjust audio settings, screens or devices while driving. Follow all applicable road safety laws in your jurisdiction.",
          ],
        },
        {
          heading: "External links",
          body: [
            "Where this site references external organisations, we are not responsible for the content, accuracy or policies of those third parties.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this disclaimer can be raised through the Contact & Assistance page. [PLACEHOLDER — direct legal contact details not yet supplied.]",
          ],
        },
      ]}
    />
  ),
});
