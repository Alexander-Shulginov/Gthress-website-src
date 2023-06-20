//* Не конвертирует уже сконвертированные файлы
const newer = require("gulp-newer");
//* Конвертирует в формат webp
const webp = require("gulp-webp");
//* Ресайз и ренейм изображений для ретина дисплеев
const responsiveImg = require("gulp-responsive-images");

const img = () => {
	return (
		$.gulp
			.src($.path.img.src)
			.pipe(newer($.path.img.dest))
			.pipe(webp())
			// .pipe(responsiveImg($.config.responsiveOptions))
			.pipe($.gulp.dest($.path.img.dest))
			.pipe($.browserSync.stream())
	);
};

module.exports = img;

//* Плагин gulp-responsice-images отключен, так как ресайз занимает слишком много времени, так же он требует image-magick, что может привести к проблемам на windows
