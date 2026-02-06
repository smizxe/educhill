import React, { useState, useEffect, useRef } from 'react';
import { Globe, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const location = useLocation();

    // Determine current language
    const isVi = location.pathname.startsWith('/vi');

    // Calculate the base path (English version)
    // Remove '/vi' prefix if present to get the "English" equivalent
    // e.g. /vi/about -> /about
    // e.g. /vi -> /
    let basePath = isVi ? location.pathname.slice(3) : location.pathname;
    if (!basePath) basePath = '/'; // Handle root case

    // Construct paths for both languages based on current location
    const enPath = basePath;
    const viPath = `/vi${basePath === '/' ? '' : basePath}`;

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
                {/* English */}
                <Link
                    to={enPath}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors mb-1 ${!isVi ? 'bg-slate-100/80 pointer-events-none' : 'hover:bg-slate-50'}`}
                >
                    <div className="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm">
                        <img loading="lazy" decoding="async" src="https://flagcdn.com/w40/gb.png" className="w-full h-full object-cover" alt="English" />
                    </div>
                    <span className={`font-medium text-sm flex-1 ${!isVi ? 'text-slate-900' : 'text-slate-700'}`}>English</span>
                    {!isVi && <Check className="w-4 h-4 text-slate-900" />}
                </Link>

                {/* Vietnamese */}
                <Link
                    to={viPath}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${isVi ? 'bg-slate-100/80 pointer-events-none' : 'hover:bg-slate-50'}`}
                >
                    <div className="w-6 h-4 rounded-sm bg-slate-200 overflow-hidden relative shadow-sm">
                        <img loading="lazy" decoding="async" src="https://flagcdn.com/w40/vn.png" className="w-full h-full object-cover" alt="Vietnamese" />
                    </div>
                    <span className={`font-medium text-sm flex-1 ${isVi ? 'text-slate-900' : 'text-slate-700'}`}>Tiếng Việt</span>
                    {isVi && <Check className="w-4 h-4 text-slate-900" />}
                </Link>
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
