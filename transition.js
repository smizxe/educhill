
document.addEventListener('DOMContentLoaded', () => {
    // Initialize transition logic
    initPageTransition();
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
        // 1. Fetch the new page
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const text = await response.text();

        // 2. Parse the text
        const parser = new DOMParser();
        const newDoc = parser.parseFromString(text, 'text/html');

        // 3. Update History
        if (pushState) {
            history.pushState(null, '', url);
        }

        // 4. Update Title
        document.title = newDoc.title;

        // 5. Swap Content
        // Strategy: Swap everything EXCEPT the fixed background div
        // We assume the background div is the one with 'fixed' and '-z-10' classes
        // Or we simply swap Nav, Main, Footer.

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
                // Ensure new main is visible (it might have opacity 0 from CSS or just be clean)
                // Re-query because we just replaced it
                const insertedMain = document.querySelector('main');
                // Trigger reflow?
                if (insertedMain) {
                    // Remove fade-up animations classes initially to restart them?
                    // The new HTML has them. They should run automatically if they use CSS animation.
                    // If they use IntersectionObserver, we might need to re-init.
                }
            }

            // Swap Footer
            if (currentFooter && newFooter) {
                currentFooter.outerHTML = newFooter.outerHTML;
            }

            // Swap Language Switcher if present (it's usually outside main/nav/footer in my code?)
            // In previous code, it was at the bottom of body.
            const currentLang = document.getElementById('lang-switcher');
            const newLang = newDoc.getElementById('lang-switcher');
            if (currentLang && newLang) {
                currentLang.outerHTML = newLang.outerHTML;
            } else if (!currentLang && newLang) {
                document.body.appendChild(newLang);
            } else if (currentLang && !newLang) {
                currentLang.remove();
            }

            // Re-run scripts
            // Lucide icons
            if (window.lucide) {
                lucide.createIcons();
            }

            // Re-init Gallery if on About Page
            initGallery(); // Call this to bind logic if elements exist

            // Re-attach IntersectionObserver for animations
            // We can extract the script content from the new doc or just run a known init function.
            // Since the IO script is inline in HTML, fetching it won't execute it automatically.
            // We actally need to manually trigger the observer logic again.

            const observerScript = `
        const o = new IntersectionObserver(e => { e.forEach(t => { t.isIntersecting && (t.target.classList.add("scroll-enter-active"), o.unobserve(t.target)) }) }, { threshold: .1, rootMargin: "0px 0px -50px 0px" });
        document.querySelectorAll(".scroll-enter").forEach(e => o.observe(e));
        
        // Also restart CSS animations if needed
        const faders = document.querySelectorAll('.aura-animate-fade-up');
        faders.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; /* trigger reflow */
            el.style.animation = null; 
        });
        `;

            try {
                const f = new Function(observerScript); // Or just eval
                // Better: just implement the logic directly here
                const o = new IntersectionObserver(e => {
                    e.forEach(t => {
                        if (t.isIntersecting) {
                            t.target.classList.add("scroll-enter-active");
                            o.unobserve(t.target);
                        }
                    })
                }, { threshold: .1, rootMargin: "0px 0px -50px 0px" });
                document.querySelectorAll(".scroll-enter").forEach(e => o.observe(e));
            } catch (err) {
                console.error("Error reinforcing animations", err);
            }

        }, 300); // Wait for the 0.3s fade out

    } catch (err) {
        console.error('Transition Failed:', err);
        window.location.href = url; // Fallback to normal navigation
    }
}

// --- Gallery Logic for About Us Page ---
const founderImages = [
    'assets/images/giang-vuong-portrait.jpg',
    'assets/images/giang-vuong-speaking.jpg',
    'assets/images/giang-vuong-sky.jpg'
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
