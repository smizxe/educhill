import React from 'react';
import { Check } from 'lucide-react';

export const Pricing = ({ content }) => {
    return (
        <section id="pricing" className="w-full max-w-7xl mx-auto mb-32 px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto scroll-enter">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="h-px w-12 bg-indigo-200"></span>
                    <span className="text-indigo-600 text-sm font-bold uppercase tracking-wider">{content.badge}</span>
                    <span className="h-px w-12 bg-indigo-200"></span>
                </div>
                <h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-serif tracking-tight">
                    {content.title}
                </h2>
                <p className="text-xl text-slate-500 leading-relaxed font-sans font-medium">
                    {content.description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {content.plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-[2rem] p-8 border relative scroll-enter delay-${(index + 1) * 100}
                        ${plan.popular
                                ? 'border-indigo-100 shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] transform md:-translate-y-4 z-10'
                                : (plan.name === "Enterprise" || plan.name === "Doanh nghiệp")
                                    ? 'border-slate-200 shadow-xl ring-1 ring-slate-900/5 overflow-hidden'
                                    : 'border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group'
                            }`}
                    >
                        {(plan.name === "Enterprise" || plan.name === "Doanh nghiệp") && (
                            <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border text-transparent opacity-20 pointer-events-none"></div>
                        )}
                        {(plan.name === "Enterprise" || plan.name === "Doanh nghiệp") && (
                            <div className="animate-border-beam" style={{ '--color-from': '#818cf8', '--color-to': '#c084fc', '--duration': '8s' }} />
                        )}
                        {plan.popular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-lg">
                                {plan.popularText}
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-slate-900 mb-2 font-sans">{plan.name}</h3>
                        <p className={`${plan.popular ? 'text-indigo-500' : 'text-slate-500'} text-sm mb-6 font-medium`}>{plan.desc}</p>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-xl font-bold text-slate-900 tracking-tight">{plan.highlight}</span>
                        </div>

                        <ul className="space-y-4 mb-8">

                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                                    {plan.popular ? (
                                        <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-indigo-600" strokeWidth={3} />
                                        </div>
                                    ) : (
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                    )}
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a href="/contact" className={`block w-full py-${plan.popular ? '4' : '3'} px-6 rounded-xl ${plan.popular ? 'bg-indigo-600 text-white font-bold text-center shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30' : 'bg-slate-50 text-slate-900 font-bold text-center border border-slate-200 hover:bg-slate-100'} transition-all`}>
                            {plan.cta}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
