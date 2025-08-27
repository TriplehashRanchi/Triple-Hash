
'use client';

import NavBar from '../../components/NavBar';
import Team from '../../components/Team/Team';
import Card from '../../components/Team/Card';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';
import TestimonialsSection from '../../components/TestimonialsSection'

export default function HomePage() {
  return (
    <>
      <div >

        <Card />
        <Team />
        <CallToAction />
        <TestimonialsSection />

      </div>

    </>

  );
}