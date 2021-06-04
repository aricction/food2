import React, { useState, useContext, useEffect } from 'react';
import {Button, Form , FormGroup, Label, Input ,
    Row, Col, NavItem } from 'reactstrap';
import { useDispatch,  useSelector } from "react-redux";
import AuthContext from './auth/AuthContext';
import AllShip from './checkout/AllShip';
import Footer from './footer';


const Login = props => {

    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const { loginuser, isAuthenticated } = authContext;

  

    useEffect(() => {
        if (isAuthenticated){
            props.history.push("/");
        }
    }, [isAuthenticated, props.history]);


    const [user, setuser] = useState  ({
        
        email: '',
        password: ''
        
    });

    const {email, password} = user;

    const onChange = e => setuser({
        ...user, 
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        loginuser({
            email,
            password
        });
        
    setLoading(true)};
    return (
        <div>
       <div className='container'>
            <h3 className='row justify-content-center'>LOGIN</h3>
           <div className='col col-sm-9'>
               
         
               <div className=' row justify-content-center'>
         
               
               <form onSubmit={onSubmit}>
                   <FormGroup md={8}>
                       <Label>Email</Label>
                       <Input type='email' className='form-control'  required name='email'
                       value={email} onChange={onChange} />
                   </FormGroup>

                   <FormGroup>
                       <Label>Password</Label>
                       <Input type='password'  name='password' required value={password} onChange={onChange} />
                   </FormGroup>

                   <FormGroup>
                       <button className='btn btn-primary btn-block' disabled={loading}>
                           {loading && (
                               <span className='spinner-border spinner-border-sm'></span>
                           )}
                           <span>Login</span>
                       </button>
                   </FormGroup>

      

               </form>

           </div>
           </div>
       </div>
       <Footer/>
       </div>
    );
} 

export default Login;