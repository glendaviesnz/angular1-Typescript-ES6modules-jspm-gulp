var gulp         = require('gulp');
var shell        = require('gulp-shell');

gulp.task('scripts-bundle', shell.task([
    'jspm bundle-sfx build/development/js/app build/production/app.js'
]));
