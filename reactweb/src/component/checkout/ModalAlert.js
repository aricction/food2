import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Alert} from 'reactstrap';
import OrderConfirm from './OrderConfirm';

const ModalAlert = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => setLoading(true);

  return (
    <div>
      <NavLink to='./OrderConfirm'>
      <Button color="success"  disabled={loading} onClick={toggle} >
      {loading && (
      <span className='spinner-border spinner-border-sm'></span>
        )}
        <span>Confirm Order</span></Button>

      </NavLink>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
    
        <Alert color='success'  toggle={toggle}>
      

                  <h4 className='alert-heading'>Thank you for shopping with us!</h4>
                   <p className="card-header"> Order confirmed</p>
                   <p> Purchased item :</p>
                   <p> Shipping :</p>
                   <hr/>
                   <p> TOTAL :</p>
                   <hr/>
                   <p> Delivery Address</p>
               </Alert>
      </Modal>
    </div>
  );
}

export default ModalAlert;