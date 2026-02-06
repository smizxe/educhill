import React, { useEffect, useRef } from 'react';
import { CheckCircle, Send, ArrowRight, Lock, Layout, FileText, BarChart, Users, GraduationCap } from 'lucide-react';

export const Hero = ({ content }) => {
    const isMockupVisible = useRef(true); // Default to true, update with IntersectionObserver if possible or assume visible

    useEffect(() => {
        // Animation Sequencing for Educhill
        const stageImport = document.getElementById('stage-import');
        const stageProcessing = document.getElementById('stage-processing');
        const stageResult = document.getElementById('stage-result');

        const floatingPdf = document.getElementById('floating-pdf');
        const handCursor = document.getElementById('hand-cursor');

        // Generated Items
        const item1 = document.getElementById('exercise-item-1');
        const item2 = document.getElementById('exercise-item-2');
        const item3 = document.getElementById('exercise-item-3');
        const configPopover = document.getElementById('config-popover');
        const typewriterText = document.getElementById('typewriter-text');
        const cursorBlink = document.getElementById('cursor-blink');

        function typeText(text, element, speed = 50) {
            if (!element) return;
            element.innerHTML = '';
            let i = 0;
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        let animationTimeout;

        function runAnimation() {
            // Check visibility (simplified for React: assuming if component is mounted, it's "visible" enough to run, 
            // but ideally we'd pass in the visibility state from a parent observer)
            // For now, let's just run it.

            if (!stageImport) return;

            // Reset
            stageImport.style.opacity = '1';
            stageImport.style.pointerEvents = 'auto';
            stageProcessing.style.opacity = '0';
            stageProcessing.style.pointerEvents = 'none';
            stageResult.style.opacity = '0';
            stageResult.style.pointerEvents = 'none';

            // Pdf Reset
            floatingPdf.style.opacity = '0';
            floatingPdf.style.left = '80%';
            floatingPdf.style.transform = 'translateY(-50%) rotate(0deg)';

            // Cursor Reset
            handCursor.style.opacity = '0';
            handCursor.style.left = '80%';
            handCursor.style.top = '50%';
            handCursor.style.transform = 'translate(-40%, -40%) scale(1)';

            // Items Reset
            if (item1) { item1.classList.remove('opacity-100', 'translate-y-0'); item1.classList.add('opacity-0', 'translate-y-4'); }
            if (item2) {
                item2.classList.remove('opacity-100', 'translate-y-0', 'border-indigo-500');
                item2.classList.add('opacity-0', 'translate-y-4', 'border-indigo-100');
            }
            if (item3) { item3.classList.remove('opacity-100', 'translate-y-0'); item3.classList.add('opacity-0', 'translate-y-4'); }
            if (configPopover) { configPopover.classList.remove('opacity-100', 'scale-100'); configPopover.classList.add('opacity-0', 'scale-95'); }
            if (typewriterText) typewriterText.innerHTML = '';
            if (cursorBlink) cursorBlink.style.display = 'none';


            // --- STEP 1: Cursor Moves to PDF ---
            setTimeout(() => {
                handCursor.style.opacity = '1';
                handCursor.style.left = '80%';
                handCursor.style.top = '50%';
            }, 500);

            // --- STEP 2: Cursor Grabs PDF ---
            setTimeout(() => {
                handCursor.style.transform = 'translate(-40%, -40%) scale(0.9)'; // Click effect
                floatingPdf.style.opacity = '1';
                floatingPdf.style.transform = 'translateY(-50%) rotate(-5deg) scale(1.05)';
            }, 1500);

            // --- STEP 3: Cursor Drags PDF to Center ---
            setTimeout(() => {
                // Move Cursor
                handCursor.style.left = '50%';
                handCursor.style.top = '50%';
                // Move PDF with Cursor
                floatingPdf.style.left = '50%';
                floatingPdf.style.transform = 'translateY(-50%) rotate(0deg) scale(1)';
            }, 2000);

            // --- STEP 4: Drop PDF -> Transition to Processing ---
            setTimeout(() => {
                handCursor.style.opacity = '0'; // Cursor fades away
                floatingPdf.style.transform = 'translateY(-50%) scale(0.8)';
                floatingPdf.style.opacity = '0'; // PDF Disappears into the box

                // Box Reaction
                const dropZone = stageImport.querySelector('div');
                if (dropZone) {
                    dropZone.style.borderColor = '#6366f1';
                    dropZone.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
                    setTimeout(() => {
                        dropZone.style.borderColor = '';
                        dropZone.style.backgroundColor = '';
                    }, 300);
                }

            }, 3000);

            // --- STEP 5: Processing Screen ---
            setTimeout(() => {
                stageImport.style.opacity = '0';
                stageImport.style.pointerEvents = 'none';

                stageProcessing.style.opacity = '1';
                stageProcessing.style.pointerEvents = 'auto';

                // Update processing text dynamically
                const processText = document.getElementById('processing-text');
                if (processText) {
                    setTimeout(() => processText.innerText = "Extracting knowledge...", 1000);
                    setTimeout(() => processText.innerText = "Generating questions...", 2500);
                }
            }, 3500);

            // --- STEP 6: Result Screen ---
            setTimeout(() => {
                stageProcessing.style.opacity = '0';
                stageProcessing.style.pointerEvents = 'none';

                stageResult.style.opacity = '1';
                stageResult.style.pointerEvents = 'auto';
            }, 7500);

            // --- STEP 7: Items Reveal (Staggered) ---
            setTimeout(() => {
                if (item1) { item1.classList.remove('opacity-0', 'translate-y-4'); item1.classList.add('opacity-100', 'translate-y-0'); }
            }, 8000);

            setTimeout(() => {
                if (item2) { item2.classList.remove('opacity-0', 'translate-y-4'); item2.classList.add('opacity-100', 'translate-y-0'); }
            }, 8200);

            // --- STEP 8: Cursor Reappears to Config ---
            setTimeout(() => {
                handCursor.style.opacity = '1';
                handCursor.style.left = '50%';
                // Get coordinates of item 2 (approx for demo) - in real extraction we just hardcode visual pos relative to container
                // Since container is relative, left 50% is center. Item 2 is centrally aligned in list?
                handCursor.style.left = '60%';
                handCursor.style.top = '45%'; // Approx position of speaking task
            }, 9000);

            // Click Item 2
            setTimeout(() => {
                handCursor.style.transform = 'translate(-40%, -40%) scale(0.9)';
                if (item2) { item2.classList.add('border-indigo-500'); }
            }, 10000);

            // --- STEP 9: Show Config Popover ---
            setTimeout(() => {
                handCursor.style.opacity = '0';
                if (configPopover) { configPopover.classList.remove('opacity-0', 'scale-95'); configPopover.classList.add('opacity-100', 'scale-100'); }
            }, 10500);

            // --- STEP 10: AI Typing Effect ---
            setTimeout(() => {
                if (cursorBlink) cursorBlink.style.display = 'inline-block';
                if (typewriterText) typeText("Strict grammar check, 150 words.", typewriterText);
            }, 11000);


            // --- LOOP ---
            animationTimeout = setTimeout(runAnimation, 18000);
        }

        // Start Animation Loop
        runAnimation();

        return () => {
            clearTimeout(animationTimeout);
        };
    }, []);

    return (
        <main className="flex flex-col overflow-x-clip md:overflow-visible max-w-7xl mr-auto ml-auto pt-40 pb-20 relative items-center">
            {/* Decoration Elements */}
            <div className="hidden lg:block absolute left-10 top-60 w-32 h-32 rotate-[-12deg] animate-float-slow opacity-80 z-0">
                <div className="relative w-full h-full bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] flex flex-col items-center justify-center p-4">
                    <div className="absolute top-0 w-12 h-2 bg-gray-200 rounded-b-lg mb-2"></div>
                    <div className="flex gap-4 mb-2 absolute top-[-6px]">
                        <div className="w-2 h-4 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                    <GraduationCap className="w-12 h-12 text-gray-300 mt-2" />
                </div>
            </div>

            <div className="hidden lg:block pointer-events-none z-0 w-48 h-48 absolute top-52 right-0">
                <div className="bg-gradient-to-br from-indigo-400 to-indigo-500 opacity-90 w-28 h-28 rounded-3xl absolute top-0 right-8 shadow-lg rotate-[10deg]"></div>
                <div className="absolute right-14 top-8 w-32 h-32 bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl flex items-end justify-center pb-4 gap-2 z-10 rotate-[5deg] shadow-[0_20px_50px_rgba(99,102,241,0.2)]">
                    <div className="w-2 h-8 bg-white/40 rounded-full"></div>
                    <div className="w-2 h-14 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-11 bg-white/40 rounded-full"></div>
                </div>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(31,38,135,0.07),inset_0_1px_0_rgba(255,255,255,0.6)] mb-10 transition-transform hover:scale-105 cursor-default aura-animate-fade delay-100" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 100%)' }}>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-xs text-slate-600 uppercase font-sans font-medium tracking-wide">
                    {content.badge}
                </span>
            </div>

            {/* Headlines */}
            <h1 className="leading-[1.1] md:text-5xl lg:text-7xl text-4xl text-slate-900 font-serif text-center max-w-4xl mr-auto mb-8 ml-auto pr-4 pl-4 aura-animate-fade-up delay-200">
                {content.titleStart} <span className="text-indigo-600 font-normal px-3 py-1 rounded-2xl backdrop-blur-md bg-white/40 border border-white/60 shadow-[0_8px_32px_rgba(99,102,241,0.15),inset_0_1px_0_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)' }}>{content.titleHighlight}</span> {content.titleEnd}
            </h1>

            <p className="leading-relaxed md:text-2xl text-xl text-slate-900 font-serif text-center max-w-2xl mb-12 px-6 py-4 aura-animate-fade-up delay-300 relative z-10 rounded-3xl backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.6)]" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.3) 100%)' }}>
                {content.subtitleStart} <span className="text-indigo-600 font-bold">{content.subtitleHighlight}</span>{content.subtitleEnd}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full mb-24 pr-4 pl-4 items-center justify-center aura-animate-fade-up delay-400">
                <a href="/contact" className="group w-full sm:w-auto shadow-indigo-500/30 hover:shadow-indigo-500/60 transition-all duration-300 overflow-hidden hover:bg-indigo-700 font-medium text-white bg-indigo-600 rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg inline-flex items-center justify-center" style={{ boxShadow: '0 18px 40px -15px rgba(79, 70, 229, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)' }}>
                    <span className="flex items-center justify-center gap-2 relative">
                        {content.ctaPrimary}
                        <Send className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 w-4 h-4" />
                    </span>
                </a>
                <a href="#pricing" className="hover:bg-slate-50 transition-all flex text-sm font-medium text-slate-600 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center w-full sm:w-auto justify-center" style={{ boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', color: '#e5e7eb', position: 'relative', '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', '--border-radius-before': '9999px' }}>
                    <span className="text-sm font-medium text-black/60 tracking-tight">{content.ctaSecondary}</span>
                    <ArrowRight className="w-4 h-4 text-gray-200" />
                </a>
            </div>

            {/* Browser Mockup */}
            <div className="group z-10 w-full max-w-[1200px] mr-auto mb-32 ml-auto pr-4 pl-4 relative aura-animate-fade-up delay-500">
                {/* Glow */}
                <div className="-inset-1 transition-all duration-700 group-hover:opacity-50 group-hover:duration-300 group-hover:blur-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-[1.6rem] absolute blur-xl animate-gradient-move" style={{ backgroundSize: '200% 200%' }}></div>

                <div className="overflow-visible bg-white border-gray-200/80 border rounded-3xl relative shadow-[rgba(255,_255,_255,_0.1)_0px_1px_1px_0px_inset,_rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]">
                    {/* Header */}
                    <div className="flex bg-[#F9FAFB] h-10 border-gray-200 border-b pr-4 pl-4 items-center justify-between rounded-t-3xl">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                        </div>
                        <div className="bg-white border border-gray-200 px-3 py-0.5 rounded text-[11px] text-gray-400 flex items-center gap-1 font-sans font-medium">
                            <Lock className="w-3 h-3" />
                            educhill.net
                        </div>
                        <div className="w-10"></div>
                    </div>

                    {/* App Layout */}
                    <div className="flex md:h-[600px] h-[700px] relative overflow-visible" id="app-layout">

                        {/* Sidebar */}
                        <aside className="hidden md:flex flex-col bg-[#FCFCFD] w-64 border-gray-100 border-r p-5 z-20 rounded-bl-3xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md shadow-indigo-200">E</div>
                                <div>
                                    <div className="text-sm text-slate-900 font-bold">Educhill</div>
                                    <div className="text-xs text-slate-500">Teacher Pro</div>
                                </div>
                            </div>
                            <nav className="space-y-1">
                                <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium">
                                    <Layout className="w-4 h-4" /> Dashboard
                                </a>
                                <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                                    <FileText className="w-4 h-4" /> Import
                                </a>
                                <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                                    <FileText className="w-4 h-4" /> Assignments
                                </a>
                                <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                                    <BarChart className="w-4 h-4" /> Analytics
                                </a>
                                <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors">
                                    <Users className="w-4 h-4" /> Classes
                                </a>
                            </nav>
                        </aside>

                        {/* Main Stage */}
                        <main className="flex-1 bg-white relative rounded-b-3xl md:rounded-bl-none md:rounded-br-3xl overflow-hidden">
                            {/* STAGE 1: IMPORT */}
                            <div id="stage-import" className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 bg-white z-10">
                                <div className="w-[400px] h-[300px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center bg-slate-50/50 group hover:border-indigo-400 hover:bg-indigo-50/10 transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 bg-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-indigo-500 relative z-10">
                                        <FileText className="w-8 h-8" />
                                    </div>
                                    <p className="text-slate-600 font-medium relative z-10">Drop assignment PDF here</p>
                                    <p className="text-slate-400 text-sm mt-1 relative z-10">or click to browse</p>
                                </div>
                                {/* Floating PDF */}
                                <div id="floating-pdf" className="absolute top-1/2 left-[80%] bg-red-500 text-white w-12 h-16 rounded-lg shadow-xl flex items-center justify-center -translate-y-1/2 opacity-0 transform transition-all duration-1000 z-50">
                                    <span className="font-bold text-xs">PDF</span>
                                </div>
                                {/* Cursor */}
                                <div id="hand-cursor" className="absolute top-1/2 left-[80%] -translate-y-[40%] translate-x-4 w-8 h-8 opacity-0 transition-all duration-1000 z-50 pointer-events-none text-slate-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="drop-shadow-lg"><path d="M7 19l4.4 2.2c1.1 0.6 2.5 0.3 3.1-0.8l5.5-10.7c0.2-0.5 0.1-1.1-0.4-1.3l-2.7-1.4c-0.5-0.2-1.1-0.1-1.3 0.4l-0.6 1.2v-6.6c0-0.6-0.4-1-1-1s-1 0.4-1 1v7h-1v-8c0-0.6-0.4-1-1-1s-1 0.4-1 1v8h-1v-6c0-0.6-0.4-1-1-1s-1 0.4-1 1v6h-3c-0.6 0-1 0.4-1 1v5l2.4 1.2z" /></svg>
                                </div>
                            </div>

                            {/* STAGE 2: PROCESSING */}
                            <div id="stage-processing" className="absolute inset-0 flex flex-col items-center justify-center bg-white opacity-0 pointer-events-none transition-all duration-700 z-20">
                                <div className="relative w-24 h-24 mb-6">
                                    <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
                                    <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FileText className="w-10 h-10 text-indigo-600 animate-pulse" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-medium text-slate-900 mb-2">Analyzing Document...</h3>
                                <p className="text-slate-500 font-medium" id="processing-text">Structuring questions</p>
                            </div>

                            {/* STAGE 3: RESULT */}
                            <div id="stage-result" className="absolute inset-0 flex flex-col bg-slate-50 opacity-0 pointer-events-none transition-all duration-700 z-10">
                                <div className="h-16 bg-white border-b border-gray-100 flex items-center px-6 justify-between shrink-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-indigo-100 flex items-center justify-center text-indigo-600">
                                            <FileText className="w-4 h-4" />
                                        </div>
                                        <h2 className="font-medium text-slate-800">Review Generated Exercises</h2>
                                    </div>
                                    <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm">Publish to Class</button>
                                </div>
                                <div className="p-6 space-y-4 relative h-full">
                                    <div id="exercise-item-1" className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all duration-500 translate-y-4 opacity-0">
                                        <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 font-bold text-xs">MCQ</div>
                                        <div className="flex-1"><h4 className="text-sm font-medium text-slate-800">Reading Comprehension Check</h4><p className="text-xs text-slate-500 mt-1">5 Questions • Auto-graded</p></div>
                                    </div>
                                    <div id="exercise-item-2" className="bg-white p-4 rounded-xl border-2 border-indigo-100 shadow-sm flex items-start gap-4 transition-all duration-500 delay-100 translate-y-4 opacity-0 relative overflow-visible group cursor-pointer hover:border-indigo-500 z-20">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0"><Lock className="w-4 h-4" /></div>
                                        <div className="flex-1"><h4 className="text-sm font-medium text-slate-800 group-hover:text-indigo-700 transition-colors">Unit 4 Speaking Task</h4><p className="text-xs text-slate-500 mt-1">AI Grading Enabled</p></div>
                                        {/* Config Popover */}
                                        <div id="config-popover" className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 opacity-0 scale-95 pointer-events-none transition-all duration-500 z-50 origin-top">
                                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45"></div>
                                            <div className="flex items-center gap-2 mb-3"><div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">AI</div><span className="text-xs font-bold text-slate-700">Grading Configuration</span></div>
                                            <div className="bg-slate-50 rounded-xl p-3 mb-3 h-16"><p id="typewriter-text" className="text-xs text-slate-600 font-medium leading-relaxed inline"></p><span className="inline-block w-1.5 h-3 bg-indigo-500 animate-pulse align-middle ml-0.5" id="cursor-blink"></span></div>
                                            <button className="w-full py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-medium hover:bg-indigo-700">Apply Rules</button>
                                        </div>
                                    </div>
                                    <div id="exercise-item-3" className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 transition-all duration-500 delay-200 translate-y-4 opacity-0">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0"><FileText className="w-4 h-4" /></div>
                                        <div className="flex-1"><h4 className="text-sm font-medium text-slate-800">Essay: Cultural Differences</h4><p className="text-xs text-slate-500 mt-1">Rubric: IELTS Task 2</p></div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </main>
    );
}
