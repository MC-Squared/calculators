import React, { Component } from 'react';

import NavTabs from './NavTabs';

import './mortgage.css';

class MortgageApp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <NavTabs activeTab={this.props.match.params.activeTab} />
      </div>
    );
  }
}

export default MortgageApp;
