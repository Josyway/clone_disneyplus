const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

/*Função para comprimir as arquivos js com o uglify*/
function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

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

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.scss', gulp.parallel(scripts))
}