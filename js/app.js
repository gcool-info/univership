require.config({

    baseUrl: "js",

    paths: {
        "app"   : "app",
        "text"  : "lib/text",
    },

    shim: {
        "lib/backbone-min": {
            deps: ["lib/underscore-min", "lib/jquery-1.11.3.min"],
            exports: "Backbone"
        },
        "lib/bootstrap.min": {
            deps: ["lib/jquery-1.11.3.min"],
            exports: "Bootstrap"
        },
        "app/router": {
            deps: ["lib/backbone-min", "lib/bootstrap.min"],
            exports: "Router"
        },
    }
});

require(['app/router'], function (Router) {
    var router = new Router();
    Backbone.history.start();
});