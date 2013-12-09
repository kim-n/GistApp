GistApp.Views.GistsIndex = Backbone.View.extend ({
  render: function () {
    var templateFn = JST["gists_index"];
    var renderedContent = templateFn({gists: GistApp.gists});

    this.$el.html(renderedContent);
    return this;
  }
})