//* Автопрефиксер список браузеров в package.json
const autoprefixer = require("gulp-autoprefixer");
//* Минификация кода
const cleanCSS = require("gulp-clean-css");
//* Удаление не используемых селекторов
const purgeCss = require("gulp-purgecss");
//* Группирует @media queries
const groupCssMediaQueries = require("gulp-group-css-media-queries");
//* Переименовывает выходной файл
const rename = require("gulp-rename");
//* Scss препроцессор
const sass = require("gulp-sass")(require("sass"));
//* Добавляет маски - */**
const sassGlob = require("gulp-sass-glob");

const scss = () => {
	return $.gulp
		.src($.path.scss.src)
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(groupCssMediaQueries())
		.pipe($.gulp.dest($.path.scss.dest))
		.pipe(rename($.config.rename))
		.pipe(cleanCSS($.config.cleanCss))
		// .pipe(purgeCss($.config.purgeCss))
		.pipe($.gulp.dest($.path.scss.dest))
		.pipe($.browserSync.stream());
};

module.exports = scss;
