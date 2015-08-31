'use strict';

module.exports = function(karma) {
    karma.set({

        frameworks: [ 'jspm', 'jasmine'],

        files: [
            'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js',
        ],

        reporters: [ 'dots', 'html'],
        preprocessors: {
            './build/development/js/**/*.js': ['babel']
        },
        jspm: {
            config: './app/config/config-karma.js',
            loadFiles: [
                'build/development/js/**/*.js'
            ]
        },
        babelPreprocessor: {
            options: { sourceMap:'inline', modules:'system' }
        },
        browsers: ['PhantomJS'],

        logLevel: 'LOG_DEBUG',

        singleRun: false,
        autoWatch: true,

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        htmlReporter: {
            outputDir: 'karma_html/',
            focusOnFailures: true,
            namedFiles: false,
            pageTitle: null,
            urlFriendlyName: false,
            preserveDescribeNesting: true,
            foldAll: false,
        }
    });
};
