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
  },

  events: {
    "click .favorite_button": "favorite",
    "click .unfavorite_button": "unfavorite"
  },

  favorite: function(event) {
    var gist_id = parseInt($(event.target).attr("data-id"));

    var favorite = new GistApp.Models.Favorite();
    favorite.save({gist_id: gist_id}, {
      success: function(resp) {

        $('#fbtn'+gist_id).toggleClass('hidden')
        $('#ubtn'+gist_id).toggleClass('hidden')

        var gist = GistApp.gists.findWhere({id: gist_id})
        gist.set("favorite", favorite);
        console.log("Favorited!")
      },
      error: function(resp) {
        console.log("error", resp)
      }
    });
  },

  unfavorite: function(event) {
    var gist_id = parseInt($(event.target).attr("data-id"));

    var gist = GistApp.gists.findWhere({id: gist_id});

    var favorite = gist.get("favorite");

    favorite.destroy({
      success: function() {
        $('#fbtn'+gist_id).toggleClass('hidden')
        $('#ubtn'+gist_id).toggleClass('hidden')

        console.log("Unfavorited!")
      },
      error: function() {
        console.log("error")
      }
    })
  }
})