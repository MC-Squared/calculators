import React, { Component } from 'react';

import NavTabs from './NavTabs'

import './date.css';

class DateCalculatorApp extends Component {
  constructor(props) {
    super(props);

    var st = new Date();
    st.setHours(0, 0, 0, 0)
    this.state = {
      start_date: st,
      end_date: st,
    }
  }

  onChange(start, end) {
    start = start || this.state.start_date
    end = end || this.state.end_date

    this.setState({
      start_date: start,
      end_date: end,
    });
  }

  render() {
    return (
      <div className="App">
        <NavTabs activeTab={this.props.match.params.activeTab} />
      </div>
    );
  }
}

export default DateCalculatorApp;
