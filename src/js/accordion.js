const accordion = () => {
	//* Получаем классы стилей
	const cssAccordionItem = ".accordion__item";
	const cssAccordionBody = ".accordion__body";
	const cssAccordionArrow = ".accordion__icon";
	const cssAccordionBodyIsActive = "accordion__body--active";
	const cssAccordionArrowIsActive = "accordion__icon--active";

	//* Получаем элементы
	const accordionItems = document.querySelectorAll(cssAccordionItem);
	const accordionBody = document.querySelectorAll(cssAccordionBody);
	const accordionArrows = document.querySelectorAll(cssAccordionArrow);

	//* Устанавливаем высоту элементу что бы он появился и применяем стили
	const setActiveStyles = (element) => {
		element.style.height = `${element.scrollHeight}px`;
		element.classList.add(cssAccordionBodyIsActive);
	};

	//* Удаляем высоту элементы что бы он скрылся и удаляем стили
	const removeActiveStyles = (element) => {
		element.removeAttribute("style");
		element.classList.remove(cssAccordionBodyIsActive);
	};

	//* Добавляем стили, изменяем положение стрелочки
	const toggleArrowClass = (arrow) => {
		arrow.classList.add(cssAccordionArrowIsActive);
	};

	//* Удаляем стили, возвращаем положение стрелочки
	const removeArrowClass = (arrow) => {
		arrow.classList.remove(cssAccordionArrowIsActive);
	};

	//* Делаем первый элемент раскрытым по умолчанию
	accordionBody.forEach((item) => {
		if (item.classList.contains(cssAccordionBodyIsActive)) {
			setActiveStyles(item);
		}
	});

	//* По клику, если на элементе нет аттрибута style - получаем высоту и устанавливаем ее, тем самым раскрывая элемент, если аттрибут style установле - удаляем его, высота сбрасывается - элемент скрывается
	accordionItems.forEach((elem) => {
		elem.addEventListener("click", (event) => {
			let childBody = elem.querySelector(cssAccordionBody);
			let arrow = elem.querySelector(cssAccordionArrow);

			if (event.target.closest(cssAccordionBody)) return;

			if (!childBody.getAttribute("style")) {
				accordionBody.forEach((item) => {
					removeActiveStyles(item);
				});

				setActiveStyles(childBody);
				accordionArrows.forEach((item) => {
					removeArrowClass(item);
				});

				toggleArrowClass(arrow);
			} else {
				removeActiveStyles(childBody);

				removeArrowClass(arrow);
			}
		});
	});
};

export default accordion;
