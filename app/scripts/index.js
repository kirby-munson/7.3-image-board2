var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var ImageCard = require('./models/image.js').ImageCard;
var ImageCardCollection = require('./models/image.js').ImageCardCollection;
var AppComponent = require('./components/images.jsx').AppComponent;
var ButtonComponent = require('./components/images.jsx').ButtonComponent;


var images = new ImageCardCollection();


images.fetch().done(function(){
  ReactDOM.render(
    React.createElement(AppComponent, {collection: images}),
    document.getElementById('container')
  );
});
