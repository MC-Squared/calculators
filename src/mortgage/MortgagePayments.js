import React, { Component } from 'react';

import { Button, ButtonGroup, Input } from 'reactstrap';

class MortgagePayments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loan: 500000,
      interest: 4.5,
      years: 30,
    };
  }

  onChangeNumbers() {
    this.setState({
      loan: document.getElementById('loan').value,
      interest: document.getElementById('interest').value,
      years: document.getElementById('years').value
    });
  }

  calculatePayment(period) {
    var period_interest = (this.state.interest / 100.0) / period;
    var payment_count = period * this.state.years;

    return (this.state.loan * (
      (period_interest * Math.pow(1 + period_interest, payment_count)) /
        (Math.pow(1 + period_interest, payment_count) - 1)
    )).toFixed(2);
  }

  render() {
    return (
      <div className='math'>

        <div className='row math-row'>
          <div className='col-1 col-md-3' />
          <div className='col-6 col-md-3 text-input'>
          <Input
            id='loan'
            onChange={(e) => this.onChangeNumbers()}
            type='currency'
            value={this.state.loan}
          />
          </div>
          <div className='math-label col-4 col-md-3'>Loan Amount</div>
          <div className='col-1 col-md-3' />
        </div>

        <div className='row math-row'>
          <div className='col-1 col-md-3' />
          <div className='col-6 col-md-3 text-input'>
          <Input
            id='interest'
            onChange={(e) => this.onChangeNumbers()}
            type='number'
            value={this.state.interest}
          />
          </div>
          <div className='math-label col-4 col-md-3'>Interest</div>
          <div className='col-1 col-md-3' />
        </div>

        <div className='row math-row'>
          <div className='col-1 col-md-3' />
          <div className='col-6 col-md-3 text-input'>
            <Input
              id='years'
              onChange={(e) => this.onChangeNumbers()}
              type='number'
              value={this.state.years}
            />
          </div>
          <div className='math-label col-4 col-md-3'>Years</div>
          <div className='col-1 col-md-3' />
        </div>

        <div className='result row'>
          <div className='col-sm-12'>
            <hr />
            <h3>Result:</h3>
          </div>

          <div className='row'>
            <div className='col-2 col-md-4'/>
            <div className='col-4 col-md-2 result-label'>
              Weekly:
            </div>
            <div className='col-4 col-md-2 result-price'>
              ${this.calculatePayment(52)}
            </div>
            <div className='col-2 col-md-4'/>

            <div className='col-2 col-md-4'/>
            <div className='col-4 col-md-2 result-label'>
              Bimonthly:
            </div>
            <div className='col-4 col-md-2 result-price'>
              ${this.calculatePayment(26)}
            </div>
            <div className='col-2 col-md-4'/>

            <div className='col-2 col-md-4'/>
            <div className='col-4 col-md-2 result-label'>
              Monthly:
            </div>
            <div className='col-4 col-md-2 result-price'>
              ${this.calculatePayment(12)}
            </div>
            <div className='col-2 col-md-4'/>
          </div>
        </div>
      </div>
    );
  }
}

export default MortgagePayments;
