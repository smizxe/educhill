import React from 'react';
import { Hero } from '../components/Hero';
import { StudentView } from '../components/StudentView';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { ContactFormSection } from '../components/ContactFormSection';

export const Home = () => {
    return (
        <>
            <Hero />
            <StudentView />
            <Features />
            <Pricing />
            <Testimonials />
            <ContactFormSection />
        </>
    );
};
