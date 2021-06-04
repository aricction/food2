import React, { Component , useContext, useEffect , Fragment} from 'react';
import { Navbar ,NavbarBrand ,Nav ,Collapse ,NavItem, NavbarToggler,
Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink , Link } from 'react-router-dom';
import authContext from '../component/auth/AuthContext';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }


  handleLogin(event) {
      this.toggleModal();
      alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
      event.preventDefault();

  }



  render(){
    return(

      <React.Fragment>
         <Navbar dark expand="md">
         <div className="container">
         <NavbarToggler onClick={this.toggleNav} />

                <NavbarBrand className="mr-auto" href="/">
                <img src="assets/img/logo2.png" alt="Gourmet" height="50px" width="100"/>
                 </NavbarBrand>
                 <Collapse isOpen={this.state.isNavOpen} navbar>
                 <Nav navbar>
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
                     <NavLink className="nav-link  text-dark" to="./register">
                        <span className=""></span> Register
                      </NavLink>
                     </NavItem>
                     <NavItem>
                     <NavLink className="nav-link  text-dark" to="./login">
                        <span className=""></span> Login
                      </NavLink>
                     </NavItem>



                  </Nav>

                  
                  <Nav className="ml-auto" navbar>
                      <NavItem>

                              <Button outline onClick={this.toggleModal}>
                                  <span className="fa fa-sign-in fa-lg"></span> Login
                              </Button>
                      </NavItem>
                  </Nav>
      </Collapse>
      </div>
      </Navbar>

       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
         <ModalHeader>Login </ModalHeader>

          <ModalBody>
         

         </ModalBody>
       </Modal>
    </React.Fragment>


    );
  }
}

export default Header;
