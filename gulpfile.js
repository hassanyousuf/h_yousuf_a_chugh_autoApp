
var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
  browserSync.init({

      server: {
        baseDir: './', 
        index: 'index.html'
      }

  });

});

gulp.task('sass', function () {
  
  return gulp.src('./sass/*.scss')
  
  .pipe(sass({outputStyle : 'compressed'}).on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

//Min images
gulp.task('imagemin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);