GistApp.Views.GistForm = Backbone.View.extend ({
  render: function () {
    var templateFn = JST["gist_form"];
    var renderedContent = templateFn({});

    this.$el.html(renderedContent);
    return this;
  },

  events: {
    "submit" : "saveGist"
  },

  saveGist: function (event) {
    event.preventDefault();

    var $form = $(event.target);
    var formData = $form.serializeJSON();
    var newGist = new GistApp.Models.Gist();

    GistApp.gists.create(formData.gist, {
      success: function () {
        console.log("New Gist Save successful");
        Backbone.history.navigate("#", {trigger: true})
      },
      error: function () {
        console.log("New Gist Save unsuccessful");
      }
    })
  }
});