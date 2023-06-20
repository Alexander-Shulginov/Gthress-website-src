const server = () => {
	$.browserSync.init({
		server: {
			baseDir: $.path.root, //* Путь к транслируемому файлу
		},
	});
};

module.exports = server;
