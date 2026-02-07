import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, User } from 'lucide-react';

const Card = ({ testimonial, position }) => {
    // Define styles for each position
    // Pos 0: Left
    const pos0 = "md:w-[400px] md:-translate-x-[125%] md:-translate-y-[60%] md:-rotate-[6deg] md:scale-[0.9] z-10 hover:z-20 opacity-100 rounded-[2rem] border-slate-100 p-8";
    // Pos 1: Center
    const pos1 = "md:w-[460px] md:-translate-x-1/2 md:-translate-y-[65%] md:rotate-0 md:scale-100 z-30 opacity-100 rounded-[2.5rem] shadow-2xl border-gray-100 p-10";
    // Pos 2: Right
    const pos2 = "md:w-[400px] md:translate-x-[25%] md:-translate-y-[60%] md:rotate-[6deg] md:scale-[0.9] z-10 hover:z-20 opacity-100 rounded-[2rem] border-slate-100 p-8";

    const baseClasses = "transition-all duration-700 ease-out md:absolute md:top-1/2 md:left-1/2 w-full bg-white border shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] mb-6 md:mb-0";

    let specificClasses = "";
    if (position === 0) specificClasses = pos0;
    else if (position === 1) specificClasses = pos1;
    else specificClasses = pos2;

    return (
        <div className={`${baseClasses} ${specificClasses}`}>
            {position === 1 && (
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-20"></div>
            )}

            <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${position === 1 ? 'w-5 h-5 text-orange-500 drop-shadow-sm' : 'text-orange-400'} fill-current`} />
                ))}
                {position === 1 && (
                    <span className="ml-auto px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs uppercase border border-indigo-100 font-sans font-medium">Featured</span>
                )}
            </div>

            <blockquote className={`${position === 1 ? 'text-[1.35rem] text-slate-900 mb-10 leading-snug font-serif' : 'leading-relaxed text-lg text-slate-800 mb-8 font-sans font-medium'}`}>
                "{testimonial.quote}"
            </blockquote>

            <div className={`flex items-center gap-4 pt-4 border-t ${position === 1 ? 'border-gray-100 pt-6 gap-5' : 'border-gray-50'}`}>
                <div className={`rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-sans font-medium ${position === 1 ? 'w-14 h-14 text-base ring-4 ring-white shadow-md' : 'w-12 h-12 text-sm ring-4 ring-white shadow-sm'}`}>
                    {testimonial.initials}
                </div>
                <div>
                    <div className={`font-sans font-medium text-slate-900 ${position === 1 ? 'text-base' : 'text-sm'}`}>{testimonial.name}</div>
                    <div className={`font-sans font-medium text-slate-500 ${position === 1 ? 'text-sm' : 'text-xs'}`}>{testimonial.role}</div>
                </div>
                {position === 1 && (
                    <div className="ml-auto">
                        <User className="text-gray-200" size={32} />
                    </div>
                )}
            </div>
        </div>
    );
};

export const Testimonials = ({ content }) => {
    const [cards, setCards] = useState(content.items);

    // Re-sync cards when content.items changes (e.g., language switch)
    useEffect(() => {
        setCards(content.items);
    }, [content.items]);

    const handleSwipe = (direction) => {
        setCards(prev => {
            const newCards = [...prev];
            if (direction === 1) {
                // Next: Shift Right -> Center -> Left
                const first = newCards.shift();
                newCards.push(first);
            } else {
                // Prev: Shift Left -> Center -> Right
                const last = newCards.pop();
                newCards.unshift(last);
            }
            return newCards;
        });
    };

    return (
        <section className="w-full max-w-7xl mx-auto mb-32 px-4 overflow-hidden md:overflow-visible">
            <div className="flex flex-col md:flex-row gap-6 mb-16 px-4 items-end justify-between">
                <div className="max-w-2xl scroll-enter">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 text-sm border border-indigo-200/50 shadow-sm font-sans font-medium">{content.number}</span>
                        <span className="h-px w-20 bg-gradient-to-r from-orange-200 to-transparent"></span>
                    </div>
                    <h2 className="text-4xl lg:text-[2.75rem] text-slate-900 mb-5 font-serif tracking-tight">
                        {content.title}
                    </h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-sans font-medium">
                        {content.description}
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:block md:h-[650px] w-full max-w-[1200px] mx-auto py-12 px-4 relative perspective-distant group/container scroll-enter delay-200">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr via-purple-50/40 to-blue-50/40 blur-[100px] rounded-full -z-10 pointer-events-none opacity-0 md:opacity-100 transition-opacity duration-700 from-indigo-100/40"></div>

                {/* Navigation Arrows */}
                <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-6 z-40">
                    <button onClick={() => handleSwipe(-1)} className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 bg-white shadow-sm hover:scale-105 active:scale-95 text-slate-600 hover:text-slate-900 hover:border-slate-300">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={() => handleSwipe(1)} className="w-14 h-14 rounded-full border border-orange-500/30 flex items-center justify-center hover:bg-orange-50 hover:border-orange-500 transition-all duration-300 bg-white shadow-sm hover:scale-105 active:scale-95 text-indigo-500 hover:text-orange-500">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Cards */}
                {cards.map((testimonial, index) => (
                    <Card key={testimonial.id} testimonial={testimonial} position={index} />
                ))}
            </div>
        </section>
    );
};
