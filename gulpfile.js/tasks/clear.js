//* npm i -D del@6.1.1" 
//* Удаляет указанные файлы и папки
const del = require("del");

const clear = () => {
	return del($.path.root);
};

module.exports = clear;
