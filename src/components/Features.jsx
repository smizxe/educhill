import React from 'react';

export const Features = ({ content }) => {
    const triggerExplosion = (lang) => {
        const pdf = document.getElementById(`pdf-card-${lang}`);
        const list = document.getElementById(`quiz-list-${lang}`);

        if (!pdf || !list) return;

        // Explode Effect
        pdf.style.transform = "scale(2)";
        pdf.style.opacity = "0";
        pdf.style.filter = "blur(10px)";
        pdf.style.pointerEvents = "none";

        // Reveal List
        setTimeout(() => {
            list.classList.remove("opacity-0", "scale-90");
            list.classList.add("opacity-100", "scale-100");
        }, 150);
    };

    return (
        <section id="features" className="w-full max-w-7xl mx-auto mb-24 px-4">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-4">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6 scroll-enter">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-sans font-medium">{content.number}</span>
                        <span className="h-px w-20 bg-gradient-to-r to-transparent from-indigo-200"></span>
                    </div>
                    <h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-serif scroll-enter delay-100 leading-tight">
                        {content.titleStart} <span className="glass-box px-4 mx-2"><span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent italic font-light">{content.titleHighlight}</span></span>
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-sans font-medium scroll-enter delay-200">
                        {content.description}
                    </p>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
                {/* Card 1: Interactive Exercises */}
                <div className="feature-card flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-sm gap-8 scroll-enter group hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <line x1="12" y1="19" x2="12" y2="23" />
                                <line x1="8" y1="23" x2="16" y2="23" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium text-slate-900">{content.cards.one.title}</h3>
                            <p className="text-slate-500 mt-1 font-sans font-medium">{content.cards.one.desc}</p>
                        </div>
                    </div>

                    <div className="bg-indigo-50/30 rounded-2xl p-6 border border-indigo-100 relative overflow-hidden h-48 flex items-center justify-center">
                        {/* Animation Container */}
                        <div className="relative w-48 h-24 flex items-center justify-center">
                            {/* Stage 1: Inputs */}
                            <div className="absolute left-0 opacity-0 animate-[featureInput_4s_infinite_ease-in-out]">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500 border border-indigo-50">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                </div>
                            </div>
                            <div className="absolute right-0 opacity-0 animate-[featureInput_4s_infinite_ease-in-out]" style={{ animationDelay: '0.2s' }}>
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-indigo-500 border border-indigo-50">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                </div>
                            </div>

                            {/* Stage 2: Processing */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[featureProcess_4s_infinite_ease-in-out]">
                                <div className="w-14 h-14 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-200 flex items-center justify-center text-white relative">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                    <div className="absolute inset-0 border-2 border-indigo-400 rounded-xl animate-ping opacity-50"></div>
                                </div>
                            </div>

                            {/* Stage 3: Result */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-[featureResult_4s_infinite_ease-in-out]">
                                <div className="px-4 py-2 bg-white rounded-lg shadow-md border border-emerald-100 flex items-center gap-2 transform scale-110">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span className="text-sm font-bold text-slate-700">Pronunciation: <span className="text-emerald-600">95%</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Student Progress */}
                <div className="feature-card flex flex-col transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-sm gap-8 scroll-enter delay-100 group hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium tracking-tight text-slate-900">{content.cards.two.title}</h3>
                            <p className="text-slate-500 mt-1 font-sans font-medium">{content.cards.two.desc}</p>
                        </div>
                    </div>
                    <div className="bg-indigo-50/30 rounded-2xl p-6 border border-indigo-100 h-48 relative">
                        <div className="flex items-end justify-between h-32 px-4 pb-2 border-b border-indigo-200 border-dashed">
                            <div className="w-8 bg-indigo-200 rounded-t-lg h-[40%] group-hover:h-[50%] transition-all duration-1000"></div>
                            <div className="w-8 bg-indigo-300 rounded-t-lg h-[60%] group-hover:h-[70%] transition-all duration-1000 delay-100"></div>
                            <div className="w-8 bg-indigo-400 rounded-t-lg h-[50%] group-hover:h-[85%] transition-all duration-1000 delay-200"></div>
                            <div className="w-8 bg-indigo-500 rounded-t-lg h-[75%] group-hover:h-[90%] transition-all duration-1000 delay-300"></div>
                            <div className="w-8 bg-indigo-600 rounded-t-lg h-[85%] group-hover:h-[95%] transition-all duration-1000 delay-400 relative">
                                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity delay-500">A+</span>
                            </div>
                        </div>
                        <div className="flex justify-between px-4 mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                            <span className="w-8 text-center">Minh</span>
                            <span className="w-8 text-center">Henry</span>
                            <span className="w-8 text-center">Giang</span>
                            <span className="w-8 text-center">Stacy</span>
                            <span className="w-8 text-center">Owen</span>
                        </div>
                    </div>
                </div>

                {/* Card 3: Magic Import (Result to Quiz) */}
                <div className="lg:col-span-2 feature-card flex flex-col md:flex-row transition-all duration-700 ease-out bg-white border-gray-100 border rounded-3xl p-8 shadow-sm gap-8 scroll-enter group hover:shadow-xl hover:-translate-y-1">
                    <div className="flex-1">
                        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        </div>
                        <h3 className="text-2xl font-medium tracking-tight text-slate-900">{content.cards.three.title}</h3>
                        <p className="text-slate-500 mt-2 font-sans font-medium text-lg max-w-md">
                            {content.cards.three.desc}
                        </p>
                        <button className="mt-8 px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                            {content.cards.three.button}
                        </button>
                    </div>

                    <div className="flex-1 bg-slate-50 rounded-2xl border border-gray-100 relative overflow-hidden h-64 md:h-auto flex items-center justify-center p-8">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* PDF Card */}
                            <div id="pdf-card-en" onClick={() => triggerExplosion('en')} className="w-24 h-32 bg-white border border-gray-200 shadow-sm rounded-lg flex flex-col items-center justify-center z-20 cursor-pointer hover:scale-105 hover:border-indigo-400 transition-all duration-300 relative group">
                                <div className="h-8 w-8 bg-red-100 rounded flex items-center justify-center mb-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 0 0 2-2V9.414a1 1 0 0 0-.293-.707l-5.414-5.414A1 1 0 0 0 12.586 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" /></svg>
                                </div>
                                <span className="text-[10px] font-bold text-slate-500 pointer-events-none">{content.cards.three.clickMe}</span>
                                <div className="absolute -inset-1 rounded-xl border-2 border-indigo-400/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none"></div>
                            </div>

                            {/* Quiz List (Hidden) */}
                            <div id="quiz-list-en" className="absolute flex flex-col gap-2 z-10 w-56 opacity-0 scale-90 pointer-events-none transition-all duration-500 ease-out">
                                <div className="bg-white border border-indigo-50 shadow-md rounded-lg p-2.5 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center shrink-0"><span className="text-[10px] font-bold text-indigo-600">1</span></div>
                                    <span className="text-[10px] font-bold text-slate-600">{content.cards.three.quizList[0]}</span>
                                </div>
                                <div className="bg-white border border-indigo-50 shadow-md rounded-lg p-2.5 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center shrink-0"><span className="text-[10px] font-bold text-indigo-600">2</span></div>
                                    <span className="text-[10px] font-bold text-slate-600">{content.cards.three.quizList[1]}</span>
                                </div>
                                <div className="bg-white border border-indigo-50 shadow-md rounded-lg p-2.5 flex items-center gap-3">
                                    <div className="w-6 h-6 rounded bg-indigo-100 flex items-center justify-center shrink-0"><span className="text-[10px] font-bold text-indigo-600">3</span></div>
                                    <span className="text-[10px] font-bold text-slate-600">{content.cards.three.quizList[2]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
