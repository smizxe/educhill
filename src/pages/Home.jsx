import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { StudentView } from '../components/StudentView';
import { Features } from '../components/Features';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { ContactFormSection } from '../components/ContactFormSection';
import { SEO } from '../components/SEO';

export const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <main className="relative z-10">
            <SEO
                title="Educhill - Teach English Online with AI Grading"
                description="Educhill is the ultimate platform for English teachers. Automate grading, manage classes, and create interactive exercises with AI. Save time and teach smarter."
                canonical="https://educhill.net/"
            />
            {/* Ambient Background handles its own rendering in Layout */}
            <Hero />
            <StudentView />
            <Features />
            <Pricing />
            <Testimonials />
            <ContactFormSection />
        </main>
    );
};
