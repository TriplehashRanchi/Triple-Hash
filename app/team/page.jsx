
'use client';

import NavBar from '../../components/NavBar';
import Team from '../../components/Team/Team';
import Card from '../../components/Team/Card';
import Footer from '../../components/Footer';

export default function HomePage() {
  return (
    <>
      <div className='bg-[#0D0816]'>
        <NavBar />
        <Card/>
        <Team />
        <Footer/>
      </div>

    </>

  );
}