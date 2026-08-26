import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    seo({
      title: "Privacy Policy — Veeren Drive Connect",
      description:
        "How Veeren Drive Connect handles information submitted through this website, what we ask for, and what we deliberately do not collect.",
      path: "/privacy-policy",
    }),
  component: () => (
    <LegalPage
      kicker="Legal"
      title="Privacy Policy"
      lead="This policy describes how information submitted through veerendriveconnect.com is treated. It is written to be accurate about current practice rather than exhaustive."
      sections={[
        {
          heading: "Information you provide",
          body: [
            "If you use our contact form, you may provide your name, email address, an optional phone number, vehicle information, a reason for contact and a message.",
            "You should only provide what is necessary to answer your question. Do not send account numbers, passwords, payment card details or other sensitive credentials.",
          ],
        },
        {
          heading: "How information is used",
          body: [
            "Information you submit is used solely to understand and respond to your enquiry about in-car audio, infotainment or connected listening.",
            "We do not sell information, and we do not use it to advertise third-party products to you.",
          ],
        },
        {
          heading: "Current form status",
          body: [
            "The contact form on this site currently operates as a front-end demonstration. It validates your input in the browser and does not transmit or store submissions. This section will be updated when message delivery is enabled.",
          ],
        },
        {
          heading: "Automatically collected information",
          body: [
            "[PLACEHOLDER — details of analytics, cookies or logging tools have not been supplied. No analytics or advertising trackers are described here because none have been specified for this site.]",
          ],
        },
        {
          heading: "Retention",
          body: [
            "[PLACEHOLDER — retention period for enquiry correspondence not yet supplied.]",
          ],
        },
        {
          heading: "Sharing with third parties",
          body: [
            "We do not share enquiry content with vehicle manufacturers, audio brands or service providers unless you explicitly ask us to do so.",
            "[PLACEHOLDER — any service providers used for hosting or email handling to be listed here once confirmed.]",
          ],
        },
        {
          heading: "Your choices",
          body: [
            "You may ask what information we hold about an enquiry, ask for it to be corrected, or ask for it to be deleted, using the contact details published on our Contact & Assistance page.",
            "[PLACEHOLDER — the specific statutory rights that apply depend on your jurisdiction and the operating entity's location, which have not been supplied.]",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "If this policy changes, the updated version will be published on this page with a revised effective date.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "[PLACEHOLDER — privacy contact email and postal address not yet supplied. Use the Contact & Assistance page in the meantime.]",
          ],
        },
      ]}
    />
  ),
});
