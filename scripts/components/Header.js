/**
 * Header Component
 */

import React from 'react';

var Header = React.createClass({
  propTypes : {
    tagline : React.PropTypes.string.isRequired
  },
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
  },
});

export default Header;
