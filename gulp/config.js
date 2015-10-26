var app               = 'app';
var src               = 'app/src';
var srcAssets         = 'app/assets';
var vendor            = 'app/vendor';
var build             = 'build';
var development       = 'build/development';
var coverage          = 'build/coverage';
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
                    "/maps/": development + '/maps',
                    "/js": development + '/js',
                    "/assets/css": development + '/css'
                }
            },
            port: 3000,
            files: [
                development  + '/js/**/*.js',
                developmentAssets + '/images/**'
            ]
        }
    },
    delete: {
        development: development,
        production: production,
        coverage: coverage,
        webstormFiles: ['!' + app + '/src/templates.js', app + '/src/**/*.js', app + '/src/**/*.js.map']
    },

    watch: {
        html: src + '/**/*.html',
        scripts: src + '/**/*.ts',
        sass: app + '/**/*.scss',
    },
    app: app,
    production: production,
    typescript: {
        development: {
            scripts: app + '/src/**/*.ts',
            dest: development + '/js',
            coverage: build + '/coverage/js'
        },
        production: {
            scripts: app + '/src/**/*.ts',
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
            main: app + '/style/app.scss',
            source: src + '/**/*.scss',
            dest: development + '/css'
        },
        production: {
            main: app + '/style/app.scss',
            source: app + '/**/*.scss',
            dest: productionAssets + '/css'
        }
    },

    images: {
        production: {
            source: app + '/assets/images/*.*',
            dest: productionAssets + '/images'
        }
    }

};
