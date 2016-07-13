var Backbone = require('backbone');

var ImageCard = Backbone.Model.extend({
  idAttribute: '_id',
  defaults : {
    'url': '',
    'caption': ''
  },
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby-imageboard',
  initialize: function(){
    console.log('a new imagecard has been born!')
  }
});

var ImageCardCollection = Backbone.Collection.extend({
  model: ImageCard,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/kirby-imageboard'
});

module.exports = {
  'ImageCard':ImageCard,
  'ImageCardCollection': ImageCardCollection
};
