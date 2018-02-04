import React, { Component } from 'react';
import Calendar from 'react-calendar'

import { Button, ButtonGroup, Input } from 'reactstrap';

import moment from 'moment'
import Moment from 'react-moment'

class DateMath extends Component {
  constructor(props) {
    super(props);

    var st = new Date();
    st.setHours(0, 0, 0, 0)
    this.state = {
      startDate: st,
      endDate: st,
      activeBtn: '+',
      days: 0,
      weeks: 0,
    }
  }

  calculateEndDate()
  {
    var st = new Date(this.state.startDate);
    st = moment(st).add(this.state.days, 'days');
    st = moment(st).add(this.state.weeks, 'weeks');

    this.setState({
      endDate: st,
    });
  }

  onChangeCalendar(start) {
    start = start || this.state.startDate

    console.log(start.toString());

    this.setState({
      startDate: start,
    }, this.calculateEndDate);
  }

  onChangeButton(btn) {
    this.setState({
      activeBtn: btn,
    }, this.calculateEndDate);
  }

  onChangeNumbers(type, e) {
    if (type === 'days') {
      this.setState({
        days: e.target.value,
      }, this.calculateEndDate);
    } else {
      this.setState({
        weeks: e.target.value,
      }, this.calculateEndDate);
    }
  }

  render() {
    return (
      <div className="content">
        <div className="calendar">
          <h3><small className="text-muted">Date</small></h3>
          <Calendar
            onChange={(date) => this.onChangeCalendar(date)}
            value={this.state.startDate}
          />
        </div>
        <div className='math'>
          <ButtonGroup>
            <Button
              className={this.state.activeBtn === '+' ? 'active' : ''}
              onClick={() => this.onChangeButton('+')}>+</Button>
            <Button
              className={this.state.activeBtn === '-' ? 'active' : ''}
              onClick={() => this.onChangeButton('-')}>-</Button>
          </ButtonGroup>
          <div className='row math-row'>
            <div className='col-sm-4'></div>
            <Input
              className='col-sm-2'
              onChange={(e) => this.onChangeNumbers('days', e)}
              type='number'
              value={this.state.days}
            />
            <div className='math-label col-sm-2'>Days</div>
          </div>
          <div className='row math-row'>
            <div className='col-sm-4'></div>
            <Input
              className='col-sm-2'
              onChange={(e) => this.onChangeNumbers('weeks', e)}
              type='number'
              value={this.state.weeks}
            />
            <div className='math-label col-sm-2'>Weeks</div>
          </div>
          <div className='result'>
            <hr />
            <h3>Result:</h3>
            <h2>
              <Moment format="ddd Do MMM YYYY">
                {this.state.endDate}
              </Moment>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default DateMath;
