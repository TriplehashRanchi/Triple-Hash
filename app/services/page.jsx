import React from 'react'
import StackingCards from '../../components/Services/StackingCards'
import PlatformShowcase from '../../components/Services/PlatformShowcase'
import Hero from '../../components/Services/Hero'
import ServiceTaxt from '../../components/Services/ServiceTaxt'
import LayoutSection from '../../components/Services/LayoutSection'
import WorkProcess from '../../components/Services/WorkProcess'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'

import styles from '../../app/services/Home.module.css';

const page = () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <div className={styles.container}>
                <main className={styles.main}>
                    <LayoutSection />
                </main>
            </div>
            <ServiceTaxt />
            <StackingCards />
            <PlatformShowcase />
            {/* Set a base background if needed */}
            <WorkProcess />
            <CallToAction />
            <Footer />

        </div>
    )
}

export default page
