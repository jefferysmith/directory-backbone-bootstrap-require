require(['jquery', 'backbone', 'routes/router'],
function ($, Backbone, Router) {
    "use strict";

    // jquery has been loaded, now we can initialize the application.
    $(function() {
        var router = new Router();
       Backbone.history.start();
    });
});
