import React, { useEffect } from 'react';
import { SEO } from '../components/SEO';

import { useLocation } from 'react-router-dom';
import { homeContent } from '../data/homeContent';

export const Contact = () => {
    const location = useLocation();
    const lang = location.pathname.startsWith('/vi') ? 'vi' : 'en';
    const content = homeContent[lang].contactPage;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <SEO
                title={content.seoTitle}
                description={content.seoDesc}
                canonical="https://educhill.net/contact"
            />
            <div className="pt-8 pb-20 px-4 flex flex-col items-center justify-center">
                {/* Hero Title */}
                <h1 className="font-newsreader text-5xl md:text-7xl text-slate-900 text-center mb-12 aura-animate-fade-up">
                    {content.titleStart} <span className="italic text-indigo-600">{content.titleHighlight}</span>.
                </h1>

                {/* Contact Form Section */}
                <div className="max-w-4xl w-full mx-auto text-center aura-animate-fade-up delay-200">
                    <div className="bg-indigo-900 rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                            <div
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[120px]">
                            </div>
                        </div>

                        <div className="relative z-10 max-w-2xl mx-auto">
                            <span
                                className="inline-block py-1 px-3 rounded-full bg-indigo-800/50 border border-indigo-700 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
                                {content.badge}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-newsreader mb-6 leading-tight">
                                {content.heading}
                            </h2>
                            <p className="text-lg text-indigo-200 mb-10 font-sans leading-relaxed">
                                {content.desc}
                            </p>

                            <div
                                className="bg-white/5 p-6 md:p-8 rounded-3xl border border-indigo-500/30 backdrop-blur-sm mb-10 text-left">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-indigo-200 text-sm font-bold mb-2 ml-1"
                                                htmlFor="name">{content.form.name}</label>
                                            <input
                                                className="w-full px-4 py-3 bg-indigo-900/50 border border-indigo-700 rounded-xl text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
                                                id="name" type="text" placeholder={content.form.namePlaceholder} />
                                        </div>
                                        <div>
                                            <label className="block text-indigo-200 text-sm font-bold mb-2 ml-1"
                                                htmlFor="email">{content.form.email}</label>
                                            <input
                                                className="w-full px-4 py-3 bg-indigo-900/50 border border-indigo-700 rounded-xl text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
                                                id="email" type="email" placeholder={content.form.emailPlaceholder} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-indigo-200 text-sm font-bold mb-2 ml-1"
                                            htmlFor="message">{content.form.message}</label>
                                        <textarea
                                            className="w-full px-4 py-3 bg-indigo-900/50 border border-indigo-700 rounded-xl text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors h-32"
                                            id="message" placeholder={content.form.messagePlaceholder}></textarea>
                                    </div>
                                    <button type="button"
                                        className="w-full px-8 py-4 bg-white text-indigo-900 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/20">
                                        {content.form.btn}
                                    </button>
                                </form>
                            </div>

                            <div className="flex flex-col items-center gap-6">
                                <div className="flex items-center gap-4 w-full justify-center opacity-50">
                                    <div className="h-px bg-indigo-400 flex-1"></div>
                                    <span className="text-indigo-300 text-sm font-medium uppercase tracking-wider">{content.orSchedule}</span>
                                    <div className="h-px bg-indigo-400 flex-1"></div>
                                </div>
                                <a href="https://calendly.com/vuonghoanggiang0811/30min" target="_blank"
                                    className="w-full sm:w-auto px-8 py-4 bg-transparent border border-indigo-500 text-white rounded-full font-bold hover:bg-indigo-800 transition-colors flex items-center justify-center gap-2 group">
                                    <svg className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {content.bookCall}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
