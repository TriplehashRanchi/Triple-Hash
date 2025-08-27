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
import TestimonialsSection from '../../components/TestimonialsSection'

import styles from '../../app/services/Home.module.css';

const page = () => {
    return (
        <div>
            
            <Hero />
            <div className={styles.container}>
                <main className={styles.main}>
                    <LayoutSection />
                </main>
            </div>
            <ServiceTaxt />
            <StackingCards />
            <PlatformShowcase />
           
            <WorkProcess />
            <CallToAction />
            <TestimonialsSection />
          

        </div>
    )
}

export default page
