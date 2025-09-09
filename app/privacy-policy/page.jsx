"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "../../components/Gsap/ScrollReveal";

export default function PrivacyPolicyPage() {
    const [lastUpdated, setLastUpdated] = useState("");

    useEffect(() => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const formatted = new Date().toLocaleDateString("en-GB", options).replace(",", "");
        setLastUpdated(formatted);
    }, []);

    return (
        <div className="bg-[#0D0816]">
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
                            Privacy and Policy
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

                {/* Content Wrapper: full width on mobile; preserve desktop width */}
                <div className="w-full lg:w-5xl z-50 px-2 sm:px-4 lg:px-0">
                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">1. Introduction</h2>
                    <p className="text-[#C4BBD3] mb-6 description leading-relaxed break-words">
                        At <strong>Triple Hash</strong> (“we”, “our”, “us”), we are committed to protecting your privacy.
                        This Privacy Policy explains how we collect, use, store, and safeguard your personal information
                        when you interact with our apps, websites, and SaaS products. By using our services, you agree
                        to the practices described here.
                    </p>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">2. Information We Collect</h2>
                    <ul className="mb-6 description text-[#C4BBD3] list-disc list-inside space-y-2 sm:space-y-2.5 pl-4 sm:pl-5">
                        <li>
                            <strong>Personal Information:</strong> Name, email address, phone number, business details.
                        </li>
                        <li>
                            <strong>Account Information:</strong> Login credentials, role/permissions, user preferences.
                        </li>
                        <li>
                            <strong>Payment Information:</strong> Processed securely via trusted third-party gateways
                            (we never store card or banking details on our servers).
                        </li>
                        <li>
                            <strong>Technical Data:</strong> IP address, browser type, device details, usage logs,
                            cookies, and analytics identifiers.
                        </li>
                        <li>
                            <strong>Communications:</strong> Emails, chats, customer support inquiries, and feedback.
                        </li>
                    </ul>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">3. How We Use Your Information</h2>
                    <ul className="mb-6 description list-disc list-inside space-y-2 sm:space-y-2.5 text-[#C4BBD3] pl-4 sm:pl-5">
                        <li>To deliver and improve our apps, websites, and SaaS solutions.</li>
                        <li>To create and manage user accounts and provide secure access.</li>
                        <li>To process transactions, generate invoices, and manage subscriptions.</li>
                        <li>To send service updates, announcements, and promotional offers (with your consent).</li>
                        <li>To conduct analytics, improve user experience, and enhance product performance.</li>
                        <li>To detect, investigate, and prevent fraudulent or unauthorized activities.</li>
                        <li>To comply with legal, tax, and regulatory obligations.</li>
                    </ul>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">4. Cookies & Analytics</h2>
                    <p className="mb-6 description text-[#C4BBD3] leading-relaxed break-words">
                        We use cookies, pixels, and similar technologies to enhance website functionality,
                        remember your preferences, and analyze user behavior. Third-party tools like Google Analytics
                        may also be used. You can manage or disable cookies in your browser settings, but some
                        features may not work properly.
                    </p>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">5. Sharing of Information</h2>
                    <p className="mb-4 sm:mb-6 description text-[#C4BBD3] leading-relaxed">
                        We do not sell your personal data. We only share information when necessary with:
                    </p>
                    <ul className="mb-6 description list-disc list-inside space-y-2 sm:space-y-2.5 text-[#C4BBD3] pl-4 sm:pl-5">
                        <li>Trusted third-party providers (hosting, payments, analytics, cloud storage).</li>
                        <li>Law enforcement or regulatory bodies, if legally required.</li>
                        <li>Business successors, in case of a merger, acquisition, or restructuring (with prior notice).</li>
                    </ul>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">6. Data Retention</h2>
                    <p className="mb-6 description text-[#C4BBD3] leading-relaxed">
                        We retain personal information only for as long as necessary to provide our services or
                        as required by law. Once this period ends, data is securely deleted or anonymized.
                    </p>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">7. Your Rights</h2>
                    <ul className="mb-6 description list-disc list-inside space-y-2 sm:space-y-2.5 text-[#C4BBD3] pl-4 sm:pl-5">
                        <li>Request access to the personal data we hold about you.</li>
                        <li>Request correction or updates to your information.</li>
                        <li>Request deletion of your data (subject to legal and contractual obligations).</li>
                        <li>Opt-out of marketing communications anytime by following unsubscribe links.</li>
                    </ul>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">8. Security</h2>
                    <p className="mb-6 description text-[#C4BBD3] leading-relaxed">
                        We implement industry-standard security measures including encryption, access controls,
                        and regular monitoring. However, please note that no method of transmission or storage
                        is 100% secure.
                    </p>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">9. International Users</h2>
                    <p className="mb-6 description text-[#C4BBD3] leading-relaxed">
                        Our services may be accessed worldwide. By using our platforms, you consent to the
                        transfer and processing of your information in India or other jurisdictions where
                        our servers and partners operate.
                    </p>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">10. Changes to This Policy</h2>
                    <p className="mb-6 description text-[#C4BBD3] leading-relaxed">
                        We may update this Privacy Policy periodically to reflect changes in our practices,
                        technologies, or legal requirements. Updates will be posted on this page with the
                        revised date.
                    </p>

                    <h2 className="subheadline text-white mb-3 sm:mb-4 leading-tight">11. Contact Us</h2>
                    <p className="mb-4 sm:mb-6 description text-[#C4BBD3] leading-relaxed">
                        If you have any questions about this Privacy Policy or how your data is handled,
                        please reach us at:
                    </p>
                    <p className="mb-6 description text-[#C4BBD3] leading-relaxed">
                        <strong>Triple Hash</strong>
                        <br />
                        13E Om Prakash Nagar, Basargarh, Hatia, Ranchi, Jharkhand
                        <br />
                        Phone: +91 7568357351
                        <br />
                        Email: <a href="mailto:connect@triplehash.in">connect@triplehash.in</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
