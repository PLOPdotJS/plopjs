'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');

var files = ['gulpfile.js', './lib/*.js', './test/*.js',
'!node_modules/**', '!*.json'];

var testFiles = ['./test/*test.js'];

gulp.task('lint', () => {
  return gulp.src(files)
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('test', () => {
  return gulp.src(testFiles, { read: false })
  .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('watch', () => {
  gulp.watch(files, ['lint', 'test']);
});

gulp.task('default', ['watch', 'lint', 'test'], () => {
  console.log('Got lucky again eh!');
});
