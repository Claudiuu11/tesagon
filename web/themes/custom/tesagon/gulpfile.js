const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename')

// Compile SASS files to CSS and add vendor prefixes and minify CSS
gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass({ noCache: true, outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'))
});

// Watch SASS files for changes and compile them
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
});


// Default task
gulp.task('default', gulp.series('sass', 'watch'));
