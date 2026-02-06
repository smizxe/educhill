import React, { useState, useEffect, useRef } from 'react';
import { Globe, Check } from 'lucide-react';

export const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 font-sans" ref={containerRef}>
            {/* Options Menu */}
            <div className={`absolute bottom-full right-0 mb-4 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-2 transform transition-all duration-200 origin-bottom-right w-48 overflow-hidden ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-90 invisible'}`}>
                {/* English (Active) */}
                <a href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-100/80 transition-colors mb-1">
                    <div className="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm">
                        <img loading="lazy" decoding="async" src="https://flagcdn.com/w40/gb.png" className="w-full h-full object-cover" alt="English" />
                    </div>
                    <span className="font-medium text-slate-900 text-sm flex-1">English</span>
                    <Check className="w-4 h-4 text-slate-900" />
                </a>

                {/* Vietnamese */}
                <a href="/vi.html" className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm">
                        <img loading="lazy" decoding="async" src="https://flagcdn.com/w40/vn.png" className="w-full h-full object-cover" alt="Vietnamese" />
                    </div>
                    <span className="font-medium text-slate-700 text-sm">Tiếng Việt</span>
                </a>
            </div>

            {/* Main Button */}
            <button
                onClick={toggleMenu}
                className="w-12 h-12 flex items-center justify-center text-slate-900 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
            >
                <Globe className="w-6 h-6" />
            </button>
        </div>
    );
};
