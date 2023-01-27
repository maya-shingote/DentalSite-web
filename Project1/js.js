//toggle contact
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleContact");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");


}

function toggleContact() {
    const toggleContact = document.querySelector(".toggleContact");
    const toggleMenu = document.querySelector(".ContactMenu");
    toggleContact.classList.toggle("c-active");
    ContactMenu.classList.toggle("c-active");


}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
     spaceBetween: 10,
    autoplay: {
      delay: 250000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    });
  