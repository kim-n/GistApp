window.GistApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    GistApp.gists = new GistApp.Collections.Gists();
    GistApp.tags = new GistApp.Collections.Tags();
    GistApp.tags.fetch();
    new GistApp.Routers.GistRouter({$rootEl: $('#content')});
    Backbone.history.start();
  }
};

