var app               = 'app';
var src               = 'app/src';
var srcAssets         = 'app/assets';
var vendor            = 'app/vendor';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var developmentAssets = 'build/development/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
    browsersync: {
        development: {
            server: {
                baseDir: './',
                routes: {
                    "/" : "app",
                    "/jspm" : "jspm_packages",
                    "/js": development + '/js',
                    "/assets/css": development + '/css'
                }
            },
            port: 3000,
            files: [
                development + '/css/**/*.css',
                development  + '/js/**/*.js',
                developmentAssets + '/images/**',
                development + '/**/*.html'
            ]
        }
    },
    delete: {
        development: [development],
        production: [production],
    },

    watch: {
        html: src + '/**/*.html',
        scripts: src + '/**/*.ts',
        sass: app + '/**/*.scss'
    },

    typescript: {
        development: {
            scripts: app + '/src/**/*.ts',
            dest: development + '/js'
        },
        production: {
            scripts: src + '/**/*.ts',
            dest: production + '/js/src'
        }
    },

    html: {
        development: {
            source: app + '/**/*.html',
            dest: development
        },
        production: {
            source: app + '/**/*.html',
            dest: production
        }
    },

    sass: {
        development: {
            source: app + '/**/*.scss',
            dest: development + '/css'
        },
        production: {
            source: app + '/**/*.scss',
            dest: productionAssets + '/css'
        }
    }

};
