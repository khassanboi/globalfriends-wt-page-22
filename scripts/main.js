document.getElementById("menu-icon").addEventListener("click", () => {
  document.getElementById("nav-list").classList.toggle("visible");
});

document.querySelectorAll(".nav__item-link").forEach((el) => {
  el.addEventListener("click", function (e) {
    document.getElementById("nav-list").classList.toggle("visible");
  });
});

$(".owl-carousel.alumni__carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
$("#my-accordion").accordionjs({ activeIndex: false });
$("#my-accordion-2").accordionjs({ activeIndex: false });

$(".owl-carousel.certificates__carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1000,
  dots: false,
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

$(".owl-carousel.sponsors__carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1000,
  dots: false,
  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 6,
    },
  },
});
