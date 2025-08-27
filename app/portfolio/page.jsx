import React from 'react'
import NavBar from '../../components/NavBar'
import TestimonialsSection from '../../components/TestimonialsSection'
import Footer from '../../components/Footer'
import CallToAction from '../../components/CallToAction'
import Portfolio from '../../components/Portfolio/Portfolio'


const page = () => {
    return (
        <div>
            
            <Portfolio />
            <CallToAction />
            <TestimonialsSection />
            
        </div>
    )
}

export default page
