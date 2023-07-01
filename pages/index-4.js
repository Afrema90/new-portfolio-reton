import React from 'react';
import Navbar from '../components/LandingPageFour/Navbar';
import MainBanner from '../components/LandingPageFour/MainBanner';
import Works from '../components/LandingPageFour/Works';
import CaseStudy from '../components/LandingPageFour/CaseStudy';
import AboutMe from '../components/LandingPageFour/AboutMe';
import Testimonials from '../components/LandingPageFour/Testimonials';
import BlogPost from '../components/LandingPageFour/BlogPost';
import ContactForm from '../components/LandingPageFour/ContactForm';
import Footer from '../components/LandingPageFour/Footer';

const Index4 = () => {
    return (
        <> 
            <Navbar />

            <MainBanner />

            <Works />

            <CaseStudy />

            <AboutMe />

            <Testimonials />

            <BlogPost />

            <ContactForm />
            
            <Footer />
        </>
    )
}

export default Index4;