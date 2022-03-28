const config = {
  type: "carousel",
  perView: 2,
  breakpoints: {
    768: {
      perView: 1,
    },
    425: {
      perView: 1,
    },
  },
};

new Glide(".glide", config).mount();