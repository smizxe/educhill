import React, { useEffect, useState } from 'react';
import { Mic, Check, ArrowRight } from 'lucide-react';

export const StudentView = ({ content }) => {
    useEffect(() => {
        // Student View Animation Logic
        const stateSpeaking = document.getElementById('sv-state-speaking');
        const stateWriting = document.getElementById('sv-state-writing');
        const stateFeedback = document.getElementById('sv-state-feedback');

        // Elements - Speaking
        const micBtn = document.getElementById('sv-mic-btn');
        const micRipple1 = document.getElementById('sv-mic-ripple-1');
        const micRipple2 = document.getElementById('sv-mic-ripple-2');
        const waveform = document.getElementById('sv-waveform');
        const statusText = document.getElementById('sv-status-text');
        const submitSpeaking = document.getElementById('sv-submit-speaking');

        // Elements - Writing
        const typewriterText = document.getElementById('sv-typewriter-text');
        const submitWriting = document.getElementById('sv-submit-writing');

        // Elements - Feedback
        const feedbackComment = document.getElementById('sv-feedback-comment');
        const scoreLabel1 = document.getElementById('sv-score-label-1');
        const scoreVal1 = document.getElementById('sv-score-val-1');
        const scoreLabel2 = document.getElementById('sv-score-label-2');
        const scoreVal2 = document.getElementById('sv-score-val-2');
        const feedbackFooter = document.getElementById('sv-feedback-footer');
        const feedbackProgress = document.getElementById('sv-feedback-progress');

        // Score Cards
        const scoreCard1 = document.getElementById('sv-score-1');
        const scoreCard2 = document.getElementById('sv-score-2');

        const typingContent = "One of my biggest dreams is to travel to space. I have always been fascinated by the stars...";
        let animationRunning = true;

        // Helper to transition states
        function switchState(hide, show) {
            if (!hide || !show) return;
            hide.classList.add('opacity-0', 'pointer-events-none');
            hide.classList.remove('opacity-100', 'pointer-events-auto');

            // Determine slide direction based on sequence
            if (hide === stateSpeaking) hide.classList.add('-translate-x-8');
            if (hide === stateWriting) hide.classList.add('-translate-x-8');
            if (hide === stateFeedback) hide.classList.add('translate-y-4'); // Reset position

            show.classList.remove('opacity-0', 'translate-x-8', 'translate-y-4', '-translate-x-8', 'pointer-events-none');
            show.classList.add('opacity-100', 'translate-x-0', 'translate-y-0', 'pointer-events-auto');
        }

        function resetAll() {
            if (!stateSpeaking || !stateWriting || !stateFeedback) return;
            // Reset Speaking
            stateSpeaking.className = "absolute inset-0 p-8 flex flex-col transition-all duration-500 opacity-100 translate-x-0 pointer-events-auto";
            stateWriting.className = "absolute inset-0 p-8 flex flex-col bg-white opacity-0 pointer-events-none transition-all duration-500 translate-x-8";
            stateFeedback.className = "absolute inset-0 p-6 flex flex-col bg-white opacity-0 pointer-events-none transition-all duration-500 translate-y-4";

            micBtn.style.display = 'flex';
            micBtn.style.transform = 'scale(1)';
            micRipple1.classList.remove('animate-ripple');
            micRipple2.classList.remove('animate-ripple');
            waveform.classList.add('hidden');
            waveform.classList.remove('flex');
            statusText.innerText = "Tap to record";
            statusText.classList.remove('text-indigo-500', 'animate-pulse');
            submitSpeaking.classList.add('opacity-50', 'cursor-not-allowed');

            typewriterText.textContent = "";
        }

        async function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

        async function runSequence() {
            while (animationRunning) {
                // --- PHASE 1: SPEAKING ---
                resetAll();
                await wait(1000);
                if (!animationRunning) break;

                // User Clicks Record
                if (micBtn) micBtn.style.transform = "scale(0.9)";
                await wait(200);
                if (micBtn) micBtn.style.display = 'none';
                if (waveform) {
                    waveform.classList.remove('hidden');
                    waveform.classList.add('flex');
                }
                if (micRipple1) micRipple1.classList.add('animate-ripple');
                if (micRipple2) micRipple2.classList.add('animate-ripple');
                if (statusText) {
                    statusText.innerText = "Recording...";
                    statusText.classList.add('text-indigo-500', 'animate-pulse');
                }

                await wait(2000); // Recording duration
                if (!animationRunning) break;
                if (submitSpeaking) submitSpeaking.classList.remove('opacity-50', 'cursor-not-allowed');

                await wait(1000); // Wait before submit

                // User Clicks Submit
                if (submitSpeaking) {
                    submitSpeaking.style.transform = "scale(0.95)";
                    await wait(150);
                    submitSpeaking.style.transform = "scale(1)";
                }

                // --- PHASE 2: SPEAKING FEEDBACK ---
                // Setup Feedback Data
                if (feedbackComment) feedbackComment.innerHTML = 'Great fluency! Your pronunciation of <strong>"fascinated"</strong> was clear. Try to improve pacing in deep explanations.';
                if (scoreLabel1) scoreLabel1.innerText = "Fluency";
                if (scoreVal1) scoreVal1.innerText = "92/100";
                if (scoreLabel2) scoreLabel2.innerText = "Pronunciation";
                if (scoreVal2) scoreVal2.innerText = "89/100";
                if (feedbackFooter) feedbackFooter.innerText = "Next task: Writing...";

                // Hide Cards for Animation
                if (scoreCard1) scoreCard1.classList.add('opacity-0', 'translate-y-2');
                if (scoreCard2) scoreCard2.classList.add('opacity-0', 'translate-y-2');
                if (feedbackProgress) feedbackProgress.style.animation = 'none'; // Reset animation

                switchState(stateSpeaking, stateFeedback);

                // Animate Cards In
                await wait(300); if (scoreCard1) scoreCard1.classList.remove('opacity-0', 'translate-y-2');
                await wait(200); if (scoreCard2) scoreCard2.classList.remove('opacity-0', 'translate-y-2');

                // Progress Bar
                if (feedbackProgress) {
                    feedbackProgress.style.width = '0%';
                    void feedbackProgress.offsetWidth; // Force reflow
                    feedbackProgress.style.animation = 'loadProgress 4s linear forwards';
                }

                await wait(4500); // Read Feedback Time
                if (!animationRunning) break;

                // --- PHASE 3: WRITING ---
                switchState(stateFeedback, stateWriting);

                // Clear content to prevent flash
                setTimeout(() => {
                    if (feedbackComment) feedbackComment.innerHTML = "";
                    if (scoreVal1) scoreVal1.innerHTML = "";
                    if (scoreVal2) scoreVal2.innerHTML = "";
                }, 500); // Wait for fade out

                await wait(800);

                // Typing Effect
                let currentText = "";
                for (let i = 0; i < typingContent.length; i++) {
                    if (!animationRunning) break;
                    currentText += typingContent[i];
                    if (typewriterText) typewriterText.textContent = currentText;
                    await wait(30); // Fast typing
                }

                await wait(1000);

                // Submit Writing
                if (submitWriting) {
                    submitWriting.style.transform = "scale(0.95)";
                    await wait(150);
                    submitWriting.style.transform = "scale(1)";
                }

                // --- PHASE 4: WRITING FEEDBACK ---
                // Setup Feedback Data
                if (feedbackComment) feedbackComment.innerHTML = 'Strong vocabulary usage. Consider using transitional phrases like <strong>"Furthermore"</strong> to connect ideas smoothly.';
                if (scoreLabel1) scoreLabel1.innerText = "Grammar";
                if (scoreVal1) scoreVal1.innerText = "95/100";
                if (scoreLabel2) scoreLabel2.innerText = "Coherence";
                if (scoreVal2) scoreVal2.innerText = "85/100";
                if (feedbackFooter) feedbackFooter.innerText = "Restarting demo...";

                // Hide Cards
                if (scoreCard1) scoreCard1.classList.add('opacity-0', 'translate-y-2');
                if (scoreCard2) scoreCard2.classList.add('opacity-0', 'translate-y-2');
                if (feedbackProgress) feedbackProgress.style.animation = 'none';

                switchState(stateWriting, stateFeedback);

                // Animate Cards In
                await wait(300); if (scoreCard1) scoreCard1.classList.remove('opacity-0', 'translate-y-2');
                await wait(200); if (scoreCard2) scoreCard2.classList.remove('opacity-0', 'translate-y-2');

                if (feedbackProgress) {
                    feedbackProgress.style.width = '0%';
                    void feedbackProgress.offsetWidth;
                    feedbackProgress.style.animation = 'loadProgress 4s linear forwards';
                }

                await wait(4500);
            }
        }

        runSequence();

        return () => {
            animationRunning = false;
        };
    }, []);

    return (
        <section className="w-full max-w-7xl mx-auto mb-32 px-4 pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left: Text Context */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-wider mb-6">
                        {content.badge}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6 leading-tight">
                        {content.titleStart} <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">{content.titleHighlight}</span>
                    </h2>
                    <p className="text-xl text-slate-800 mb-8 leading-relaxed font-sans font-medium">
                        {content.description}
                    </p>

                    <ul className="space-y-4 mb-8">
                        {content.features.map((item, i) => (
                            <li key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-white/50 border border-emerald-100/50 hover:bg-white hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group">
                                <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-110 transition-transform duration-300">
                                    <Check className="w-4 h-4" strokeWidth={2.5} />
                                </div>
                                <span className="text-slate-900 font-bold text-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all group">
                        {content.demoLink}
                        <span className="bg-indigo-100 rounded-full p-1 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                        </span>
                    </a>
                </div>

                {/* Right: Animated Interface (Mac Browser Style) */}
                <div className="relative group w-full max-w-[600px] mx-auto lg:mx-0">
                    {/* Glow Effect */}
                    <div className="-inset-1 transition-all duration-700 group-hover:opacity-50 group-hover:duration-300 group-hover:blur-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 rounded-[1.6rem] absolute blur-xl animate-gradient-move" style={{ backgroundSize: '200% 200%' }}></div>

                    {/* Browser Frame */}
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-200 overflow-hidden relative z-10 transform transition-transform group-hover:scale-[1.01]">
                        {/* Browser Header */}
                        <div className="h-10 bg-[#F9FAFB] border-b border-gray-200 flex items-center px-4 gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                            </div>
                            <div className="flex-1 max-w-[280px] h-6 bg-white border border-gray-200 rounded flex items-center justify-center gap-2 text-[10px] text-gray-400 font-medium">
                                <svg className="w-3 h-3 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                app.educhill.net/student/assignment
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="relative h-[400px] bg-white p-6 font-sans">

                            {/* STATE 1: SPEAKING */}
                            <div id="sv-state-speaking" className="absolute inset-0 p-8 flex flex-col transition-all duration-500">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Speaking Task</span>
                                        <h3 className="text-xl font-bold text-slate-800 mt-1">Talk about yourself</h3>
                                    </div>
                                    <div className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-500">02:00</div>
                                </div>

                                <div className="flex-1 flex flex-col items-center justify-center relative">
                                    <div id="sv-mic-container" className="relative flex items-center justify-center">
                                        <div id="sv-mic-ripple-1" className="absolute w-full h-full rounded-full bg-red-100 opacity-0"></div>
                                        <div id="sv-mic-ripple-2" className="absolute w-full h-full rounded-full bg-red-50 opacity-0"></div>
                                        <div id="sv-mic-btn" className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer relative z-10">
                                            <Mic className="w-8 h-8" />
                                        </div>
                                    </div>

                                    <div id="sv-waveform" className="hidden w-full items-center justify-center gap-1 h-16">
                                        {/* Simplified waveform visual */}
                                        <span className="w-1.5 h-4 bg-indigo-400 rounded-full animate-[wave_0.5s_infinite]"></span>
                                        <span className="w-1.5 h-8 bg-indigo-500 rounded-full animate-[wave_0.6s_infinite]"></span>
                                        <span className="w-1.5 h-6 bg-indigo-400 rounded-full animate-[wave_0.4s_infinite]"></span>
                                        <span className="w-1.5 h-10 bg-indigo-600 rounded-full animate-[wave_0.7s_infinite]"></span>
                                        <span className="w-1.5 h-5 bg-indigo-400 rounded-full animate-[wave_0.5s_infinite]"></span>
                                        <span className="w-1.5 h-8 bg-indigo-500 rounded-full animate-[wave_0.6s_infinite]"></span>
                                    </div>
                                    <p id="sv-status-text" className="text-slate-400 font-medium mt-6 text-sm">Tap to record</p>
                                </div>

                                <button id="sv-submit-speaking" className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold opacity-50 cursor-not-allowed transition-all mt-auto">Submit Response</button>
                            </div>

                            {/* STATE 2: WRITING */}
                            <div id="sv-state-writing" className="absolute inset-0 p-8 flex flex-col bg-white opacity-0 pointer-events-none transition-all duration-500 translate-x-8">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Writing Task</span>
                                        <h3 className="text-xl font-bold text-slate-800 mt-1">Write about your Dream</h3>
                                    </div>
                                </div>

                                <div className="flex-1 bg-slate-50 rounded-xl p-4 mb-4 border border-gray-100 font-sans text-slate-700 leading-relaxed text-sm relative">
                                    <p id="sv-typewriter-text" className="whitespace-pre-wrap inline"></p>
                                    <span className="w-0.5 h-4 bg-indigo-500 inline-block align-middle animate-cursor-blink ml-0.5 mb-1"></span>
                                </div>

                                <button id="sv-submit-writing" className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold">Submit Essay</button>
                            </div>

                            {/* STATE 3: FEEDBACK */}
                            <div id="sv-state-feedback" className="absolute inset-0 p-6 flex flex-col bg-white opacity-0 pointer-events-none transition-all duration-500 translate-y-4">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">A</div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 leading-none">Detailed AI Feedback</h3>
                                        <span className="inline-block mt-1 text-[10px] font-bold text-white bg-green-500 px-1.5 py-0.5 rounded shadow-sm tracking-wide">INSTANT ANALYSIS</span>
                                    </div>
                                </div>

                                <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                                    <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl text-sm leading-relaxed text-slate-700">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" /></svg>
                                            <span className="font-bold text-indigo-900 text-xs uppercase tracking-wide">AI Assessment</span>
                                        </div>
                                        <p id="sv-feedback-comment"></p>
                                    </div>

                                    <div className="bg-white border border-slate-100 p-3 rounded-xl flex items-center justify-between opacity-0 transition-all duration-500 translate-y-2" id="sv-score-1">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                                                {/* Icon placeholder */}
                                                <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                                            </div>
                                            <span className="font-bold text-slate-700 text-sm" id="sv-score-label-1"></span>
                                        </div>
                                        <span className="font-bold text-indigo-600" id="sv-score-val-1"></span>
                                    </div>

                                    <div className="bg-white border border-slate-100 p-3 rounded-xl flex items-center justify-between opacity-0 transition-all duration-500 translate-y-2 delay-100" id="sv-score-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                                <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                                            </div>
                                            <span className="font-bold text-slate-700 text-sm" id="sv-score-label-2"></span>
                                        </div>
                                        <span className="font-bold text-emerald-600" id="sv-score-val-2"></span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div id="sv-feedback-progress" className="h-full bg-indigo-500 w-0"></div>
                                    </div>
                                    <div className="text-[10px] text-center text-gray-400 mt-2" id="sv-feedback-footer">Next task starting in 3s...</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
