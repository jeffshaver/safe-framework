var gulp = require('gulp')
var babelify = require('babelify')
var watchify = require('watchify')
var liveReactLoad = require('livereactload')
var browserify = require('browserify')
var uglify = require('gulp-uglify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var sourcemaps = require('gulp-sourcemaps')
var gutil = require('gulp-util')
var gulpif = require('gulp-if')
var assign = require('lodash').assign
var config = require('./config.js')
var argv = require('yargs').argv;

var customOpts = {
  entries: 'js/index.jsx',
  extensions: ['.jsx']
}

var watchOpts = assign({}, watchify.args, customOpts)
var opts = assign({}, customOpts)

gulp.task('babel', babel)
gulp.task('watch', watch)

function watch () {
  var b = watchify(browserify(watchOpts))
  
  if (!argv.disableLiveLoad) {
    b.plugin(liveReactLoad, {port: 8081, host: config.hotModuleReloadUri})
  }
  
  b.transform('babelify', {presets: ['es2015', 'stage-0', 'react'], plugins: [['transform-decorators-legacy']]})
  b.on('update', bundle.bind(null, b))
  b.on('log', gutil.log)
  return bundle(b)
}

function babel () {
  var b = browserify(opts)
  b.transform('babelify', {presets: ['es2015', 'stage-0', 'react'], plugins: [['transform-decorators-legacy']]})
  return bundle(b)
}

function bundle (b) {
  return b.bundle()
  .on('error', gutil.log)
  .pipe(source('bundle.js'))
  .pipe(buffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(gulpif(process.env.MODE === 'prod', uglify()))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('dist'))
}