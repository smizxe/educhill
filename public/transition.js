
// --- URL Mapping for Clean URLs ---
// --- URL Mapping for Clean URLs ---
const urlToFile = {
    '/': '/index.html',
    '/home': '/index.html',
    '/about': '/about-en.html',
    '/about-vn': '/about-vn.html',
    '/contact': '/contact-en.html',
    '/contact-vn': '/contact-vn.html',
    '/features': '/vi.html',
};

const fileToUrl = {
    '/index.html': '/',
    '/about-en.html': '/about',
    '/about-vn.html': '/about-vn',
    '/contact-en.html': '/contact',
    '/contact-vn.html': '/contact-vn',
    '/vi.html': '/features',
};

function getCleanUrl(fileUrl) {
    try {
        const url = new URL(fileUrl, location.origin);
        const pathname = url.pathname;
        return fileToUrl[pathname] || pathname;
    } catch {
        return fileUrl;
    }
}

function getFilePath(cleanUrl) {
    try {
        const url = new URL(cleanUrl, location.origin);
        const pathname = url.pathname;
        // If it's already an HTML file, return as is
        if (pathname.endsWith('.html')) {
            return pathname;
        }
        return urlToFile[pathname] || pathname;
    } catch {
        return cleanUrl;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize transition logic
    initPageTransition();

    // Convert current URL to clean URL on page load (if not already clean)
    const currentPath = location.pathname;
    const cleanPath = getCleanUrl(location.href);
    if (currentPath !== cleanPath && !currentPath.endsWith('.html') === false) {
        // Only replace if we have a mapping and URL contains .html
        if (currentPath.endsWith('.html') && fileToUrl[currentPath]) {
            history.replaceState(null, '', cleanPath);
        }
    }
});

function initPageTransition() {
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');

        // Check if it's a valid link
        if (!link || !link.href) return;

        // Generic checks
        if (
            link.target === '_blank' ||
            e.ctrlKey ||
            e.metaKey ||
            e.shiftKey ||
            e.altKey ||
            link.href.includes('#') ||
            link.href.startsWith('mailto:') ||
            link.href.startsWith('tel:')
        ) return;

        // Check if distinct origin
        const targetUrl = new URL(link.href);
        if (targetUrl.origin !== location.origin) return;

        // It's a local navigation
        e.preventDefault();
        handleTransition(targetUrl.href);
    });

    // Handle Back/Forward buttons
    window.addEventListener('popstate', () => {
        handleTransition(location.href, false);
    });
}

