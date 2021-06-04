import React, { useContext, useState,useEffect, Fragment }from 'react';
import { Button , NavbarBrand , Nav  ,NavItem, FormGroup } from 'reactstrap';
import "bootstrap/js/src/collapse.js";     
import { NavLink, Link} from 'react-router-dom';
import authContext from '../component/auth/AuthContext';



const Navbar = () => {
  const[isAuthenticated , setisAuthenticated] = useState(false);
 const toggleChecked = () => setisAuthenticated(value => !value);   
 const [loading, setLoading] = useState(false);
  const authcontext = useContext(authContext);

  const user = authcontext;
  const logout = authcontext;

  const Exit = () => {
    setLoading(true)
    logout()
    
 }; 


    return (

        
          <div className="navbar navbar-expand-lg navbar-dark ">
               
              
                <NavbarBrand className="mr-auto" href="/">
                <img src="assets/img/logo2.png" alt="Gourmet" height="50px" width="100"/>
                 </NavbarBrand>
                  <button className="navbar-toggler" type="button" 
                    data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
      
                   <span class="navbar-toggler-icon"></span>
                  </button>
                     <div className="collapse navbar-collapse" id="navbarNav">
                     <div className="container">
                          < ul className="navbar-nav">
                    
                          <NavItem> 
           <NavLink className="nav-link" to="">
             <span className="bi bi-house"></span> Home
            </NavLink>           
          </NavItem>
                               

          <NavItem>
           <NavLink className="nav-link text-dark" to="./story">
             <span className="bi bi-shop"></span> Our story
            </NavLink>
           </NavItem>
          <NavItem>
            <NavLink className="nav-link text-dark" to="./shop">
              <span className="bi bi-cart-plus"></span> Order online
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink className="nav-link text-dark" to="./menu">
              <span className="bi bi-list"></span> Menu
            </NavLink>
          </NavItem>
                     
          <NavItem>
            <NavLink className="nav-link  text-dark" to="./contact">
              <span className="bi bi-person-lines-fill"></span> Contact
            </NavLink>
           </NavItem>

      

          
       

                    
        

      
        <NavItem>

           </NavItem>
           <NavItem className="">
          <NavLink className="nav-link  text-dark" to="./register">
           <span className=" ml-auto"></span>{!isAuthenticated && <a>Sign up</a>}
          </NavLink>
         </NavItem>
         
         <NavItem className='login' >
           <NavLink className="col nav-link  text-dark" to="./login" onClick={toggleChecked}>
         {!isAuthenticated && <a>Login</a>}
           </NavLink>
         </NavItem>


         <li className='nav-item '>
          <a onClick={Exit} className='nav-link text-dark'   href='!#'>
              {isAuthenticated ?<Button disabled={loading}>
              {loading && (
                               <span className='spinner-border spinner-border-sm'></span>
                           )}
                <span className='fa fa-sign-out'>logout</span></Button>  : <a></a>}
          </a>  
        </li>
       
                  
                           </ul>
                      </div>
                </div>
          </div>

    );
};

export default Navbar;
