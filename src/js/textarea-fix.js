const teaxareaHeightFix = () => {
	const cssElem = ".form__textarea";
	const textareaElem = document.querySelector(cssElem);

	textareaElem.addEventListener("input", () => {
		textareaElem.style.height = "auto";
		let getHeightScroll = textareaElem.scrollHeight;
		textareaElem.style.height = getHeightScroll + "px";
	});
};

export default teaxareaHeightFix;