async function handleTransition(url, pushState = true) {
    try {
        // Determine the actual file to fetch
        const targetUrl = new URL(url, location.origin);
        const filePath = getFilePath(targetUrl.pathname);
        const fetchUrl = new URL(filePath, location.origin).href;
        const cleanUrl = getCleanUrl(fetchUrl);

        // 1. Fetch the new page (with cache busting to prevent loading old content)
        const response = await fetch(fetchUrl, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache'
            }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const text = await response.text();

        // 2. Parse the text
        const parser = new DOMParser();
        const newDoc = parser.parseFromString(text, 'text/html');

        // 3. Update History with CLEAN URL
        if (pushState) {
            history.pushState(null, '', cleanUrl);
        }

        // 4. Update Title
        document.title = newDoc.title;

        // 5. Swap Content
        const currentAppContainer = document.querySelector('main');
        const newAppContainer = newDoc.querySelector('main');

        const currentNav = document.querySelector('nav');
        const newNav = newDoc.querySelector('nav');

        const currentFooter = document.querySelector('footer');
        const newFooter = newDoc.querySelector('footer');

        // Fade out main content
        if (currentAppContainer) {
            currentAppContainer.style.opacity = '0';
            currentAppContainer.style.transition = 'opacity 0.3s ease';
        }

        // Wait for fade out
        setTimeout(() => {
            // Swap Nav
            if (currentNav && newNav) {
                currentNav.outerHTML = newNav.outerHTML;
            }

            // Swap Main
            if (currentAppContainer && newAppContainer) {
                currentAppContainer.outerHTML = newAppContainer.outerHTML;
            }

            // Swap Footer
            if (currentFooter && newFooter) {
                currentFooter.outerHTML = newFooter.outerHTML;
            }

            // Swap Ambient Background
            const currentBg = document.getElementById('ambient-bg');
            const newBg = newDoc.getElementById('ambient-bg');
            if (currentBg && newBg) {
                currentBg.outerHTML = newBg.outerHTML;
            } else if (!currentBg && newBg) {
                document.body.insertBefore(newBg.cloneNode(true), document.body.firstChild);
            }

            // Swap Language Switcher if present
            const currentLang = document.getElementById('lang-switcher');
            const newLang = newDoc.getElementById('lang-switcher');
            if (currentLang && newLang) {
                currentLang.outerHTML = newLang.outerHTML;
            } else if (!currentLang && newLang) {
                // Insert before transition.js script
                document.body.insertBefore(newLang.cloneNode(true), document.querySelector('script[src="transition.js"]'));
            } else if (currentLang && !newLang) {
                currentLang.remove();
            }

            // Re-inject the toggleLangMenu function since we replaced the lang-switcher
            if (newLang || currentLang) {
                window.toggleLangMenu = function () {
                    const menu = document.getElementById('lang-menu');
                    if (!menu) return;
                    const isClosed = menu.classList.contains('invisible');

                    if (isClosed) {
                        menu.classList.remove('invisible', 'opacity-0', 'scale-90');
                        menu.classList.add('visible', 'opacity-100', 'scale-100');
                    } else {
                        menu.classList.add('invisible', 'opacity-0', 'scale-90');
                        menu.classList.remove('visible', 'opacity-100', 'scale-100');
                    }
                };
            }

            // Re-run scripts
            // Lucide icons
            if (window.lucide) {
                lucide.createIcons();
            }

            // Re-init Gallery if on About Page
            initGallery();

            // --- RE-EXECUTE INLINE SCRIPTS from the new main content ---
            // This is critical for animations like the dashboard demo
            const newMainEl = document.querySelector('main');
            if (newMainEl) {
                const inlineScripts = newMainEl.querySelectorAll('script');
                inlineScripts.forEach(oldScript => {
                    const newScript = document.createElement('script');
                    // Copy attributes
                    Array.from(oldScript.attributes).forEach(attr => {
                        newScript.setAttribute(attr.name, attr.value);
                    });
                    // Copy inline content
                    newScript.textContent = oldScript.textContent;
                    // Replace old script with new one to trigger execution
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            }

            // --- ANIMATION FIX: Force restart CSS animations ---
            requestAnimationFrame(() => {
                // Restart fade-up animations
                const faders = document.querySelectorAll('.aura-animate-fade-up');
                faders.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; // Trigger reflow
                    el.style.animation = '';
                });

                // Re-attach IntersectionObserver for scroll animations
                const scrollObserver = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("scroll-enter-active");
                            scrollObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

                document.querySelectorAll(".scroll-enter").forEach(el => {
                    el.classList.remove("scroll-enter-active"); // Reset state
                    scrollObserver.observe(el);
                });
            });

        }, 300); // Wait for the 0.3s fade out

    } catch (err) {
        console.error('Transition Failed:', err);
        window.location.href = url; // Fallback to normal navigation
    }
}

// --- Gallery Logic for About Us Page ---
const founderImages = [
    '/assets/portrait.jpg',
    '/assets/speaking.jpg',
    '/assets/sky.jpg'
];
let currentImageIndex = 0;

function initGallery() {
    // Preload images to avoid flicker
    founderImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

window.changeFounderImage = function (direction) {
    const imgEl = document.getElementById('founder-img');
    if (!imgEl) return;

    // Calculate new index
    currentImageIndex += direction;
    if (currentImageIndex >= founderImages.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = founderImages.length - 1;

    // Fade out effect
    imgEl.style.opacity = '0';
    imgEl.style.transform = 'scale(0.95)';

    setTimeout(() => {
        imgEl.src = founderImages[currentImageIndex];
        imgEl.onload = () => {
            imgEl.style.opacity = '1';
            imgEl.style.transform = 'scale(1)';
        };
        // Fallback if cached
        setTimeout(() => {
            imgEl.style.opacity = '1';
            imgEl.style.transform = 'scale(1)';
        }, 50);
    }, 200);
};

// Autoinit on load
document.addEventListener('DOMContentLoaded', initGallery);
