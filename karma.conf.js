// Karma configuration
// Generated on Mon May 16 2016 17:09:31 GMT+0800 (China Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../ocangular/',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'app/assets/js/jquery-2.1.4.min.js',
            'app/assets/js/bootstrap.min.js',
            'ocTest/js/lib/angular.js',
            'ocTest/js/lib/angular-mocks.js',
            'app/assets/angularjs/angular-resource.min.js',
            'app/assets/js/angular-css-injector.js',
            'app/assets/node_modules/angular-new-router/dist/router.es5.js',
            'app/assets/angularjs/angular-animate.min.js',
            'app/assets/angularjs/angular-messages.min.js',
            'app/assets/js/ui-bootstrap-tpls-0.12.1.min.js',
            'app/assets/js/angular-local-storage.min.js',
            'app/assets/js/angular-preload-image.min.js',
            'app/assets/kendo/js/jszip.min.js',
            'app/assets/kendo/js/kendo.all.min.js',
            'app/assets/datepicker/moment.js',
            'app/assets/datepicker/ng-bs3-datepicker.js',
            'app/assets/nghandsontable/handsontable.full.js',
            'app/assets/nghandsontable/ngHandsontable.js',
            'app/assets/ngdialog/ngDialog.js',
            'app/assets/js/autogrow-textarea.js',
            //
            'app/appModules.js',
            'app/appCore.js',
            'app/appRoutes.js',
            'app/services/appServices.js',
            'app/components/rfdtax/RfdTaxController.js',
            'app/components/rfdstate/RfdStateController.js',
            'app/components/rfdsector/RfdSectorController.js',
            //
            'ocTest/js/rcSpec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'junit', 'coverage'],
        junitReporter: {
            outputDir: 'ocTest/testResults',
            outputFile: 'ocTestResults.xml',
            useBrowserName: false,
            suite: 'ocTest'
        },
        coverageReporter: {
          type : 'lcov',
          dir : 'ocTest/testResults',
          subdir: 'coverage'
        },
        preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)
          'app/components/*/*.js': ['coverage']
        },
        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // 'Chrome','firefox'
        browsers: ['PhantomJS'],
        plugins: [
            // 'karma-chrome-launcher',
            // 'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
        ],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
