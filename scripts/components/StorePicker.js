/**
 * StorePicker Component
 */

import React from 'react';
import { History } from 'react-router'; // mixin
import helpers from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class StorePicker extends React.Component {

  goToStore(e) {
    e.preventDefault();
    //get data from input
    var storeId = this.refs.storeId.value;
    //Navigate from Storepicker to App
    this.history.pushState(null,  '/store/' + storeId);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.getFunName()} required />
        <input type="submit" />
      </form>
    )
  } 
}

reactMixin.onClass(StorePicker, History);

export default StorePicker;
