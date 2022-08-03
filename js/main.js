$ = document.querySelector.bind(document);
$$ = document.querySelectorAll.bind(document);

const menu = $('.icon-menu')
const navbar = $('.navbar')
const userIcon = $('.header-icon .icon-users')
const profile = $('.header-profile')
const loader = $('.loader')
const searchIcon = $('.header-icon .icon-search')
const closeIcon = $('.search-icon--close')
const search = $('header .search')

const app = {
    handelEvents: function () {
        window.onscroll = () => {
            navbar.classList.remove('active')
            profile.classList.remove('active')
        }

        window.onload = () => {
            setTimeout(function () {
                loader.classList.add('loader-out')
            }, 2000)
        }

        menu.onclick = () => {
            navbar.classList.toggle('active')
            profile.classList.remove('active')
        }

        userIcon.onclick = () => {
            profile.classList.toggle('active')
            navbar.classList.remove('active')
        }

        searchIcon.onclick = () => {
            search.classList.add('active')
        }

        closeIcon.onclick = () => {
            search.classList.remove('active')
        }
    },

    slides: function () {
        var swiper = new Swiper(".hero-slide", {
            effect: "flip",
            loop:true,
            grabCursor: true,
            autoplay: {
                delay: 7000,
                disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
            },
          });

        var swiper = new Swiper(".review-slide", {
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: {
              delay: 8000,
              disableOnInteraction: false,
            },
            loop:true,

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    },

    start: function () {
        this.handelEvents();

        this.slides()
    }
}

app.start();