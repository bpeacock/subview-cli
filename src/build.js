var gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    subviewify  = require('subviewify');

module.exports = function(srcFile, destFile, transforms) {
  transforms = transforms || [];
  transforms.unshift(subviewify);

  gulp.src(srcFile)
    .pipe(browserify({
      transform: transforms
    }))
    .pipe(gulp.dest(destFile));
};
