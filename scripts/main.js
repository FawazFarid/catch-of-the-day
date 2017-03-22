var React = require('react');
var ReactDOM = require('react-dom');

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

  render : function(){
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeID" required />
        <input type="submit" />
      </form>
    )
  }
 
});


ReactDOM.render(<App/>, document.querySelector('#main'));