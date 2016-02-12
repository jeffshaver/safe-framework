var gulp = require('gulp')
var shell = require('gulp-shell')

function watch () {
  console.log('running watch')
  gulp.watch('src/**/*.js*', ['build'])
}

gulp.task('watch', watch)
gulp.task('build', shell.task(['npm run build-examples']))