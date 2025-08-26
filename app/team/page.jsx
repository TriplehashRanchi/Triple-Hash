
'use client';

import NavBar from '../../components/NavBar';
import Team from '../../components/Team/Team';
import Card from '../../components/Team/Card';
import Footer from '../../components/Footer';
import CallToAction from '../../components/CallToAction';

export default function HomePage() {
  return (
    <>
      <div >
        <NavBar />
        <Card/>
        <Team />
        <CallToAction/>
        <Footer/>
      </div>

    </>

  );
}