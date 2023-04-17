var swiper = new Swiper(".hero-swiper", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 500,
    autoplayHoverPause: false,
    slideTransition: 'linear',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var swiper = new Swiper(".bestSelling-swipers", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
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
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    },
});


const description = document.querySelectorAll('.descripion')
console.log(description)



description.forEach((p) => {
    const text = p.textContent.trim().split(" ");
    console.log(text)
    const truncated = text.slice(0, 5).join(" ");
    console.log(truncated)
    p.textContent = truncated + "...";

    p.addEventListener('click', function () {
        p.textContent = p.title
    })
});


var swiper = new Swiper(".productDetails", {
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        520: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
});

var swiper = new Swiper(".productSlider", {
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 05,
        },
        520: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 16,
    nav: false,
    dots: false,
    autoplay: true,

    autoplaySpeed: 20000,
    smartSpeed: 20000,
    autoplayHoverPause: false,
    slideTransition: 'linear',
    padding: 0,
    responsive: {
        0: {
            items: 1,
            margin: 10,
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

const categoryList = document.querySelectorAll('.categories .content')
console.log(categoryList)

const clearAll = (arrow) => {
    arrow.classList.remove('againhide')
    arrow.classList.add('hide')
}

categoryList.forEach(category => {
    const arrow = category.children[1].children[1].children[0].children[0]
    category.addEventListener('mouseover', () => {
        arrow.classList.remove('hide')
        arrow.classList.add('show')
    })

    category.addEventListener('mouseleave', () => {
        arrow.classList.remove('show')
        arrow.classList.add('againhide')

        setTimeout(() => {
            clearAll(arrow)
        }, 300)
    })
})