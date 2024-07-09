const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

/*Função para comprimir os arquivos css com o sass*/
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyles: "compressed"}))
    .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.series(styles))
}