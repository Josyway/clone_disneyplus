const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

/*Função para comprimir os arquivos css com o sass*/
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyles: "compressed"}))
    .pipe(gulp.dest('./dist/css'));
}

/*Função para comprimir os arquivos de imagens*/
function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.series(images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.series(styles))
}