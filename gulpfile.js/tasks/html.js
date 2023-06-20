//* Минификация
const htmlMin = require("gulp-htmlmin");
//* Шаблонизатор
const pug = require("gulp-pug");

const html = () => {
	return $.gulp
		.src($.path.html.src)
		.pipe(pug())
		.pipe(htmlMin($.config.htmlMin))
		.pipe($.gulp.dest($.path.html.dest))
		.pipe($.browserSync.stream());
};

module.exports = html;
