document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    gsap.registerPlugin(ScrollTrigger);
    
    // ... (keep all the existing code here)

    // New code for scroll-progress in section 2
    const scrollProgress = document.querySelector('.home__ScrollProgress');
    const scrollBox = document.querySelector('.home__ScrollBox');
    const scrollItems = document.querySelectorAll('.home__ScrollItem');

    if (scrollProgress && scrollBox && scrollItems.length > 0) {
        const progressSpans = scrollProgress.querySelectorAll('span');
        
        ScrollTrigger.create({
            trigger: scrollBox,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const progress = self.progress;
                const itemHeight = scrollBox.offsetHeight / scrollItems.length;
                const currentIndex = Math.floor(progress * scrollItems.length);
                
                // Update progress bar position
                gsap.to(scrollProgress, {
                    y: `calc(-50% + ${progress * scrollBox.offsetHeight}px)`,
                    duration: 0.1
                });

                // Update span classes
                progressSpans.forEach((span, index) => {
                    if (index < currentIndex) {
                        span.classList.add('isFinished');
                        span.classList.remove('isActive');
                    } else if (index === currentIndex) {
                        span.classList.add('isActive');
                        span.classList.remove('isFinished');
                    } else {
                        span.classList.remove('isActive', 'isFinished');
                    }
                });
            }
        });
    }
});
