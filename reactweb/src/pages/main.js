import React, { Component } from 'react';
import Home from './home';
import Contact from './contact';
import Navbar from './Navbar';
import Menu from './menu';
import Story from './story';
import Shop from './shop';
import Address from '../component/checkout/address';
import Cart from '../component/Cart';
import Footer from'../component/footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import RegisterUser from '../component/Register';
import LoginUser from '../component/Login';
import UserAuth from '../component/auth/AuthState';
import AuthToken from '../component/auth/tokenAuth';
import ShipState from '../component/Shipping/ShipState';
import ProtectedRoute from '../component/auth/ProtectRoute';
import EmployeeState from '../component/employee/EmployeeState';
import Details from '../component/checkout/Details';
import Payment from '../component/checkout/bill';
import FinalCart from '../component/checkout/FinalCart'
import OrderConfirm from '../component/checkout/OrderConfirm';
import Example from '../component/checkout/Example';

  if(localStorage.token){
      AuthToken(localStorage.token);
  }

class Main extends Component {


render() {

  const HomePage = () =>{
    return(

     
      <Home />
    );
  }
  return(
    <div>

   
  <Navbar/>
  

  <UserAuth>
    <EmployeeState>
    <ShipState >
     <Switch>
     <Route path="/Details" component={Details} />
      <Route path="/home" component={HomePage} />
      <Route path="/story" component={Story} />
      <Route exact path ="/contact" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
      <Route path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
      <ProtectedRoute path="/shop" component={Shop} />
      <ProtectedRoute path="/cart" component={Cart} />
      <Route path="/bill" component={Payment} />
      <Route path="/OrderConfirm" component={OrderConfirm} />
      <Route path="/address" component={Address} />
      <Route path="/register" component={RegisterUser} />
      <Route path="/login" component={LoginUser} />
      <Route path="/Example" component={Example} />
      
      <Redirect to="/home" />
     </Switch>
     </ShipState>
     </EmployeeState>
     </UserAuth>
    </div>

  );
 }
}

export default Main;
