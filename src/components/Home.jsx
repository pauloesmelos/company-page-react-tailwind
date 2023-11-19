import React from 'react';
import Analytics from './Analytics';
import Cards from './Cards';
import Footer from './Footer';
import Hero from './Hero';
import NavBar from './NavBar';
import Newsletter from './Newsletter';
import SubFooter from './SubFooter';

const Home = () => {
  return (
    <main>
        <NavBar />
        <Hero />
        <Analytics />
        <Newsletter />
        <Cards />
        <Footer />
        <SubFooter />
    </main>
  )
}

export default Home;