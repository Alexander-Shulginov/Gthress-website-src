//* Не конвертирует уже сконвертированные файлы
const newer = require("gulp-newer");
//* Минификация файлов
const svgMinify = require("gulp-svgmin");
//* Создание Svg спрайта
const svgSprire = require("gulp-svg-sprite");

const icons = () => {
	return $.gulp
		.src([$.path.icon.src, "!./src/icons/favicon/*"])
		.pipe(newer($.path.icon.dest))
		.pipe(svgMinify())
		.pipe(svgSprire($.config.sprite))
		.pipe($.gulp.dest($.path.icon.dest))
		.pipe($.gulp.src($.path.icon.src))
		.pipe($.gulp.dest($.path.icon.dest))
		.pipe($.browserSync.stream());
};

module.exports = icons;

//* Сначала минификация + спрайт всех .svg иконок, кроме папки favicon
//* Затем папка favicon и исходные иконки дублируются в папку ./public
