"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "../../components/Gsap/ScrollReveal";

export default function RefundPage() {
    const [lastUpdated, setLastUpdated] = useState("");

    useEffect(() => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const now = new Date();
        const formattedDate = now.toLocaleDateString("en-GB", options).replace(",", "");
        setLastUpdated(formattedDate);
    }, []);

    return (
        <div className="bg-[#0D0816] ">
            <section
                id="policy"
                className="max-w-[1360px] mx-auto w-full flex-1 flex flex-col rounded-xl items-center overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-14 sm:pb-24 lg:pb-30 px-4 lg:px-8"
            >
                <div className="relative w-full flex flex-col justify-center mb-12 sm:mb-16 lg:mb-20">
                    <ScrollReveal className="z-20">
                        <h2
                            style={{
                                backgroundImage:
                                    "linear-gradient(180deg, #ffffff1a, #0003 58%), linear-gradient(140deg, #fff, #7c65a1)",
                                WebkitBackgroundClip: "text",
                            }}
                            className="headline z-10 text-transparent bg-clip-text pt-10 sm:pt-14 lg:pt-20 text-center"
                        >
                            Cancellation & Refund Policy
                        </h2>

                        <p className="mt-3 sm:mt-4 text-[#C4BBD3] z-10 text-center px-2">
                            <strong>Last updated on </strong>{lastUpdated}
                        </p>
                    </ScrollReveal>

                    <div
                        className="absolute -bottom-60 sm:-bottom-72 lg:-bottom-80 left-1/2 -translate-x-1/2 w-[420px] sm:w-[800px] lg:w-[1000px] h-[420px] sm:h-[800px] lg:h-[1000px] rounded-full blur-[90px] sm:blur-[110px] lg:blur-[120px] opacity-60 pointer-events-none z-0"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, #611610, #2E0D32 100%)",
                        }}
                    />
                </div>

                {/* Content: full width on mobile; preserve desktop width */}
                <div className="z-50 w-full lg:w-5xl px-2 sm:px-4 lg:px-0">
                    <p className="text-[#C4BBD3] mb-6 subheadline leading-relaxed">
                        At <strong>TRIPLE HASH</strong>, we build custom software—apps, websites, and SaaS products.
                        Because most engagements involve tailored work and non-recoverable effort, our cancellation and
                        refund terms differ for <em>project-based services</em> and <em>subscriptions</em> (SaaS/maintenance).
                    </p>

                    <ul className="list-disc list-inside space-y-4 description text-[#C4BBD3] leading-relaxed pl-4 sm:pl-5">
                        <li>
                            <strong>Scope & Definitions:</strong> “Project-based services” include discovery, UX/UI design,
                            custom development, integrations, testing, deployment, and one-time deliverables. “Subscriptions”
                            include SaaS plans, retainers, and ongoing maintenance/support.
                        </li>

                        <li>
                            <strong>Eligibility for Cancellation (Immediate After Order):</strong> You may request cancellation
                            within <strong>24 hours</strong> of payment/PO confirmation <em>and</em> before work commences.
                            If approved, we will process a full or partial refund after deducting any payment gateway charges.
                        </li>

                        <li>
                            <strong>Project-Based Services (Milestones):</strong> For projects billed by milestones:
                            <ul className="list-disc list-inside mt-2 space-y-2 pl-4">
                                <li>
                                    <strong>Discovery/Planning/Strategy fees are non-refundable</strong> once the engagement starts,
                                    as research, scoping, and team allocation begin immediately.
                                </li>
                                <li>
                                    <strong>Design/Prototype</strong> fees become non-refundable after design approval or delivery of
                                    first draft, whichever is earlier.
                                </li>
                                <li>
                                    <strong>Development/Implementation</strong> milestones are non-refundable once code, sprints, or
                                    environments are provisioned and work logs are recorded.
                                </li>
                                <li>
                                    If you cancel mid-project, you’ll be invoiced for work completed up to the request date
                                    (including 3rd-party costs/licenses). Any remaining advance, if applicable, will be adjusted
                                    against dues. Source files/deliverables are handed over for paid milestones only.
                                </li>
                            </ul>
                        </li>

                        <li>
                            <strong>Subscriptions (SaaS, Maintenance & Retainers):</strong> You can cancel anytime to stop future
                            renewals. <strong>No refunds</strong> for the current billing period once it has started.
                            Annual prepayments, if cancelled early, are typically non-refundable unless required by law
                            or explicitly stated in your plan.
                        </li>

                        <li>
                            <strong>Digital Goods & Licenses:</strong> API credits, plugin licenses, domain/hosting purchases,
                            and third-party subscriptions procured on your behalf are <strong>non-refundable</strong>.
                        </li>

                        <li>
                            <strong>Change Requests vs. Cancellations:</strong> If outcomes differ from expectations, we will
                            address them via the agreed change-request process (which may affect scope, timeline, and cost).
                            This is not grounds for a refund once the relevant milestone work has begun.
                        </li>

                        <li>
                            <strong>Quality Issues:</strong> Report within <strong>3 days</strong> of delivery handover. We will
                            verify and fix defects that are within scope at no extra cost. Refunds are considered only when
                            we cannot reasonably deliver the agreed scope and a cure period has lapsed, at our sole discretion.
                        </li>

                        <li>
                            <strong>How to Request a Cancellation/Refund:</strong> Email us from your registered email at{" "}
                            <a href="mailto:connect@triplehash.in" className="underline">connect@triplehash.in</a>{" "}
                            with order details, invoice/PO, and reason. We may request access logs, work references,
                            and proof of issues to assess eligibility.
                        </li>

                        <li>
                            <strong>Refund Timeline:</strong> If a refund is approved, we typically initiate it within{" "}
                            <strong>5–10 business days</strong>. Your bank or payment gateway may require additional time
                            to reflect the amount. Any gateway/processing fees and non-recoverable third-party charges
                            will be deducted.
                        </li>

                        <li>
                            <strong>Chargebacks:</strong> Please contact us to resolve concerns before initiating a chargeback.
                            Unfounded chargebacks may result in account suspension and recovery of investigation and reversal costs.
                        </li>

                        <li>
                            <strong>Force Majeure & Dependencies:</strong> We’re not liable for delays/failures due to events
                            beyond our control (e.g., outages, regulatory actions). Refunds are not due for delays caused by
                            client dependencies such as late feedback, content, or approvals.
                        </li>

                        <li>
                            <strong>Governing Law:</strong> This policy is governed by the laws of India. Disputes, if any,
                            are subject to the courts of Ranchi, Jharkhand.
                        </li>

                        <li>
                            <strong>We do not ship physical goods.</strong> All services and deliverables are digital.
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
