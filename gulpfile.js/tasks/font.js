//* Не конвертирует уже сконвертированные файлы
const newer = require("gulp-newer");

const font = () => {
	return $.gulp
		.src($.path.font.src)
		.pipe(newer($.path.font.dest))
		.pipe($.gulp.dest($.path.font.dest));
};

module.exports = font;
