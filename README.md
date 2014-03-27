## Employee Directory ##

### Sample Application built with Backbone.js, RequireJS and Twitter Bootstrap ###

"Backbone Directory" is a simple Employee Directory application built with [Backbone.js](http://backbonejs.org), [RequireJS](http://requirejs.org/), and [Twitter Bootstrap] (http://twitter.github.io/bootstrap/).

Refer to [this blog](http://coenraets.org) for more information about the application.


The application runs out-of-the-box with an in-memory data store.

The REST-based implementation expects the following API:

Description                     | HTTP | URL
--------------------------------|------|----
List employees                  | GET  |`employees/`
Get individual employee         | GET  |`employees/[id]`
List individual employee reports| GET  |`employees/[id]/reports`
