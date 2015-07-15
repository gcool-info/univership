define([
        'js/app/models/jsonmerger.js',
        'js/app/models/portfolio.js',
        'js/app/views/header.js',
        'js/app/views/home.js'
    ], function (JsonMerger, Portfolio, HeaderView, HomeView) {

        return Backbone.Router.extend({

            defaults: {
                "portfolio" : new Portfolio(),
            },

            routes: {
                "": "home",
                "project/:id": "project",
                "projects/:id": "legacyURL"
            },

            initialize: function () {
                this.loadProjects();
                var headerView = new HeaderView();
            },

            home: function () { 
                if (!this.portfolio) {
                    this.loadProjects(function() {
                        var homeView = new HomeView({collection : this.portfolio});
                    });

                    return;
                }

                var homeView = new HomeView({collection : this.portfolio});
            },

            project: function() {
                if (!this.portfolio) {
                    this.loadProjects();
                }
            },

            legacyURL: function() {

            },

            loadProjects: function(callback) {
                var jsonmMerger = new JsonMerger(function(projects) {
                    this.portfolio = new Portfolio(projects);

                    if (callback) {
                        callback();
                    }
                });
            }
        });
});