import React, {useContext, useEffect, Fragment }from 'react';
import { Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import authContext from '../component/auth/AuthContext';


const Navbar2 = () => {
  const authcontext = useContext(authContext);
   
  const {user, isAuthenticated , logout} = authContext;
  

  const authlink = (
    <Fragment>
       <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link text-white" to="">
         {user && user.name}
        </Link>
      </li>
      <li className="nav-item ">
        <Button outline>
        <a  className="nav-link" href="/login">
        <span className=""></span> Logout
        </a>
        </Button>
      </li>
    </Fragment>
  );
  const unauthlink = (
   <Fragment>
      <li className="nav-item ">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/register"> Register</Link>
      </li>
      <li className="nav-item">
        <Button color="primary">
        <Link className="nav-link text-white" to="/login">Login</Link>
        </Button>
      </li>

   </Fragment>
  )
    return(

<div className="navbar navbar-expand-lg navbar-light bg">
  <a class="navbar-brand" href="#">my app</a>
  <button class="navbar-toggler" type="button"
  data-toggle="collapse" data-target="#navbarNav"
  aria-controls="navbarNav"
  aria-expanded="false"
  aria-label="Toggle navigation">

    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      { isAuthenticated ? authlink : unauthlink }
    </ul>
  </div>
</div>
    )
};

export default Navbar2;
