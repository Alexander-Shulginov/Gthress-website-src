module.exports = {
	htmlMin: {
		//* Удаляет пробелы
		collapseWhitespace: true,
		//* Удаляет комментарии
		removeComments: true,
	},

	rename: {
		//* Переименовывает минифицированный файл
		suffix: ".min",
	},

	purgeCss: {
		//* Путь до сканируемых на наличие css классов файлов
		content: ["./public/*.html", "./public/js/*.js"],
	},

	cleanCss: {
		//* Максимальный уровень сжатия выходного css файла
		level: 2,
	},

	sprite: {
		//* Имя выходного файла для спрайта
		mode: {
			stack: {
				sprite: "../sprite/sprite.svg",
			},
		},
	},

	responsiveOptions: {
		//* Ресайз в х2 и х3 раза + переименование полученных файлов
		"**/*": [
			{
				width: "100%",
			},
			{
				width: "200%",
				rename: { suffix: "@2x" },
			},
			{
				width: "300%",
				rename: { suffix: "@3x" },
			},
		],
	},
};
