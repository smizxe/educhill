import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="app-container" className="pt-8 pb-20 px-4 min-h-screen flex flex-col items-center justify-center">
            <SEO
                title="About Educhill - Our Mission & Team"
                description="Founded by teachers for teachers. Educhill's mission is to reduce administrative workload for English educators using advanced AI technology."
                canonical="https://educhill.net/about"
            />

            {/* Hero Title */}
            <h1 className="font-newsreader text-5xl md:text-7xl text-slate-900 text-center mb-12 aura-animate-fade-up">
                Founded by <span className="italic text-indigo-600">Educhill</span>.
            </h1>

            {/* Profile Card */}
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-start aura-animate-fade-up delay-200">

                {/* Left: Image (Giang Vuong) */}
                <div className="md:col-span-5 relative group">
                    <div
                        className="absolute inset-0 bg-indigo-200 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500">
                    </div>
                    {/* Image Container */}
                    <div
                        className="relative overflow-hidden rounded-[2rem] shadow-xl aspect-[3/4] group-hover:shadow-2xl transition-all duration-500">
                        <img id="founder-img" src="/assets/portrait.jpg" alt="Giang Vuong"
                            className="w-full h-full object-cover transition-all duration-700" />

                        {/* Overlay Controls (Hidden by default, shown on hover) */}
                        <div
                            className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/40 text-white transition-all transform hover:scale-110 active:scale-95">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="m15 18-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                className="p-2 rounded-full bg-white/20 backdrop-blur-md border border-white/40 hover:bg-white/40 text-white transition-all transform hover:scale-110 active:scale-95">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <path d="m9 18 6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="md:col-span-7 flex flex-col justify-center h-full space-y-8 p-4">

                    <div>
                        <h2 className="text-4xl text-slate-900 font-newsreader font-medium mb-2">Giang Vuong</h2>
                        <p className="text-indigo-600 font-medium tracking-wide uppercase text-sm">Founder - CEO</p>
                    </div>

                    <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-newsreader">
                        <p>
                            Giang Vuong is also the founder of <a href="https://www.yangai.site" target="_blank" rel="noopener noreferrer"
                                className="text-indigo-600 underline decoration-indigo-300 hover:decoration-indigo-600 transition-all">Yangai</a>
                            - an agency specializing in Web, App, and AI solutions for enterprises.
                        </p>
                        <p>
                            Backed by his experience as an English teacher, Giang deeply understands the "pain points"
                            regarding time and management pressures that teachers and training centers face daily.
                        </p>
                        <p className="text-slate-900 font-medium italic">
                            "Educhill was born not just as a tool, but as a solution to free teachers from administrative
                            burdens, allowing them to focus on what matters most: Inspiring students."
                        </p>
                    </div>

                    {/* Signature / Link */}
                    <div className="pt-6 border-t border-indigo-100">
                        <a href="https://www.yangai.site" target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-900 font-medium hover:gap-4 transition-all group">
                            Learn more about me at Yangai
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="text-indigo-600">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};
