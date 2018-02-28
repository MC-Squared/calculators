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

import DateDifference from './DateDifference'
import DateMath from './DateMath'

export default class NavTabs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: this.props.activeTab || 'diff'
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
              className={classnames({ active: this.state.activeTab === 'diff' })}
              onClick={() => {this.toggle('diff'); }}
            >
              Date Difference
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === 'math' })}
              onClick={() => { this.toggle('math'); }}
            >
              Date +/-
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="diff">
            <Row>
              <Col sm="12">
                <DateDifference />
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="math">
            <Row>
            <Col sm="12">
              <DateMath />
            </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
