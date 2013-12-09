GistApp.Routers.GistRouter = Backbone.Router.extend ({
  initialize: function (options) {
    this.$rootEl = options.$rootEl
  },

  routes: {
    "": "gistsIndex",
    "gists/new": "newGist"
  },

  gistsIndex: function () {
    var self = this;

    GistApp.gists.fetch({
      success: function() {
        var indexView = new GistApp.Views.GistsIndex();
        self._swapView(indexView);
      }
    })
  },

  newGist: function() {
    var self = this;
    GistApp.tags.fetch({
      success: function() {
        var formView = new GistApp.Views.GistForm();
        self._swapView(formView);
      }
    })

  },

  _swapView: function (newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
})