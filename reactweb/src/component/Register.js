
import React, { useContext, useState, useEffect} from 'react';
import {Button, Form , FormGroup, Label, Input ,
    Row, Col, NavItem } from 'reactstrap';
import AuthContext from './auth/AuthContext';
import Footer from './footer';
 
 const RegisterUser = props => {
     const authContext = useContext(AuthContext);
     const [loading, setLoading] = useState(false);
     const { registeruser , isAuthenticated } = authContext;
    
     useEffect(() => {
         if(isAuthenticated){
             props.history.push("/");
         }
     }, [isAuthenticated, props.history]);


     const [user, setuser] = useState({
         name: '',
         email: '',
         password: '',
         cpassword: ''
     });

     const {name, email, password, cpassword} = user;

     const onChange = e => setuser({
         ...user, [e.target.name]: e.target.value
     });

     const onSubmit = e => {
         e.preventDefault();
         registeruser ({
             name,
             email,
             password
        });
         
        setLoading(true) };
     return (
         <div class='home'>
         <div className='container'>
             <div className='col'>
        <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm-4 ml-5">
            <h3>Register as new user</h3>
         <div className="form-group">
              <label>Enter name</label>
          <input className='form-control' type='text' name='name' required value={name} onChange={onChange} />
          </div>
          <div className="form-group">
              <label>Enter email</label>
          <input className='form-control' type='email' name='email'required value={email} onChange={onChange} />
          </div>
          <div className="form-group">
              <label>Enter password</label>
          <input className='form-control' type='password' required name='password' value={password} onChange={onChange} />
          </div>
          <div className="form-group">
              <label>Confirm password</label>
          <input className='form-control' type='password' required name='cpassword' value={cpassword} onChange={onChange} />
          </div>
        
          <FormGroup>
                       <button  disabled={loading} 
                       className="btn btn-success" type='submit' value='Register '
                       >
                           {loading && (
                               <span className='spinner-border spinner-border-sm'></span>
                           )}
                           <span>Register</span>
                       </button>
                   </FormGroup>


            </div>
        </div>
        

    </form>
    </div>
   
    </div>
 <Footer />
   
    </div>
    
     )
 }
 export default RegisterUser;