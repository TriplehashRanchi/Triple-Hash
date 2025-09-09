"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "../../components/Gsap/ScrollReveal";

export default function TermsPage() {
    const [lastUpdated, setLastUpdated] = useState("");

    useEffect(() => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        const now = new Date();
        const formattedDate = now.toLocaleDateString("en-GB", options).replace(",", "");
        setLastUpdated(formattedDate);
    }, []);

    return (
        <div className="bg-[#0D0816]">
            <section
                id="terms"
                className="max-w-[1360px] mx-auto w-full flex-1 flex flex-col items-center rounded-xl overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-14 sm:pb-24 lg:pb-30 px-4 lg:px-8"
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
                            Terms & Conditions
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


                <div className="z-50 w-full lg:w-5xl px-2 sm:px-4 lg:px-0">
                    <p className="text-[#C4BBD3] description mb-6 leading-relaxed break-words">
                        These Terms and Conditions, along with privacy policy or other terms
                        (“Terms”) constitute a binding agreement by and between TRIPLE HASH,
                        (“Website Owner” or “we” or “us” or “our”) and you (“you” or
                        “your”) and relate to your use of our website, goods (as applicable)
                        or services (as applicable) (collectively, “Services”).
                    </p>
                    <p className="text-[#C4BBD3] mb-6 description leading-relaxed break-words">
                        By using our website and availing the Services, you agree that you
                        have read and accepted these Terms (including the Privacy Policy).
                        We reserve the right to modify these Terms at any time and without
                        assigning any reason. It is your responsibility to periodically
                        review these Terms to stay informed of updates.
                    </p>
                    <p className="text-[#C4BBD3] mb-6 description leading-relaxed break-words">
                        The use of this website or availing of our Services is subject to
                        the following terms of use:
                    </p>

                    <ol className="list-decimal list-inside space-y-4 text-[#C4BBD3] description leading-relaxed pl-4 sm:pl-5">
                        <li>
                            To access and use the Services, you agree to provide true, accurate
                            and complete information to us during and after registration, and
                            you shall be responsible for all acts done through the use of your
                            registered account.
                        </li>
                        <li>
                            Neither we nor any third parties provide any warranty or guarantee
                            as to the accuracy, timeliness, performance, completeness or
                            suitability of the information and materials offered on this
                            website or through the Services, for any specific purpose. You
                            acknowledge that such information and materials may contain
                            inaccuracies or errors and we expressly exclude liability for any
                            such inaccuracies or errors to the fullest extent permitted by law.
                        </li>
                        <li>
                            Your use of our Services and the website is solely at your own
                            risk and discretion. You are required to independently assess and
                            ensure that the Services meet your requirements.
                        </li>
                        <li>
                            The contents of the Website and the Services are proprietary to Us
                            and you will not have any authority to claim any intellectual
                            property rights, title, or interest in its contents.
                        </li>
                        <li>
                            You acknowledge that unauthorized use of the Website or the
                            Services may lead to action against you as per these Terms or
                            applicable laws.
                        </li>
                        <li>You agree to pay us the charges associated with availing the Services.</li>
                        <li>
                            You agree not to use the website and/ or Services for any purpose
                            that is unlawful, illegal or forbidden by these Terms, or Indian
                            or local laws that might apply to you.
                        </li>
                        <li>
                            You agree and acknowledge that website and the Services may
                            contain links to other third party websites. On accessing these
                            links, you will be governed by the terms of use, privacy policy and
                            such other policies of such third party websites.
                        </li>
                        <li>
                            You understand that upon initiating a transaction for availing the
                            Services you are entering into a legally binding and enforceable
                            contract with the us for the Services.
                        </li>
                        <li>
                            You shall be entitled to claim a refund of the payment made by you
                            in case we are not able to provide the Service. The timelines for
                            such return and refund will be according to the specific Service
                            you have availed or within the time period provided in our policies
                            (as applicable). In case you do not raise a refund claim within the
                            stipulated time, then this would make you ineligible for a refund.
                        </li>
                        <li>
                            Notwithstanding anything contained in these Terms, the parties
                            shall not be liable for any failure to perform an obligation under
                            these Terms if performance is prevented or delayed by a force
                            majeure event.
                        </li>
                        <li>
                            These Terms and any dispute or claim relating to it, or its
                            enforceability, shall be governed by and construed in accordance
                            with the laws of India.
                        </li>
                        <li>
                            All disputes arising out of or in connection with these Terms shall
                            be subject to the exclusive jurisdiction of the courts in HATIA,
                            JHARKHAND.
                        </li>
                        <li>
                            All concerns or communications relating to these Terms must be
                            communicated to us using the contact information provided on this
                            website.
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    );
}
