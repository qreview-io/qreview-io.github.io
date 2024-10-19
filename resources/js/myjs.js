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


});