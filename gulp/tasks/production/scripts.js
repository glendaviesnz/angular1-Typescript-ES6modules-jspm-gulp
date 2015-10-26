var gulp         = require('gulp');
var shell        = require('gulp-shell');

gulp.task('scripts-bundle', shell.task([
    'jspm bundle-sfx build/production/js/src/app build/production/app.js'
]));
