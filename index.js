document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('a[href="#whyus"]').addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#whyus").scrollIntoView({ behavior: "smooth" });
    });


    document.querySelectorAll(".appointment-btn").forEach((button) => {
        button.addEventListener("click", () => {
            alert("Appointment booking feature coming soon!");
        });
    });

    const carousel = document.querySelector("#carouselExampleControls");
    let currentIndex = 0;
    const slides = carousel.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    const showSlide = (index) => {
        slides.forEach((slide, idx) => {
            slide.classList.toggle("active", idx === index);
        });
    };

    document.querySelector(".carousel-control-prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    });

    document.querySelector(".carousel-control-next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    });

    // Social media icons hover effect
    document.querySelectorAll(".social-media-cont svg").forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            icon.style.color = "#007bff";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.color = "";
        });
    });

    // Insights hover effect
    document.querySelectorAll(".six-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "";
        });
    });

    // Back and Forward buttons in "Exceptional facades delivered"
    const thirdPageButtons = document.querySelectorAll(".third-page-btn");
    let facadeIndex = 0;
    const facadeTexts = [
        "Exceptional facades delivered",
        "Innovative facade designs",
        "Leading facade engineering"
    ];
    const facadeHeading = document.querySelector(".third-page h2");

    const updateFacadeText = () => {
        facadeHeading.textContent = facadeTexts[facadeIndex];
    };

    thirdPageButtons[0].addEventListener("click", () => {
        facadeIndex = (facadeIndex - 1 + facadeTexts.length) % facadeTexts.length;
        updateFacadeText();
    });

    thirdPageButtons[1].addEventListener("click", () => {
        facadeIndex = (facadeIndex + 1) % facadeTexts.length;
        updateFacadeText();
    });
});