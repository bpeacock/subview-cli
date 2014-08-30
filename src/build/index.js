var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    subviewTransform = require('./subviewTransform');

module.exports = function(srcFile, destFile, transforms) {
  transforms = transforms || [];
  transforms.unshift();

  gulp.src(srcFile)
    .pipe(browserify({
      transform: transforms
    }))
    .pipe(gulp.dest(destFile));
};
