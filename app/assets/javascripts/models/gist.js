GistApp.Models.Gist = Backbone.Model.extend ({
  parse: function (resp) {

    var favorite = new GistApp.Models.Favorite(resp.favorite);
    if(resp.favorite === null){
      favorite = null;
    }
    // favorite.url = "/gists/" + favorite.get("gist_id") + "/favorite"
    resp.favorite = favorite;
    return resp;
  },

  toJSON: function() {
    // clone all attributes
     var attributes = _.clone(this.attributes);
     delete attributes["favorite"];
     return attributes;
  }
})