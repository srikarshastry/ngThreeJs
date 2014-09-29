/**
 * Created by hotdog on 9/28/14.
 */
'use strict';

requirejs.onError = function(err){
    if(err.requireType === 'timeout'){
        alert('RequireJs timed out. Reload the app');
    }
    throw err;
};

require.config({
    // SOME BASIC REQUIREJS CONFIG
    enforceDefine: false,
    xhtml: false,
    waitSeconds: 10,

    // DEFINE PACKAGES
    packages: ['controllers', 'directives', 'filters', 'services'],

    // ALIAS LIBRARY PATHS
    paths: {
        // NAME REFERENCES
        app: 'app',

        // REQUIREJS
        'requirejs': '../bower_components/requirejs/require',
        'domReady': '../bower_components/requirejs-domready/domReady',
        // ANGULAR LIB FILES
        'angular': '../bower_components/angular/angular.min',
        'angular-animate': '../bower_components/angular-animate/angular-animate.min',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies.min',
        'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
        'angular-resource': '../bower_components/angular-resource/angular-resource.min',
        'angular-route': '../bower_components/angular-route/angular-route.min',
        'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize.min',
        'angular-touch': '../bower_components/angular-touch/angular-touch.min',

        // BOOTSTRAP
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
        'bootstrap-affix': '../bower_components/bootstrap/js/affix',
        'bootstap-alert': '../bower_components/bootstrap/js/alert',
        'bootstrap-button': '../bower_components/bootstrap/js/button',
        'bootstrap-carousel': '../bower_components/bootstrap/js/carousel',
        'bootstrap-collapse': '../bower_components/bootstrap/js/collapse',
        'bootstrap-dropdown': '../bower_components/bootstrap/js/dropdown',
        'bootstrap-modal': '../bower_components/bootstrap/js/modal',
        'bootstrap-popover': '../bower_components/bootstrap/js/popover',
        'bootstrap-scrollspy': '../bower_components/bootstrap/js/scrollspy',
        'bootstrap-tab': '../bower_components/bootstrap/js/tab',
        'bootstrap-tooltip': '../bower_components/bootstrap/js/tooltip',
        'bootstrap-transition': '../bower_components/bootstrap/js/transition',

        // ES5-SHIM
        'es5-sham': '../bower_components/es5-shim/es5-sham.min',
        'es5-shim': '../bower_components/es5-shim/es5-shim.min',

        // JQUERY
        'jquery': '../bower_components/jquery/dist/jquery.min',
        // TODO: ADD MORE JQUERY PLUGINS AS YOU USE THEM IN THE APP

        // JSON3
        'json3': '../bower_components/json3/lib/json3.min',

        // THREEJS
        'three': '../bower_components/threejs/build/three.min'
        // TODO: ADD MORE THREEJS PLUGINS AS YOU USE THEM IN THE APP
    },
    map: {
        'bootstrap': {},
        'jquery': {
            'components/jquery/jquery': 'jquery'
        }
    },
    priority: ['angular'],
    shim:{
        // ANGULAR SHIM
        angular:{
            deps: ['jquery'],
            exports: 'angular'
        },
        angularResource:{
            deps: ['angular']
        },
        // BOOTSTRAP SHIM
        bootstrap: {
            deps: ['jquery'],
            exports: '$.fn.modal'
        },

        // THREEJS
        three: {
            exports: 'three'
        }
    }
});

require(['app']);