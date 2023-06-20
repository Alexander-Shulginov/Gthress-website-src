import Swiper from "./swiper-bundle.esm.browser.min.js";
const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	spaceBetween: 16,

	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	breakpoints: {
		480: {
			slidesPerView: 1.5,
		},

		768: {
			slidesPerView: 2.5,
		},
	},
});

export default swiper;