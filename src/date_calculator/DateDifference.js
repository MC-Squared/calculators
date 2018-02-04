import React, { Component } from 'react';
import Calendar from 'react-calendar'

function inDays(dd) {
  return Math.ceil(dd/(24*3600*1000));
}

function inWeeks(dd) {
  return Math.floor(inDays(dd)/7);
}

function Display(props) {
    const dt = props.endDate.getTime() - props.startDate.getTime();

    return (
      <div className='display-inner'>
        <h3>Difference:</h3>
        <b>Days: </b>{inDays(dt)}<br />
        <b>Weeks: </b>{inWeeks(dt)}<br />
      </div>
    );
}

class DateDifference extends Component {
  constructor(props) {
    super(props);

    var st = new Date();
    st.setHours(0, 0, 0, 0)
    this.state = {
      startDate: st,
      endDate: st,
    }
  }

  onChange(start, end) {
    start = start || this.state.startDate
    end = end || this.state.endDate

    this.setState({
      startDate: start,
      endDate: end,
    });
  }

  render() {
    return (
      <div className="content">
        <div className="calendar">
          <h3><small className="text-muted">Start Date</small></h3>
          <Calendar
            onChange={(date) => this.onChange(date, null)}
            value={this.state.startDate}
          />
        </div>
        <div className="calendar">
          <h3><small className="text-muted">End Date</small></h3>
          <Calendar
            onChange={(date) => this.onChange(null, date)}
            value={this.state.endDate}
          />
        </div>
        <div className="display">
          <Display
            endDate={this.state.endDate}
            startDate={this.state.startDate}
          />
        </div>
      </div>
    );
  }
}

export default DateDifference;
