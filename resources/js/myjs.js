document.addEventListener("DOMContentLoaded", function () {

    let lastScrollTop = 0;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".home__Scroll", {
        scrollTrigger: {
            trigger: ".home__Scroll",  // Element to watch
            start: "top center",      // When the top of .trigger-div hits the center of the viewport
            onEnter: () => {
                document.body.classList.add("isBlack");
            },
            onEnterBack: () => {
                document.body.classList.add("isBlack");
            },
            onLeave: () => {
                document.body.classList.remove("isBlack");
            },
            onLeaveBack: () => {
                document.body.classList.remove("isBlack");
            }
        }
    });

    // Create a GSAP ScrollTrigger
    ScrollTrigger.create({
        start: "top top", // Start trigger
        end: "bottom bottom", // End trigger
        onUpdate: (self) => {
            // Get the current scroll position
            const currentScrollTop = self.scroll(); // GSAP ScrollTrigger gives scroll position
            const header = document.querySelector('#__layout .page header.navigation.isScrolled');
            if (header) {
                if (currentScrollTop > lastScrollTop) {
                    header.classList.remove('isVisible');
                    // Add your logic for scrolling down
                } else {
                    header.classList.add('isVisible');
                    // Add your logic for scrolling up
                }

                // Update last scroll position
                lastScrollTop = currentScrollTop;
            }
            // Compare the current scroll position with the last scroll position

        }
    });

    const scrollItems = document.querySelectorAll('.home__ScrollItem');
    const phoneImages = document.querySelectorAll('.home__ScrollPhoneWrapper.isDesktop.animate.isBottom img');

    if (scrollItems.length !== phoneImages.length) {
        console.log(phoneImages.length);
        console.error("Number of scroll items and images do not match!");
        return;
    }
    scrollItems.forEach((item, index) => {
        // Create a ScrollTrigger for each item
        ScrollTrigger.create({
            trigger: item,
            start: "top 50%",   // When the item is 80% from the top of the viewport
            end: "bottom top",  // When the bottom of the item leaves the viewport
            onEnter: () => {
                phoneImages.forEach(img => img.classList.remove('isActive'));
                phoneImages[index].classList.add('isActive');
                // If it's not the first item, make sure the previous one has been scrolled out
                if (index > 0) {
                    const prevItem = scrollItems[index - 1];
                    prevItem.classList.remove('isActive');  // Remove isActive from previous
                }
                item.classList.add('isActive');  // Add isActive to current
            },
            onLeaveBack: () => {
                // If scrolling up, remove isActive from the current item
                item.classList.remove('isActive');
                phoneImages[index].classList.remove('isActive');
                // If it's not the first item, re-activate the previous one
                if (index > 0) {
                    phoneImages[index - 1].classList.add('isActive');
                    const prevItem = scrollItems[index - 1];
                    prevItem.classList.add('isActive');  // Re-activate the previous item
                }
            }
        });
    });

// Scroll-progress indicator in section 2
const scrollProgress = document.querySelector('.home__ScrollProgress');
const scrollBox = document.querySelector('.home__ScrollBox');

if (scrollProgress && scrollBox) {
    const progressSpans = scrollProgress.querySelectorAll('span');
    const totalItems = progressSpans.length;

    ScrollTrigger.create({
        trigger: scrollBox,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
            const progress = self.progress;
            const currentIndex = Math.floor(progress * totalItems);
            
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
    
    // Changing images in section 4
    const changingImages = document.querySelector('.changingImages__Images');
    const textItems = document.querySelectorAll('.changingImages__Text ul li');
    
    if (changingImages && textItems.length > 0) {
        const images = changingImages.querySelectorAll('img');
        let currentIndex = 0;
        let intervalId;

        function changeImage(index) {
            images[currentIndex].classList.remove('isActive');
            textItems[currentIndex].classList.remove('isActive');
            currentIndex = index;
            images[currentIndex].classList.add('isActive');
            textItems[currentIndex].classList.add('isActive');
        }

        function startInterval() {
            intervalId = setInterval(() => {
                changeImage((currentIndex + 1) % images.length);
            }, 5000);
        }

        function stopInterval() {
            clearInterval(intervalId);
        }

        // Initial state
        changeImage(0);

        // Start the automatic rotation
        startInterval();

        // Add click event listeners to text items
        textItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                stopInterval();
                changeImage(index);
                startInterval();
            });
        });
    }

    // CHF counter in section 6 (pricing section)
    const pricingRoller = document.querySelector('.pricing__Roller h3 span');
    if (pricingRoller) {
        let startValue = 90;
        let endValue = 119;
        let duration = 2;
        
        ScrollTrigger.create({
            trigger: ".pricing",
            start: "top 80%",
            once: true,  // This ensures the animation only happens once
            onEnter: () => {
                gsap.to(pricingRoller, {
                    innerText: endValue,
                    duration: duration,
                    ease: "power1.inOut",
                    snap: { innerText: 1 },
                    modifiers: {
                        innerText: (value) => Math.round(value).toString()
                    }
                });
            }
        });
    }

    // Swiss flag animation in section 5
    const crossLeft = document.querySelector('.features__CrossLeft');
    const crossRight = document.querySelector('.features__CrossRight');

    if (crossLeft && crossRight) {
        gsap.set(crossLeft, { opacity: 0 }); // Set initial opacity to 0 for left image only
        gsap.set(crossRight, { opacity: 1 }); // Ensure right image is fully visible

        ScrollTrigger.create({
            trigger: ".home__FeaturesCross",
            start: "top 80%",
            onEnter: () => {
                gsap.to(crossLeft, { opacity: 1, duration: 1, ease: "power2.out" });
            }
        });
    }

});
