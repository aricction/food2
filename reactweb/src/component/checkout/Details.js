import React, {useContext, useState, useEffect} from 'react';
import AllEmployess from '../AllEmployee';
import EmployeeForm from '../EmployeeForm';
import AuthContext from '../auth/AuthContext';
import {Button, Form , FormGroup, Label, Input ,
    Modal, ModalHeader, ModalBody, ModalFooter,
     Row, Col,Breadcrumb, BreadcrumbItem , TabContent, TabPane, Nav,
   NavItem , Alert } from 'reactstrap';
 import { Link , NavLink } from 'react-router-dom';
 import classnames from 'classnames';
 import Payment from './bill';
import ModalAlert from './ModalAlert';
import Cart from '../Cart';
import FinalCart from './FinalCart';


const Details = props => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
    
    const authcontext = useContext(AuthContext);
    const {isAuthenticated, loadUser} = authcontext;


    useEffect(() => {
        if(isAuthenticated){
            loadUser();
        }
        else {
            props.history.push('/login')
        }
    }, [isAuthenticated, props.history]);



    return(
      
        <div className="container home">
           <div className="row">
               
           <Breadcrumb>
      <BreadcrumbItem><Link to='/home'  style={{ color: '#00b894' }}>Home</Link></BreadcrumbItem>
      <BreadcrumbItem><Link to='/shop'  style={{ color: '#e17055' }}>Order Online</Link></BreadcrumbItem>
      <BreadcrumbItem>Checkout</BreadcrumbItem>
      </Breadcrumb>
      </div>
                 
               
      <hr />         
                  
     <Row>  
     <Col  xs="6" sm="1" md="2">  
    <Nav className='tabs vertical pills'>
        <div className="">
        <NavItem>
        <NavLink  to="#!"
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}>
              <Button>Delivery Address</Button>
              </NavLink>
        </NavItem>
        </div>
        <NavItem>
        <NavLink   to="#!"
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}>
              <Button className='mt-2' color='info'>Payment method</Button>
              </NavLink>
        </NavItem>
        <NavItem>
        <NavLink   to="#!"
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}>
              <Button className='mt-2' color='info'>
                  order summary
              </Button>
          </NavLink>
        </NavItem>
      
      </Nav>
      </Col> 
      <Col>
      <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
        
                  <EmployeeForm/>

          </TabPane>
          <TabPane tabId="2">
             <div className='row'>
                 <div>
                 <Payment />

                 </div>
             </div>
          </TabPane>

          <TabPane tabId="3">
          

               <AllEmployess/>
               <FinalCart />
               <hr/>
               <ModalAlert/>
               
     
          </TabPane>
      </TabContent>
      </Col>
      </Row>

           </div>
       
      
    )
}

export default Details;