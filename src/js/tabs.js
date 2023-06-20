const tabs = () => {
	const allTabs = document.querySelectorAll(".custom-tabs");

	const activeBtnClass = "custom-tabs__btn--active";
	const activeContentClass = "custom-tabs__content--active";

	// устанавливаем ID для каждой кнопки и контента
	function setIds(tabsElements) {
		tabsElements.forEach((el, index) => {
			el.setAttribute("data-order", index + 1);
		});
	}

	// удаляем класс активной кнопки
	function resetBtnColor(tabsBtn) {
		tabsBtn.forEach((el) => {
			el.classList.remove(activeBtnClass);
		});
	}

	// устанавливаем класс активной кнопки
	function activateBtn(event) {
		event.target.classList.add(activeBtnClass);
	}

	// изменяем цвет активной кнопки
	function changeColor(tabsBtn) {
		tabsBtn.forEach((el) => {
			el.addEventListener("focusin", (event) => {
				resetBtnColor(tabsBtn);
				activateBtn(event);
			});
		});
	}

	// получаем ID нажатой кнопки
	function getCurrentBtnOrder(event) {
		return event.target.getAttribute("data-order");
	}

	// получаем ID соответствующего контента
	function getContentOrder(content) {
		return content.getAttribute("data-order");
	}

	// скрываем все контенты
	function hideAllContent(tabsContent) {
		tabsContent.forEach((content) => {
			content.classList.remove(activeContentClass);
		});
	}

	// отображаем соответствующий контент
	function showContent(event, tabsContent) {
		tabsContent.forEach((content) => {
			if (getCurrentBtnOrder(event) === getContentOrder(content)) {
				content.classList.add(activeContentClass);
			}
		});
	}

	// логика скрытия/отображения контента
	function toggleContent(tabsBtn, tabsContent) {
		tabsBtn.forEach((btn) => {
			btn.addEventListener("focusin", (event) => {
				hideAllContent(tabsContent);
				showContent(event, tabsContent);
			});
		});
	}

	allTabs.forEach((tabs) => {
		let tabsBtn = tabs.querySelectorAll(".custom-tabs__btn");
		let tabsContent = tabs.querySelectorAll(".custom-tabs__content");

		setIds(tabsBtn);
		setIds(tabsContent);
		changeColor(tabsBtn);
		toggleContent(tabsBtn, tabsContent);
	});
};


export default tabs;
