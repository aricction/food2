import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
class Story extends Component{
  render() {
    return (
<div className="home">
      <div className="container">
         <div className="row">
           <Breadcrumb>
             <BreadcrumbItem><Link to='/home' style={{ color: '#e1b12c' }}>Home</Link></BreadcrumbItem>
             <BreadcrumbItem active> Our Story </BreadcrumbItem>
           </Breadcrumb>
          < div className="col-12">
               <div className="text3 row justify-content-center">
                   <h1> OUR STORY </h1>
               </div>
                <hr />
           </div>
    <div className="container">
        <div className="row">
           <div className=" img-fluid">
            <img src="assets/img/about.jpg" />
          </div>
          <div className="col">
          <h2 className="col-9">Since 1995</h2>
          <p className="col-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
           non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

          </div>
        </div>
        <hr/>
      </div>
<div className="container">
<div className="row">
<div className="col">
  <h2 className="">Our finest Chefs</h2>
<p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
</div>
<div className="col-sm">
<div className="img-fluid">
<img src="assets/img/about2.jpg"/>
</div>
</div>


</div>
<hr/>
</div>
<div className="home">
<div className="container ">
<div className="row justify-content-md-center">
<div className="col-6 col-md-4">
<h1 className="">Our mission</h1>
<p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.</p>
</div>

<div className="col-6 col-md-4">
<h1>Our essence</h1>
<p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua</p>
</div>



</div>
</div>
<div className="container ">
<div className="row justify-content-md-center">
<div className="col-6 col-md-4">
<h1 className="">Our promise</h1>
<p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.</p>
</div>

<div className="col-6 col-md-4">
<h1>Our vibe</h1>
<p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.</p>
</div>



</div>
</div>
</div>
           </div>
      </div>
      <Footer/>
 </div>




    );
  }
}

export default Story;
