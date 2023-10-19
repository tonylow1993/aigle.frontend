import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import HappyClient from '../HappyClient/HappyClient';
import Header from '../Header/Header';

const Home = () => {
    return (
        <main>
            <Header/>
            <About/>
            <HappyClient/>
            <Contact/>
            <Footer/>
            {/* <ScrollTop/>   */}
        </main>
    );
};

export default Home;