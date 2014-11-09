gulp = require 'gulp'
plumber = require 'gulp-plumber'
sourcemaps = require 'gulp-sourcemaps'
coffee = require 'gulp-coffee'
coffeelint = require 'gulp-coffeelint'
notify = require 'gulp-notify'
uglify = require 'gulp-uglify'
rename = require 'gulp-rename'
bump = require 'gulp-bump'
browserSync = require 'browser-sync'

gulp.task 'coffee', ->
  gulp.src 'src/canvas-tsumiki-logo.coffee'
    .pipe plumber(
      errorHandler: notify.onError '<%= error %>'
    )
    .pipe coffeelint()
    .pipe sourcemaps.init()
    .pipe coffee()
    .pipe sourcemaps.write()
    .pipe gulp.dest('dest/')

gulp.task 'serve', ->
  browserSync(
    server:
      baseDir: './'
      index: 'demo/index.html'
  )

gulp.task 'default', ['serve'], ->
  gulp.watch ['src/canvas-tsumiki-logo.coffee'], ['coffee', browserSync.reload]

gulp.task 'major', ->
  gulp.src './*.json'
    .pipe bump(
      type: 'major'
    )
    .pipe gulp.dest('./')

gulp.task 'minor', ->
  gulp.src './*.json'
    .pipe bump(
      type: 'minor'
    )
    .pipe gulp.dest('./')

gulp.task 'patch', ->
  gulp.src './*.json'
    .pipe bump(
      type: 'patch'
    )
    .pipe gulp.dest('./')

gulp.task 'build', ->
  gulp.src 'src/canvas-tsumiki-logo.coffee'
    .pipe coffeelint()
    .pipe coffee()
    .pipe uglify(
      preserveComments: 'some'
    )
    .pipe rename(
      extname: '.min.js'
    )
    .pipe gulp.dest('dest/')
