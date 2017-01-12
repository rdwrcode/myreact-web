import React, { Component } from 'react';
import './Layout.css';

import CompList from './CompList';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <CompList />
      </div>
    );
  }
}

export default Layout;
