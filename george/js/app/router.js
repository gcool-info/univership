define([
        'js/app/models/jsonmerger.js',
        'js/app/models/portfolio.js',
        'js/app/models/project.js',
        'js/app/views/header.js',
        'js/app/views/home.js',
        'js/app/views/project.js'
    ], function (JsonMerger, Portfolio, ProjectModel, HeaderView, HomeView, ProjectView) {

        return Backbone.Router.extend({

            defaults: {
                "portfolio" : new Portfolio()
            },

            routes: {
                "": "home",
                "project/:id": "project"
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

            project: function(projectId) {
                this.loadSingleProject(projectId, function(projectModel) {
                    var projectView = new ProjectView({model : projectModel});
                });
            },

            loadProjects: function(callback) {
                var jsonmMerger = new JsonMerger(function(projects) {
                    this.portfolio = new Portfolio(projects);

                    if (callback) {
                        callback();
                    }
                });
            },

            loadSingleProject: function(projectId, callback) {
                var self = this;
                var projectURL = 'assets/projectpages/' + projectId + '.json';
                var projectModel = new ProjectModel( );

                projectModel.fetch( { 
                    url : projectURL,
                    success: function() {
                        callback(projectModel);
                    },
                    error: function() {
                        console.log('error');
                    }
                });
            }
        });
});