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
        <p><b>Days: </b>{inDays(dt)}</p>
        <p><b>Weeks: </b>{inWeeks(dt)}</p>
      </div>
    );
}

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
        <div className="content">
          <div className="calendar">
            <h2>Start</h2>
            <Calendar
              onChange={(date) => this.onChange(date, null)}
              value={this.state.start_date}
            />
          </div>
          <div className="calendar">
            <h2>End</h2>
            <Calendar
              onChange={(date) => this.onChange(null, date)}
              value={this.state.end_date}
            />
          </div>
          <div className="display">
            <Display
              endDate={this.state.end_date}
              startDate={this.state.start_date}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DateCalculatorApp;
