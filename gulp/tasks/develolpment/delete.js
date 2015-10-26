var gulp   = require('gulp');
var del    = require('del');
var path = require('../../config').delete.development;
var webstormFiles = require('../../config').delete.webstormFiles;
/**
 * Delete folders and files
 */
gulp.task('delete', function(callback) {
    del(webstormFiles);
    del(path, callback);
});
