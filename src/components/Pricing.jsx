import React from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
    return (
        <section id="pricing" className="w-full max-w-7xl mx-auto mb-32 px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto scroll-enter">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="h-px w-12 bg-indigo-200"></span>
                    <span className="text-indigo-600 text-sm font-bold uppercase tracking-wider">Pricing</span>
                    <span className="h-px w-12 bg-indigo-200"></span>
                </div>
                <h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-serif tracking-tight">
                    Plans for every stage
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-sans font-medium">
                    Start small, scale as you grow. Transparent pricing for educators and institutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Plan 1: Individual */}
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 scroll-enter delay-100 relative group">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">Individual</h3>
                    <p className="text-slate-500 text-sm mb-6 font-medium">For solo teachers</p>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Best plan for solo teachers</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {[
                            "AI Auto-grading",
                            "Up to 50 students",
                            "Basic Reports"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a href="/contact" className="block w-full py-3 px-6 rounded-xl bg-slate-50 text-slate-900 font-bold text-center border border-slate-200 hover:bg-slate-100 transition-colors">
                        Contact Us
                    </a>
                </div>

                {/* Plan 2: Center (Featured) */}
                <div className="bg-white rounded-[2rem] p-8 border border-indigo-100 shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] transform md:-translate-y-4 scroll-enter delay-200 relative z-10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                        Most Popular
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">Center</h3>
                    <p className="text-indigo-500 text-sm mb-6 font-medium">For growing centers</p>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Best for growing centers</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                            <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-indigo-600" strokeWidth={3} />
                            </div>
                            Running on <strong>Everything in Individual</strong>
                        </li>
                        {[
                            "Team Management",
                            "Up to 500 students",
                            "Priority Support"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-indigo-600" strokeWidth={3} />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a href="/contact" className="block w-full py-4 px-6 rounded-xl bg-indigo-600 text-white font-bold text-center shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all">
                        Contact Us
                    </a>
                </div>

                {/* Plan 3: Enterprise */}
                <div className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 scroll-enter delay-300 relative group">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">Enterprise</h3>
                    <p className="text-slate-500 text-sm mb-6 font-medium">For large institutions</p>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Best for large institutions</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Unlimited students",
                            "LMS Integration",
                            "White-labeling",
                            "Dedicated Success Manager"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                <Check className="w-5 h-5 text-slate-400 shrink-0" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a href="/contact" className="block w-full py-3 px-6 rounded-xl bg-white text-slate-900 font-bold text-center border border-slate-200 hover:border-slate-300 transition-colors">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};
