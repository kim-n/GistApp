GistApp.Views.GistsIndex = Backbone.View.extend ({
  render: function () {
    var templateFn = JST["gists_index"];
    var renderedContent = templateFn({gists: GistApp.gists});

    this.$el.html(renderedContent);

    var $a = $("<a href='#gists/new' id='gist_form_link'>New Gist</a>");
    this.$el.append($a);

    var $ul  = $('<ul></ul>');

    GistApp.gists.each( function (gist) {
      var gistDetailView = new GistApp.Views.GistDetail({id: gist.get("id")})
      $ul.append(gistDetailView.render().$el)
    })

    this.$el.append($ul);

    return this;
  }
})