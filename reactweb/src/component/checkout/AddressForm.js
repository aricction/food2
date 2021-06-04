import React, {useState, useContext} from 'react';
import {Button, Form , FormGroup, Label, Input ,
     Row, Col } from 'reactstrap';
import ShipContext from '../Shipping/ShipContext';


const AddressForm = () => {
    const addressContext = useContext(ShipContext)
    const [shipaddress, setshipaddress] = useState ({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        address: '',
        postalcode: '',
        town: ''
    });

    const {firstname, lastname, email, phone, address, postalcode ,town} = shipaddress;
    const onChange = e =>
     setshipaddress ({
        ...shipaddress, 
        [e.target.name]: e.target.value
    });
   
    const onSubmit = e => {
        e.preventDefault();
        addressContext.AddShippingAddress(shipaddress);
        setshipaddress({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            postalcode: '',
            town: ''
        });
    };

    return(

        <Form onSubmit={onSubmit}>
             <Row >
       <Col md={4}>
        
        <FormGroup>
        
        <Input type='text' name='firstname' placeholder='First Name' required value={firstname} onChange={onChange}/>
         </FormGroup>
        </Col>
        <Col md={4}>
         <FormGroup>
           
           <Input type="text"  placeholder='Last Name' name ='lastname' required value={lastname} onChange={onChange}/>
         </FormGroup>
       </Col>
       </Row>
       <Row >
         <Col md={4}>
       <FormGroup>
   
        <Input type="text" name="phone" required placeholder="phone no" value={phone} onChange={onChange}/>
      </FormGroup>
    </Col>

  <Col md={4}>
<FormGroup>

 <Input type="email" name="email" required placeholder="Email" value={email} onChange={onChange}/>
</FormGroup>
</Col>

</Row>
<Row >
     <Col sm={8}>
        <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input type="text" required name="address" placeholder="street name" value={address} onChange={onChange}/>       
        </FormGroup>

       </Col>
     </Row>
     <Row>
   <Col sm={4}>
    <FormGroup>

     <Input type="text" placeholder="postal code" name="postalcode" required value={postalcode} onChange={onChange} />
    </FormGroup>

   </Col>
   <Col sm={4}>
    <FormGroup>

     <Input type="text" placeholder="Town" name='town' required value={town} onChange={onChange} />
    </FormGroup>

   </Col>
 </Row> 
 <input type='submit' value={"save & deliver here"} className='btn btn-success' />
        </Form>

        
    );
};

export default AddressForm;