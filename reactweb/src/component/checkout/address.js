import React, { Component , useState} from 'react';
import {Button, Form , FormGroup, Label, Input ,
   Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col,Breadcrumb, BreadcrumbItem , TabContent, TabPane, Nav,
  NavItem , Alert } from 'reactstrap';
import { Link , NavLink } from 'react-router-dom';
import Footer from '../footer';
import Payment from './bill';
import classnames from 'classnames';
import AllShip from './AllShip';
import userAddress from './userAddress';
import $ from 'jquery';
import ModalAlert from './ModalAlert';
import AddressForm from './AddressForm';


class Address extends Component {


constructor(props){
  super(props);

  this.state= {
    isModalOpen: false
  };
  this.toggleModal = this.toggleModal.bind(this);

  this.toggle = this.toggle.bind(this);
  this.state = {
    activeTab: '1'
  };

}

toggle(tab) {
  if(this.state.activeTab !== tab) {
    this.setState({
      activeTab: tab
    });
  }
}
toggleModal(){
  this.setState({
    isModalOpen: !this.state.isModalOpen
  });
}

  render (){


    return (

      <div className='container '>
      <div className='row '>
      <Breadcrumb>
      <BreadcrumbItem><Link to='/home'  style={{ color: '#00b894' }}>Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to='/shop'  style={{ color: '#e17055' }}>Order Online</Link></BreadcrumbItem>
      <BreadcrumbItem>Checkout</BreadcrumbItem>
      </Breadcrumb>
      </div>

        <hr />
      <Row>
        <Col  xs="6" sm="4" md="4">
        <Nav tabs vertical pills>
          <NavItem>
            <NavLink to='#!'className={classnames({active: this.state.activeTab === '1'})}
            onClick={ () => {
              this.toggle('1');
            }}><Button type='submit' color='info' >
              Shipping address
            </Button>
              
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='#!'className={ classnames({active: this.state.activeTab === '2'})}
            onClick={ () => {
              this.toggle('2');
            }}>
              <Button className='mt-2'  color='info' > Payment method </Button>
             
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='#!'className={ classnames({active: this.state.activeTab === '3'})}
            onClick={ () => {
              this.toggle('3');
            }}>
              <Button className='mt-2'  color='info' >   Order summary </Button>
             
            </NavLink>
          </NavItem>
          </Nav>
        </Col>

        <Col >
        <TabContent   activeTab={ this.state.activeTab}>
          <TabPane tabId='1'>
          <h4>Shipping Address</h4>
          <hr/>
            <AddressForm/>
          </TabPane>

          <TabPane tabId='2'> 
            <Payment />
          </TabPane>

          <TabPane tabId='3'> 
            <h3> content 3 </h3>
            <div className='row'>
            <div className='col-sm-9'>
            <ModalAlert/>
         <p>something</p> 
          <AllShip/>
           <userAddress />
            </div>
            </div>
           

          </TabPane>
        </TabContent>
        </Col>
      </Row>


      </div>


    );
  }
}

export default Address;
