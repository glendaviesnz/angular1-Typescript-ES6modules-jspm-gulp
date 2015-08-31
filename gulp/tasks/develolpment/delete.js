var gulp   = require('gulp');
var del    = require('del');
var path = require('../../config').delete.development;

/**
 * Delete folders and files
 */
gulp.task('delete', function(callback) {
    del(path, callback);
});
