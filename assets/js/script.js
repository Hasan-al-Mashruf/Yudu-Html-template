var swiper = new Swiper(".hero-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".bestSelling-swiper", {
    loop: true,
    freeMode: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
});

const description = document.querySelectorAll('.descripion')
console.log(description)

description.forEach((p) => {
    const text = p.textContent.trim().split(" ");
    const truncated = text.slice(0, 5).join(" ");
    console.log(truncated)
    p.textContent = truncated + "...";

    p.addEventListener('click', function () {
        p.textContent = p.title
    })
});

