import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <>
      <div className="mb-5 flex min-h-[calc(100vh-100px)] flex-grow flex-col sm:min-h-[calc(100vh-76px)]">
        <Hero/>
        <Footer />
      </div>
    </>
  );
}
