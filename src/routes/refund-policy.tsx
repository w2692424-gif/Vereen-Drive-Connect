import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/refund-policy")({
  head: () =>
    seo({
      title: "Refund Policy — Veeren Drive Connect",
      description:
        "Our position on refunds, and where subscription or billing refunds must actually be requested.",
      path: "/refund-policy",
    }),
  component: () => (
    <LegalPage
      kicker="Legal"
      title="Refund Policy"
      lead="This page explains our refund position and, importantly, where refunds for third-party subscriptions must be requested."
      sections={[
        {
          heading: "Scope",
          body: [
            "This policy covers charges made by Veeren Drive Connect only. It does not cover subscriptions, hardware or services purchased from any other company.",
          ],
        },
        {
          heading: "Third-party subscriptions",
          body: [
            "We do not process payments for satellite radio, streaming services, vehicle manufacturers or retailers, and we cannot issue refunds on their behalf.",
            "Refunds for those services are governed entirely by the provider's own published terms and must be requested directly from them, or through the payment method used.",
          ],
        },
        {
          heading: "Charges by Veeren Drive Connect",
          body: [
            "[PLACEHOLDER — details of any paid services, pricing and refund eligibility have not been supplied. If and when paid services are offered, their refund terms will be published here in full before purchase.]",
          ],
        },
        {
          heading: "How to request a refund",
          body: [
            "[PLACEHOLDER — refund request process and contact channel not yet supplied. In the meantime, use the Contact & Assistance page to reach us.]",
          ],
        },
        {
          heading: "Processing time",
          body: [
            "[PLACEHOLDER — refund processing time not yet supplied. We do not publish a timeframe we cannot commit to.]",
          ],
        },
        {
          heading: "Disputes",
          body: [
            "If a charge from a third-party provider is disputed, raise it with that provider or your payment method issuer. We have no access to their systems and cannot intervene.",
          ],
        },
      ]}
    />
  ),
});
