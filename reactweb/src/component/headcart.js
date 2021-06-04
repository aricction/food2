import React, { Component } from 'react';
import { Button , Navbar,NavItem, NavLink , Nav} from 'reactstrap';
import { Link } from 'react-router-dom';

class Headercart extends Component {
  render(){
  return (
    <Navbar expand>

                  <div className="container">
                  <div class="row ">
                        <NavItem className="nav-link col">

                          <span><Link to="/">Shop</Link></span>
                         </NavItem>
                         

                  </div>
                  </div>
                  <div class="cart-container ">
                    <div id='cart'>
                    <span id='itemCount'></span>
                    <Link to='/cart'  style={{ color: '#9c88ff' }} > 
                      <i class='fa fa-shopping-cart fa-2x'></i>
                      </Link>
                    </div>
                   
                     </div>
        </Navbar>



  );
  }
}


export default Headercart;
