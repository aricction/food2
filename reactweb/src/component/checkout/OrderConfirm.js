import React, {useContext, useState, useEffect} from 'react';
import AllEmployess from '../AllEmployee';
import FinalCart from './FinalCart';
import { Link , NavLink } from 'react-router-dom';
import classnames from 'classnames';
import AuthContext from '../auth/AuthContext';
import Employeeitem from '../Employeeitem';
import { Button} from 'reactstrap';
import Footer from '../footer';

const OrderConfirm = () => {
  
    return (

      <div  className='home'> 
<div class="container">
  <div class="row justify-content-center">
      <div className='col'>

    <div class="col col-9">
  <h2 className='mt-10'>Thank you for shopping with us</h2> 
    </div>

    <div class="col-12 col-sm">
  <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6> 
    </div>

    <div className='col'>
<p>Order #</p>
<p>Order Date</p>
<p></p>
</div>


</div>

<div class='container mt-10'>
<FinalCart/>
</div>
</div>
<NavLink to='/home'>
<Button>continue with food</Button>
</NavLink>
</div>
<Footer/>
</div>
    )
}

export default OrderConfirm
