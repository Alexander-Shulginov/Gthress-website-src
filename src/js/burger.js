const burger = () => {
	const burgerBtn = document.querySelector(".header__burger");
	const burgerMenu = document.querySelector(".menu");

	const cssBtnIsClose = "header__close";
	const cssMenuIsActive = "menu--active";
	const cssVisibulity = "is-hidden";

	burgerBtn.addEventListener("click", () => {
		burgerBtn.classList.toggle(cssBtnIsClose);
		burgerMenu.classList.toggle(cssMenuIsActive);
		document.body.classList.toggle(cssVisibulity);
	});
};

export default burger;
