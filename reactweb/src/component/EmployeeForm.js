import React, {useState , useContext, useEffect } from 'react';
import {Route , Redirect, NavLink} from 'react-router-dom';
import EmployeeContext from './employee/EmployeeContext';
import {Button, Form , FormGroup, Label, Input ,
    Row, Col, NavItem } from 'reactstrap';
import Payment from '../component/checkout/bill';

const EmployeeForm = props => {
    const employeeContext = useContext(EmployeeContext);
    const [loading, setLoading] = useState(false);
    const {AddEmployee, updateEmployee, current, clearCurrent   } = employeeContext;
    useEffect(() => {
        if(current !== null)
        {
            setemployee(current);

        }
        else
        {
            setemployee({
                firstname: '',
                lastname: '',
                email: '',
                phone: '',
                address:'',
                postalcode: '',
                town: ''
    
            });
        }
    }, [employeeContext, current]);
    const [employee, setemployee] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        postalcode: '',
        town: ''
    });
    const {firstname, lastname, email, phone,address, postalcode, town} = employee;
    
    const onChange = e =>
     setemployee ({
        ...employee,
         [e.target.name]: e.target.value
    });
    const onSubmit = e => {
        e.preventDefault();
   if (current === null) {
       AddEmployee(employee);  
    
     alert('saved') } else {
       updateEmployee(employee);
   }
      
   };

    const ClearAll = () =>{
        clearCurrent();
    };


  

    return(
        <div>
        <h3 className="alert alert-info">{current ? 'Edit Delivery Address' : 'Delivery Address'}</h3>
        <Form onSubmit={onSubmit}>
            <Row> 
                <Col md={4}>
                <FormGroup>
                  <label>First name</label>
              <Input className='form-control' required type='text' name='firstname' value={firstname} onChange={onChange} />
              </FormGroup>    
                </Col>

                <Col md={4}>
                <FormGroup>
                  <label>last name</label>
              <Input className='form-control' required type='text' name='lastname' value={lastname} onChange={onChange} />
              </FormGroup>
                </Col>
                </Row>

                <Row>
                 <Col md={4}>
                 <FormGroup>
              <label>Enter email</label>
              <input className='form-control' required type='text' name='email' value={email} onChange={onChange} />
              </FormGroup>
                 </Col>
             
                 <Col md={4}>
                 <FormGroup>
              <label>Enter phone</label>
              <input className='form-control' required type='text' name='phone' value={phone} onChange={onChange} />
              </FormGroup>
                 </Col>
                </Row>
             
             <Row>
                 <Col sm={8}>
                 <FormGroup>
              <label>Enter address</label>
              <input className='form-control' required type='text' name='address' value={address} onChange={onChange} />
              </FormGroup>
             </Col>
             </Row>
             <Row>
                 <Col sm={4}>
                 <FormGroup>
              <label>Enter postalcode</label>
              <input className='form-control' required type='text' name='postalcode' value={postalcode} onChange={onChange} />
              </FormGroup>
                 </Col>
            
                 <Col sm={4}>
                 <FormGroup>
              <label>Enter town</label>
              <input className='form-control' required type='text' name='town' value={town} onChange={onChange} />
              </FormGroup>
                 </Col>
             </Row>
        
      
                 
                 <input  className="btn btn-success" type='submit'  value={ current ? 'Update now' : 'Save now'} />
                 <FormGroup>
                       <button className='btn btn-success' type='submit' disabled={loading} 
                        value={current ? 'update now' : 'save & deliver here'}  >
                           {loading && (
                               <span className='spinner-border spinner-border-sm'></span>
                           )}
                          <span>save</span>
                    </button>
                   </FormGroup>

          
           
            {current && (
                  <input  type='button'
                  className="btn btn-warning ml-5"
                  value='clear now' 
                  onClick={ClearAll}
                 /> 
            )}



           </Form>
        </div>
    );
};

export default EmployeeForm;


