import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import EmployeeForm from '../EmployeeForm';
import Payment from './bill';
import ModalAlert from './ModalAlert';
import FinalCart from './FinalCart';
import AllEmployess from '../AllEmployee';
import Footer from '../footer';


const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className='home'> 
    <div className='container'>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            style={{ color: '#f368e0' }}>
            Delivery Address
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           Order summary
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
           Payment method
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <EmployeeForm/>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col md='12' sm="9">
              
              
            <AllEmployess/>
            <hr/>
               <FinalCart />
              
               
         
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
            <Payment />
            <hr/>
            <ModalAlert/>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
      
    </div>
    <Footer/>
    </div>
  );
}

export default Example;