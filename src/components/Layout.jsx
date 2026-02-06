import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AmbientBackground } from './AmbientBackground';
import { Header } from './Header';
import { Footer } from './Footer';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        // 1. General Scroll Reveal (CSS Animations)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-enter-active", "in-view");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        // We rely on a small timeout to let the new page content render before we querySelectorAll
        // When navigating to a hash, we might need to wait a bit more or check if we are already scrolled
        const timer = setTimeout(() => {
            if (location.hash) {
                const element = document.querySelector(location.hash);
                if (element) {
                    // Adding a small delay or ensuring layout is stable
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                }
            }

            const scrollElements = document.querySelectorAll('.scroll-enter, .aura-animate-fade-up, .aura-animate-fade');
            scrollElements.forEach(el => {
                // Immediate check if element is already in view (e.g. above fold or we jumped to it)
                // But IntersectionObserver usually handles the initial check on observe()
                observer.observe(el);
            });
        }, 100);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [location.pathname]); // Re-run on path change

    return (
        <>
            <AmbientBackground />
            <Header />

            <main className="pt-24 md:pt-32 relative z-10 min-h-screen">
                <Outlet />
            </main>

            <Footer />

            <LanguageSwitcher />
        </>
    );
};
