/**
 * Define config as global require variable before require.js is actually loaded.
 * Make sure this script is loaded in the html <head> before require.js
 * http://requirejs.org/docs/api.html#config
 */
var require = {

    paths: {
        jquery: 'vendor/jquery-2.0.3-min',
        underscore: 'vendor/underscore-1.5.2-min',
        backbone: 'vendor/backbone-1.1.0-min',
        text: 'vendor/text-2.0.10'
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
