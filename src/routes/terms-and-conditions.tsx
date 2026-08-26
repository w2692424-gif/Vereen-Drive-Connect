import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    seo({
      title: "Terms & Conditions — Veeren Drive Connect",
      description:
        "The terms that apply to using veerendriveconnect.com, including the scope of information provided and the limits of that information.",
      path: "/terms-and-conditions",
    }),
  component: () => (
    <LegalPage
      kicker="Legal"
      title="Terms & Conditions"
      lead="These terms apply to your use of veerendriveconnect.com and to any information or assistance obtained through it."
      sections={[
        {
          heading: "Acceptance",
          body: [
            "By using this website you agree to these terms. If you do not agree, please do not use the site.",
          ],
        },
        {
          heading: "Nature of the service",
          body: [
            "Veeren Drive Connect provides general information, guidance and customer assistance relating to in-car audio, infotainment, connectivity and connected listening.",
            "We do not sell subscriptions, install or repair equipment, or manage accounts on behalf of any provider.",
          ],
        },
        {
          heading: "No affiliation",
          body: [
            "Veeren Drive Connect is independent. We are not SiriusXM and are not an official, authorised or appointed representative, dealer or agent of SiriusXM or of any vehicle manufacturer, audio brand or service provider.",
            "Third-party names are used for identification and informational purposes only and remain the property of their respective owners.",
          ],
        },
        {
          heading: "Accuracy and limits of information",
          body: [
            "Information here is general and may not apply to your specific vehicle, region or subscription. Features and services change over time.",
            "Nothing on this site is a guarantee of compatibility, availability, coverage, pricing or outcome. Always confirm specifics with your vehicle manufacturer or the relevant service provider.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You agree not to misuse the site, attempt to disrupt it, or submit unlawful, misleading or abusive content through any form.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The Veeren Drive Connect name, brand mark, written content and page designs are owned by the operator of this site and may not be reproduced without permission.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the fullest extent permitted by applicable law, Veeren Drive Connect is not liable for any loss arising from reliance on general information published on this site.",
            "[PLACEHOLDER — jurisdiction-specific liability wording requires the operating entity's legal details, which have not been supplied.]",
          ],
        },
        {
          heading: "Paid services",
          body: [
            "[PLACEHOLDER — if any paid service is offered in future, its scope, pricing and terms will be stated explicitly here before purchase. No paid service terms are described because none have been supplied.]",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "[PLACEHOLDER — governing law and jurisdiction not yet supplied.]",
          ],
        },
        {
          heading: "Changes",
          body: [
            "These terms may be updated. Continued use of the site after an update constitutes acceptance of the revised terms.",
          ],
        },
      ]}
    />
  ),
});
