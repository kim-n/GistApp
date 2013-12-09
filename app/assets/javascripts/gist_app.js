window.GistApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    GistApp.gists = new GistApp.Collections.Gists();
    new GistApp.Routers.GistRouter({$rootEl: $('#content')});
    Backbone.history.start();
  }
};

