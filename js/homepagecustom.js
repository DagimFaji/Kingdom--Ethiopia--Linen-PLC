document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");

    function checkVisibility() {
        animatedElements.forEach(function (element) {
            const elementPosition = element.getBoundingClientRect();

            // Check if the element is in the viewport
            if (elementPosition.top < window.innerHeight * 0.8) {
                element.classList.add("visible");
            }
        });
    }

    let lastScrollTop = 0;

    function handleScroll() {
        const st = window.scrollY || document.documentElement.scrollTop;

        // Check the scroll direction
        if (st > lastScrollTop) {
            // Scrolling down
            animatedElements.forEach(function (element) {
                element.classList.remove("visible");
            });
        } else {
            // Scrolling up
            checkVisibility();
        }

        lastScrollTop = st <= 0 ? 0 : st;
    }

    // Initial check when the page is loaded
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener("scroll", handleScroll);
});
