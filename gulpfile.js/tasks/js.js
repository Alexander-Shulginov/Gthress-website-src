//* Конвертирует код в старый синтаксис presets в package.json
const babel = require("gulp-babel");
//* Минификация кода
const jsMinify = require("gulp-uglify-es").default;

const js = () => {
	return $.gulp
		.src($.path.js.src)
		.pipe(jsMinify())
		// .pipe(babel())
		.pipe($.gulp.dest($.path.js.dest))
		.pipe($.browserSync.stream());
};

module.exports = js;
