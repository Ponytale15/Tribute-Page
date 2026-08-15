document.addEventListener("DOMContentLoaded", function () {

    // Get the main image
    const image = document.getElementById("image");

    // Handle image loading errors
    if (image) {
        image.addEventListener("error", function () {
            this.style.opacity = "0";
        });
    }

    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Timeline animation
    const timelineItems = document.querySelectorAll(".timeline-list li");

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    timelineItems.forEach(function (item) {
        observer.observe(item);
    });

    // Award card interaction
    const awardCards = document.querySelectorAll(".award-pill");

    awardCards.forEach(function (card) {

        card.addEventListener("click", function () {
            this.classList.toggle("selected");
        });

    });

    console.log("Ntokozo Mbambo Tribute Page loaded successfully.");

});