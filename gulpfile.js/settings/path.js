const path_src = "./src";
const path_dest = "./public";

module.exports = {
	root: path_dest,

	html: {
		src: path_src + "/html/pages/*.{pug,html}",
		watch: path_src + "/html/**/*.{pug,html}",
		dest: path_dest,
	},

	html_pages: {
		src: path_src + "/html/pages/*.{pug,html}",
		watch: path_src + "/html/pages/*.{pug,html}",
		dest: path_dest + "/pages",
	},

	scss: {
		src: path_src + "/scss/*.{scss,sass}",
		watch: path_src + "/**/*.{scss,sass}",
		dest: path_dest + "/css",
	},

	js: {
		src: path_src + "/js/*.js",
		watch: path_src + "/js/**/*.js",
		dest: path_dest + "/js",
	},

	img: {
		src: path_src + "/img/**/*.{jpg,png,webp,avif,jpeg,gif,svg}",
		watch: path_src + "/img/**/*.{jpg,png,webp,avif,jpeg,gif,svg}",
		dest: path_dest + "/img",
	},

	icon: {
		src: path_src + "/icons/**/*.{svg,png,xml,ico,webmanifest}",
		watch: path_src + "/icons/**/*",
		dest: path_dest + "/icons",
	},

	font: {
		src: path_src + "/fonts/**/*.{woff,woff2,eot,ttf,otf,otc,ttc,svg}",
		watch: path_src + "/fonts/**/*.{woff,woff2,eot,ttf,otf,otc,ttc,svg}",
		dest: path_dest + "/fonts",
	},
};
