var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var createBrowserHistory = require('history/lib/createBrowserHistory');
var helpers = require('./helpers');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;

var App = React.createClass({

  render : function(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
});

/**
 * Header Component
 */
var Header = React.createClass({
  render : function(){
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of"> Of </span>
            <span className="the"> The </span>
          </span>
          Day
        </h1>
        <h3 className="tagLine"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }
});

/**
 * Order Component
 */
var Order = React.createClass({
  render : function(){
    return (
      <p>Order</p>
    )
  }
});

/**
 * Inventory Component
 */
var Inventory = React.createClass({
  render : function(){
    return (
      <p>Inventory</p>
    )
  }
});

var StorePicker = React.createClass({
  mixins : [History],
  goToStore : function(e){
    e.preventDefault();
    //get data from input
    var storeId = this.refs.storeId.value;
    //Navigate from Storepicker to App
    this.history.pushState(null,  '/store/' + storeId);
  },
  render : function(){
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.getFunName()} required />
        <input type="submit" />
      </form>
    )
  }
 
});


/**
 * Not Found Component
 */

var NotFound = React.createClass({
  render : function(){
    return (
      <h1>404 Not Found!</h1>
    )
  }
});

/**
 * Routes
 */

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));