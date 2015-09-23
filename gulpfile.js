var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    rename      = require('gulp-rename'),
    cssmin      = require('gulp-minify-css'),
    prefix      = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    size        = require('gulp-size'),
    plumber     = require('gulp-plumber'),
    notify      = require('gulp-notify');


var sassFolder    = 'sass/';
var sassFileName  = 'styles.scss';
var sassWatch     = 'sass/**/*.scss';
var cssFileName  = 'styles.css';

gulp.task('scss', function() {
    var onError = function(err) {
      notify.onError({
          title:    "Gulp",
          subtitle: "Failure!",
          message:  "Error: <%= error.message %>",
          sound:    "Beep"
      })(err);
      this.emit('end');
  };

  return gulp.src(sassFolder+sassFileName)
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix())
    .pipe(rename(cssFileName))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream:true}))
    .pipe(cssmin())
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('css'))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: ""
        }
    });
});


gulp.task('watch', function() {
  gulp.watch(sassWatch, ['scss']);
});


gulp.task('default', ['browser-sync', 'scss', 'watch']);

gulp.task('dev', ['scss', 'watch']);
