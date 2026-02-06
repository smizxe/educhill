import React, { useEffect, useRef } from 'react';
import { BookOpen, CheckCircle, ChevronLeft, ChevronRight, Layout, Menu, MoreVertical, MousePointer2 } from 'lucide-react';

export const StudentUI = ({ content }) => {
    const scrollContainerRef = useRef(null);
    const cursorRef = useRef(null);
    const leftPaneRef = useRef(null);
    const rightPaneRef = useRef(null);
    const resizeHandleRef = useRef(null);
    const splitContainerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const scrollContainer = scrollContainerRef.current;
        const leftPane = leftPaneRef.current;
        const rightPane = rightPaneRef.current;
        const resizeHandle = resizeHandleRef.current;
        const splitContainer = splitContainerRef.current;
        const option7B = document.getElementById('opt-7-b');
        const option8A = document.getElementById('opt-8-a');
        const btnSubmit = document.getElementById('btn-submit-test');

        let isAnimating = true;

        const animate = async () => {
            if (!cursor || !scrollContainer || !option7B || !option8A || !leftPane || !rightPane || !splitContainer) return;

            const wait = (ms) => new Promise(r => setTimeout(r, ms));

            const moveCursor = async (target, offsetX = 0, offsetY = 0) => {
                const rect = target.getBoundingClientRect();
                const containerRect = splitContainer.getBoundingClientRect();

                // Calculate relative position within the frame
                const x = rect.left - containerRect.left + rect.width / 2 + offsetX;
                const y = rect.top - containerRect.top + rect.height / 2 + offsetY;

                cursor.style.transform = `translate(${x}px, ${y}px)`;
                await wait(800); // Movement time
            };

            const click = async (element) => {
                cursor.classList.add('scale-75');
                element.classList.add('ring-2', 'ring-indigo-400', 'bg-indigo-50');
                await wait(150);
                cursor.classList.remove('scale-75');
                // Permanent selection style
                element.querySelector('.radio-circle').classList.remove('border-gray-300');
                element.querySelector('.radio-circle').classList.add('border-indigo-600', 'bg-indigo-600');
                element.classList.remove('ring-2', 'ring-indigo-400');
                element.classList.add('border-indigo-200', 'bg-indigo-50/50');
            };

            while (isAnimating) {
                // Reset Layout
                if (leftPane && rightPane) {
                    leftPane.style.flex = '1';
                    rightPane.style.flex = '1';
                }

                // Reset Cursor
                cursor.style.transition = 'none';
                cursor.style.opacity = '0';
                cursor.style.transform = 'translate(80%, 80%)';

                // Clear selections
                [option7B, option8A].forEach(el => {
                    if (el) {
                        el.classList.remove('border-indigo-200', 'bg-indigo-50/50');
                        const radio = el.querySelector('.radio-circle');
                        if (radio) {
                            radio.classList.remove('border-indigo-600', 'bg-indigo-600');
                            radio.classList.add('border-gray-300');
                        }
                    }
                });

                scrollContainer.scrollTo({ top: 0, behavior: 'instant' });

                await wait(1000);
                cursor.style.transition = 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.3s';
                cursor.style.opacity = '1';

                // ==========================
                // 0. Resize Animation Demo
                // ==========================
                if (resizeHandle) {
                    await moveCursor(resizeHandle);

                    // "Grab" effect
                    cursor.classList.add('scale-75');
                    resizeHandle.classList.add('bg-indigo-300');
                    cursor.style.transition = 'none'; // Direct control for dragging

                    const animateDrag = async (startRatio, endRatio, duration) => {
                        // We assume total flex = 2 (1 + 1 start) or just normalize ratio.
                        // startRatio is left pane's share of space (0 to 1).

                        const frames = Math.floor(duration / 16);
                        const containerRect = splitContainer.getBoundingClientRect();
                        const containerWidth = containerRect.width;
                        const handleWidth = 16; // w-4 = 16px (approx)
                        const availableWidth = containerWidth - handleWidth;
                        // Center Y on the handle
                        const handleRect = resizeHandle.getBoundingClientRect();
                        // Relative Y
                        const cursorY = handleRect.top - containerRect.top + handleRect.height / 2;

                        for (let i = 0; i <= frames; i++) {
                            const progress = i / frames;
                            // Smooth ease-in-out
                            const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
                            const currentRatio = startRatio + (endRatio - startRatio) * ease;

                            // 1. Update Layout
                            // Left gets 'currentRatio', Right gets '1 - currentRatio'
                            leftPane.style.flex = `${currentRatio}`;
                            rightPane.style.flex = `${1 - currentRatio}`;

                            // 2. Update Cursor (Strictly synced)
                            // Calculate exact pixel set for left pane
                            const leftWidth = availableWidth * currentRatio;
                            const cursorX = leftWidth + (handleWidth / 2);

                            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

                            await wait(16);
                        }
                    };

                    // Initial is 0.5 (1:1)
                    // Drag Left (Shrink Left to 35%)
                    await animateDrag(0.5, 0.35, 600);
                    await wait(300);

                    // Drag Right (Expand Left to 65%)
                    await animateDrag(0.35, 0.65, 800);
                    await wait(300);

                    // Return to Center (50%)
                    await animateDrag(0.65, 0.5, 600);
                    await wait(200);

                    resizeHandle.classList.remove('bg-indigo-300');
                    cursor.classList.remove('scale-75'); // Release
                    cursor.style.transition = 'transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.3s'; // Restore smooth
                    await wait(500);
                }

                // ==========================
                // 1. Answer Selection Demo
                // ==========================

                // 1. Move to Option 7B
                if (option7B) {
                    await moveCursor(option7B, 20, 10);
                    await wait(200);
                    await click(option7B);
                    await wait(800);
                }

                // 2. Scroll Down
                scrollContainer.scrollTo({ top: 200, behavior: 'smooth' });
                await wait(1000);

                // 3. Move to Option 8A
                if (option8A) {
                    await moveCursor(option8A, 10, 5);
                    await wait(200);
                    await click(option8A);
                    await wait(1000);
                }

                // 4. Move to Submit (Visual only, don't actually submit)
                if (btnSubmit) {
                    await moveCursor(btnSubmit, 0, 0);
                    cursor.classList.add('scale-75');
                    await wait(150);
                    cursor.classList.remove('scale-75');
                }

                await wait(3000); // Pause before loop
            }
        };

        // Delay start to allow rendering
        setTimeout(animate, 2000);

        return () => {
            isAnimating = false;
        };
    }, []);

    return (
        <section className="w-full max-w-7xl mx-auto mb-32 px-4 scroll-enter">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-xs font-bold uppercase tracking-wider mb-4">
                    {content.badge}
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                    {content.title}
                </h2>
                <p className="text-xl text-slate-500 font-sans font-medium max-w-2xl mx-auto">
                    {content.description}
                </p>
            </div>

            {/* Mac Window Mockup */}
            <div className="relative group w-full max-w-6xl mx-auto">
                {/* Glow */}
                <div className="-inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-20 rounded-[1.6rem] absolute blur-xl animate-pulse"></div>

                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden relative z-10 flex flex-col h-[700px] md:h-[600px]">
                    {/* Browser Toolbar */}
                    <div className="h-10 bg-[#F9FAFB] border-b border-gray-200 flex items-center px-4 justify-between shrink-0">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                        </div>
                        <div className="flex-1 max-w-xl mx-4 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center px-3 gap-2 text-xs text-slate-500">
                            <Layout className="w-3.5 h-3.5 text-slate-400" />
                            <span className="font-medium">educhill.net/student/test/001</span>
                        </div>
                        <div className="flex gap-3">
                            <MoreVertical className="w-4 h-4 text-slate-400" />
                        </div>
                    </div>

                    {/* App Bar */}
                    <div className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white shrink-0">
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-slate-500 hover:text-slate-900 transition-colors">
                                <ChevronLeft className="w-5 h-5" />
                                <span className="font-bold text-sm">Back</span>
                            </button>
                            <span className="h-4 w-px bg-gray-200"></span>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                                    <BookOpen className="w-4 h-4" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-slate-900">Class Test</h3>
                                    <p className="text-[10px] text-slate-500 font-medium">4 assignments</p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-6">
                            <div className="flex flex-col w-48">
                                <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1">
                                    <span>Progress</span>
                                    <span>25%</span>
                                </div>
                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-600 w-1/4 rounded-full"></div>
                                </div>
                            </div>
                            <button id="btn-submit-test" className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-bold shadow-sm shadow-emerald-200 transition-colors">
                                Submit
                            </button>
                        </div>
                    </div>

                    {/* App Body */}
                    <div className="flex-1 flex overflow-hidden">
                        {/* Sidebar */}
                        <div className="w-16 md:w-64 border-r border-gray-200 bg-slate-50 flex flex-col shrink-0">
                            <div className="p-4 space-y-2">
                                <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="text-xs font-bold text-slate-900">New Assignment</div>
                                        <div className="text-[10px] text-slate-500">Completed</div>
                                    </div>
                                </div>
                                <div className="p-3 bg-indigo-50 rounded-xl shadow-sm border border-indigo-200 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">4</div>
                                    <div className="hidden md:block">
                                        <div className="text-xs font-bold text-indigo-900 truncate max-w-[120px]">TEST 10 - ILLUSTRATION...</div>
                                        <div className="text-[10px] text-indigo-500">In Progress</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Split Pane */}
                        <div ref={splitContainerRef} className="flex-1 flex flex-col md:flex-row bg-[#F8F9FA] relative">
                            {/* Cursor Mock */}
                            <div ref={cursorRef} className="absolute z-50 pointer-events-none opacity-0 transition-opacity">
                                <MousePointer2 className="w-6 h-6 text-slate-900 fill-slate-900 drop-shadow-xl" />
                            </div>

                            {/* Left Pane: Reading */}
                            <div ref={leftPaneRef} className="flex-1 p-6 md:p-8 overflow-y-auto border-b md:border-b-0 md:border-r border-gray-200 bg-white transition-none">
                                <div className="max-w-prose mx-auto">
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider mb-4">
                                        Reading Passage
                                    </span>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif leading-tight">
                                        SAVING MONEY ON EVERYDAY EXPENSES
                                    </h2>
                                    <div className="prose prose-slate prose-sm font-medium text-slate-600">
                                        <p>
                                            Looking to cut down on your spending? Here are some simple ways to save money without sacrificing your lifestyle.
                                        </p>
                                        <p>
                                            <strong>Money-Saving Facts:</strong> Many households (7) __________ from unnecessary expenses each month. Small changes in your daily habits can help reduce costs significantly.
                                        </p>
                                        <h3 className="text-lg font-bold text-slate-800 mt-6 mb-3">Smart Saving Strategies:</h3>
                                        <ul className="list-disc pl-5 space-y-2">
                                            <li>
                                                <strong>Plan your meals!</strong> Preparing meals at home can help avoid the temptation to eat (8) __________ saving you money.
                                            </li>
                                            <li>
                                                <strong>Track your spending!</strong> Keeping a record of your purchases helps (9) __________ where you can cut back.
                                            </li>
                                            <li>
                                                <strong>Buy in bulk!</strong> (10) __________ making small purchases, buying in bulk can be more cost-effective.
                                            </li>
                                            <li>
                                                <strong>Use discounts!</strong> Take advantage of coupons and sales to (11) __________ your savings.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Resize Handle Visual */}
                            <div ref={resizeHandleRef} className="hidden md:flex w-4 bg-gray-100 items-center justify-center cursor-col-resize hover:bg-indigo-100 transition-colors z-10 relative">
                                <div className="h-8 w-1 bg-gray-300 rounded-full pointer-events-none"></div>
                            </div>

                            {/* Right Pane: Questions */}
                            <div ref={rightPaneRef} className="flex-1 bg-slate-50/50 flex flex-col h-full overflow-hidden transition-none">
                                <div className="h-14 border-b border-gray-200 bg-white px-6 flex items-center justify-between shrink-0">
                                    <span className="text-xs font-bold text-slate-500 uppercase">ANSWER SHEET</span>
                                    <span className="text-xs font-bold text-slate-900">2 / 40 Questions</span>
                                </div>

                                <div ref={scrollContainerRef} className="flex-1 p-6 overflow-y-auto scroll-smooth">
                                    {/* Question 7 */}
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
                                        <div className="flex justify-between mb-4">
                                            <span className="px-2.5 py-0.5 bg-gray-100 text-slate-600 text-xs font-bold rounded">Question 7</span>
                                            <span className="text-xs font-bold text-indigo-600">1 point</span>
                                        </div>
                                        <p className="text-slate-900 font-medium mb-4 text-sm">Choose the correct word to fill in blank (7).</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all option-item" id="opt-7-a">
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 radio-circle shrink-0"></div>
                                                <span className="text-sm font-medium text-slate-700">A. benefit</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all option-item" id="opt-7-b">
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 radio-circle shrink-0"></div>
                                                <span className="text-sm font-medium text-slate-700">B. suffer</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all option-item" id="opt-7-c">
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 radio-circle shrink-0"></div>
                                                <span className="text-sm font-medium text-slate-700">C. gain</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all option-item" id="opt-7-d">
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 radio-circle shrink-0"></div>
                                                <span className="text-sm font-medium text-slate-700">D. struggle</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 8 */}
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
                                        <div className="flex justify-between mb-4">
                                            <span className="px-2.5 py-0.5 bg-gray-100 text-slate-600 text-xs font-bold rounded">Question 8</span>
                                            <span className="text-xs font-bold text-indigo-600">1 point</span>
                                        </div>
                                        <p className="text-slate-900 font-medium mb-4 text-sm">Choose the correct word to fill in blank (8).</p>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all option-item" id="opt-8-a">
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 radio-circle shrink-0"></div>
                                                <span className="text-sm font-medium text-slate-700">A. out</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all option-item" id="opt-8-b">
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 radio-circle shrink-0"></div>
                                                <span className="text-sm font-medium text-slate-700">B. well</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all option-item" id="opt-8-c">
                                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 radio-circle shrink-0"></div>
                                                <span className="text-sm font-medium text-slate-700">C. in</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 9 (Dummy for scrolling) */}
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 opacity-60">
                                        <div className="flex justify-between mb-4">
                                            <span className="px-2.5 py-0.5 bg-gray-100 text-slate-600 text-xs font-bold rounded">Question 9</span>
                                            <span className="text-xs font-bold text-indigo-600">1 point</span>
                                        </div>
                                        <div className="h-4 bg-gray-100 rounded w-3/4 mb-4"></div>
                                        <div className="space-y-3">
                                            <div className="h-10 bg-gray-50 rounded border border-gray-100"></div>
                                            <div className="h-10 bg-gray-50 rounded border border-gray-100"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
