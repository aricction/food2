import React, { Component ,useState, useContext, useEffect} from 'react';
import Header from './HeaderComponent';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup
  , Label, Input, Col, Row, FormFeedback , FormText} from 'reactstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';
import { Link ,NavLink } from 'react-router-dom';
import Footer from '../component/footer';
import FeedContext from '../component/feedback/FeedbackContext';



const Contact = props => {

  return(


    <div className="home">
<div className="container">
            <div className="row">
               <Breadcrumb>
                   <BreadcrumbItem><Link to='/home'  style={{ color: '#f368e0' }}>Home</Link></BreadcrumbItem>
                   <BreadcrumbItem active>Contact</BreadcrumbItem>
              </Breadcrumb>
            <div className="col-12">
                 <div className="text3 row justify-content-center">
                    <h1> CONTACT US </h1>
                 </div>
                 <hr />
            </div>
            </div>

           <div className="row row-content">
              <div className="col-12">
                <h3>Location information</h3>
              </div>
        <div class="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
            121, Clear water Bay road <br />
            Clear water bay, kowloon <br />
            <i className="fa fa-phone"></i>: +987654321 <br />
            <i class="fa fa-fax"></i>: +852 8765 4321 <br />
            <i class="fa fa-envelope"></i>:
            <a href="mailto:confusion@food.net" style={{ color: '#10ac84' }}>Gourmet@food.net</a>
            </address>
         </div>
           <div className="col-12 col-sm-6 offset-sm-1">
               <h5> Map of the Location </h5>

           </div>
             <div className="col-12 col-sm-11 offset-sm-1">
             <div className="btn-group" role="group">

             </div>
             </div>
           </div>
         <div className="row row-content">
            <div className="col-12">
            <h3>Send us Your Feedback</h3>
            </div>
            <div className='col'>
                <Form >
                  <Row>
                  <Col md={8}>
                <FormGroup >
                   <Label for="exampleEmail">Name</Label>
                  
                     <Input type="text" name="name"  required placeholder="Enter a name" />
                  
                 </FormGroup>
                 </Col>
                 </Row>
                 <Row>
                 <Col md={4}>
                 <FormGroup>
              <Label>Enter email</Label>
              <input className='form-control'  required type='text' name='email'  />
              </FormGroup>
                 </Col>
             
                 <Col md={4}>
                 <FormGroup >
              <label>Enter phone</label>
              <input className='form-control'  required type='text' name='phone'  />
              </FormGroup>
                 </Col>
                </Row>
            
             
             <Row>
               <Col md={8}>
               <FormGroup>
                   <Label >Your feedback</Label>
                   
                     <Input type="textarea"  required rows='10' name="message" />
                   
                 </FormGroup>
              
               </Col>
               </Row>
                 
              
                 <FormGroup row>
                 
                   <Col sm={{ size: 10 }}>
                     <FormGroup check>
                       <Label check>
                         <Input type="checkbox" id="checkbox2" />{' '}
                         <b>May we contact you?</b>
                       </Label>
                     </FormGroup>
                   </Col>
                 </FormGroup>
                 <FormGroup  >
                   <Col sm={{ size: 10, offset: 0 }}>
                     <Button type="submit" value="send feedback">Submit</Button>
                   </Col>
                 </FormGroup>
               </Form>
         </div>
           
                         
              
            </div>


</div>
<Footer />
        </div>
  );
};

export default Contact;



