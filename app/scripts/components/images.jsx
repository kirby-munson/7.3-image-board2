var React = require('react');
var Backbone = require('backbone');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var $ = require('jquery');


var AppComponent = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {'url': '', 'caption': '', 'displayForm': false};
  },
  handleFormToggle: function(e){
    this.setState({'displayForm': !this.state.displayForm});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var url = this.state.url;
    var caption = this.state.caption;
    this.props.collection.create({url: url, caption: caption});
    this.forceUpdate();
  },
  render: function(){
    return(
      <div>
        <Nav handleFormToggle={this.handleFormToggle} />
        <ImageBoardForm
          collection={this.props.collection}
          data={this.state.data}
          displayForm={this.state.displayForm}
          inputUrl={this.linkState('url')}
          inputCaption={this.linkState('caption')}
          handleSubmit={this.handleSubmit}
          />
        <ImageCardList collection={this.props.collection} />
      </div>
    )
  }
});

var Nav = React.createClass({
  render: function(){
    return (
      <div className="row">
        <nav className="nav col-md-12">
        <button type="button" onClick={this.props.handleFormToggle} className="col-xs-offset-1 col-xs-1 col-md-offset-5 col-md-1 btn btn-info btn-circle" onClick={this.props.handleFormToggle}>+</button>
        <h4 className="col-xs-8 col-md-3">My Images Board</h4>
      </nav>
    </div>
    );
  }
});

var ImageBoardForm = React.createClass({
  mixins: [LinkedStateMixin],
  render: function(){
    if(!this.props.displayForm){
      return <div />
    }
    return(
      <form className="col-md-offset-3 col-md-6" onSubmit={this.props.handleSubmit}>
        <label htmlFor="url">Url</label>
        <input
          type='text'
          className="form-control"
          id="url"
          valueLink={this.props.inputUrl}
          placeholder="Photo URL goes here ... "
          name='url' />
        <label htmlFor="caption">Caption</label>
        <input
          type='text'
          className="form-control"
          id="caption"
          valueLink={this.props.inputCaption}
          placeholder="Photo Caption goes here ... "
          name='caption' />
        <button type="submit" className="submit btn btn-success">Submit</button>
      </form>
    )
  }
});


var ImageCardList = React.createClass({
  render: function(){
      var imageCards = this.props.collection.map(function(image){
        return <div className="well card col-md-offset-3 col-md-6" key={image.get('_id')}>
                  <div className="img-container"><img className="card-img" src={image.get('url')}></img></div>
                  {image.get('caption')}
                </div>


      });

      return (
        <div>
          {imageCards}
        </div>
      );
    }
  });




  module.exports = {
    'AppComponent':AppComponent,
  };
