GistApp.Views.GistForm = Backbone.View.extend ({
  render: function () {
    var $h3 = $("<h3>Gist Form</h3>");
    var $a = $("<a href='#'>Back to Gists Index</a>");

    this.$el.html($h3);
    this.$el.append($a);

    var $form = $("<form id='real-form'></form>");

    var templateFn = JST["gist_form"];
    var renderedContent = templateFn({});

    $form.html(renderedContent);


    this.$el.append($form);

    return this;
  },

  events: {
    "submit" : "saveGist",
    "click #new_gist_file_link" : "newGistFileForm",
    "keyup #tag_select" : "filterTags",
    "focus #tag_select" : "showAllTags",
    "blur #tag_select" : "clearInputField"
  },

  saveGist: function (event) {
    event.preventDefault();

    var $form = $(event.target);
    var formData = $form.serializeJSON();
    var newGist = new GistApp.Models.Gist();

    GistApp.gists.create(formData, {
      success: function () {
        console.log("New Gist Save successful");
        Backbone.history.navigate("#", {trigger: true})
      },
      error: function () {
        console.log("New Gist Save unsuccessful");
      }
    })
  },

  newGistFileForm: function (event) {
    event.preventDefault();

    var fileForm = JST["gist_file_form_part"]({});
    $("#real-form").append(fileForm);
  },


  filterTags: function(event) {
    var str = $("#tag_select").val();
    console.log("input value", str)
    var filteredTags = [];
    GistApp.tags.each(function(tag) {
      var name = tag.get("name");
      if (name.indexOf(str) !== -1) {
        filteredTags.push(tag);
      }
    });

    var tagsTemplate = JST["gist_tags"]({tags: filteredTags});
    $("#tags").html(tagsTemplate);
  },

  showAllTags: function (event) {
    var tagsTemplate = JST["gist_tags"]({tags: GistApp.tags});
    $("#tags").html(tagsTemplate);
  },

  clearInputField: function (event) {
    $("#tag_select").val("");
  }
});