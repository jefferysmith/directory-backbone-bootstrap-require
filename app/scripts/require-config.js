/**
 * Define config as global require variable before require.js is actually loaded.
 * Make sure this script is loaded in the html <head> before require.js
 * http://requirejs.org/docs/api.html#config
 */
var require = {

//    baseUrl: 'scripts',

    paths: {
        jquery: 'vendor/jquery-1.9.1-min',
        underscore: 'vendor/underscore-1.4.4-min',
        backbone: 'vendor/backbone-1.0.0-min',
        text: 'vendor/text-2.0.7-min'
    },
    map: {
        '*': {
            'models/employee': 'models/memory/employee'
        }
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
};
