GistApp.Models.Gist = Backbone.Model.extend ({
  parse: function (resp) {

    var favorite = new GistApp.Models.Favorite(resp.favorite);
    if(resp.favorite === null){
      favorite = null;
    }

    if(resp.gist_files === null){
      resp.gist_files = [];
    }
    var gist_files = new GistApp.Collections.GistFiles(resp.gist_files);

    if(resp.tags === null){
      resp.tags = [];
    }
    var gist_tags = new GistApp.Collections.Tags(resp.tags);

    resp.tags = gist_tags;
    resp.gist_files = gist_files;
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