GistApp.Views.GistDetail = Backbone.View.extend ({
  initialize: function(options) {
    this.id = options.id;
  },

  render: function () {
    var templateFn = JST["gist_detail"];
    var gist = GistApp.gists.findWhere({id: this.id});
    var renderedContent = templateFn({gist: gist});

    this.$el.html(renderedContent);
    return this;
  }
})