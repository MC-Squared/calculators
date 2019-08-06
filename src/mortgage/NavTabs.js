import React, { Component } from 'react';
import classnames from 'classnames';

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';

import MortgagePayments from './MortgagePayments'
// import DateMath from './DateMath'

export default class NavTabs extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: this.props.activeTab || 'payments'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'payments' })}
              onClick={() => {this.toggle('payments'); }}
            >
              Payments
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="payments">
            <Row>
              <Col sm="12">
                <MortgagePayments />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
