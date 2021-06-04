import React, {useContext, useEffect, Component} from 'react';
import { Link , NavLink} from 'react-router-dom';
import Header from './HeaderComponent';
import {Button} from 'reactstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Book from './bookTable';




  
const responsive ={
  superLargeDesktop: {
    breakpoint : { max: 4000, min:3000},
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024},
    items: 3,
    slidesToSlide: 3
  },
  tablet :{
    breakpoint:{ max: 1024, min: 464},
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint :{ max: 464, min: 0},
    items: 1,
    slidesToSlide: 1
  }
};


class Home extends Component {


  constructor(props){
    super(props);
    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav(){
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render(){
    return (

      /**login model */
      <div className="home">



  <div id="loginModal" class="modal fade" role="dialog">
      <div class="modal-dialog modal-lg" role="content">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title">Login</h4>
                  <button type="button" class="close" data-dismiss="modal">
                      &times;
                  </button>
              </div>

              <div class="modal-body">
                  <form>
                      <div class="form-row">
                          <div class="form-group col-sm-4">
                              <label htmlFor="emaildInput">Email Address</label>
                              <input type="email" class="form-control form-control-sm mr-1" id="emaildInput" placeholder="Enter email"/>
                          </div>

                          <div class="form-group col-sm-4">
                              <label class="sr-only" for="exampleInputPassword3">Password</label>
                              <input type="password" class="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"/>
                          </div>
                          <div class="col-sm-auto">
                              <div class="form-check">
                                  <input class="form-check-input" type="checkbox"/>
                                  <label class="form-check-label"> Remember me
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div class="form-row">
                          <button type="button" class="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                          <button type="submit" class="btn btn-primary btn-sm ml-1">Sign in</button>
                      </div>

                  </form>

              </div>
          </div>
      </div>
  </div>


  <header  >

    <div class="container">
        <div class="col">

            <div id="mycarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">

                        <img src="assets/img/food.jpg"  width="1200"alt="home"/>
                       <div class="carousel-caption  ">
                          <div class="text2">
                              <h1> Gourmet </h1>
                          </div>
                          <div class="">
                         <div class="">
                           <div class="text">
                       <h1> FOOD & MORE </h1>
                       </div>
                     </div>
                    </div>
                    </div>
                </div>

                <div class="carousel-item ">

                    <img  src="assets/img/c1.jpg" width="1200" alt="buffet"/>
                    <div class="carousel-caption  ">
                        <h2>Weekend Grand Buffet <span class="badge badge-danger">NEW</span></h2>
                        <p class="d-none d-sm-block ">Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="assets/img/c3.jpg" alt="buffet"/>
                    <div class="carousel-caption ">
                        <h2>Weekend Grand Buffet <span class="badge badge-danger">NEW</span></h2>
                        <p class="d-none d-sm-block">Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
                    </div>
                </div>
            </div>
            <ol class="carousel-indicators">
              <li data-target="#mycarousel" data-slide-to="0" class="active"></li>
              <li data-target="#mycarousel" data-slide-to="1" class="active"></li>
              <li data-target="#mycarousel" data-slide-to="2" class="active"></li>

            </ol>
        </div>

      </div>
    </div>

    </header>
  <div class="container">
      <div class="row-content">
          <div class="col">

              <h1 class="col">Welcome</h1>

              <h4 class="col">TO THE RESTAURANT</h4>
              <p class="col-12 col-sm-8 align-self-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
               non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <Book />
          </div>

      </div>

  </div>
  <div className="container">
  <div className="row">
  <div className=" img-fluid">
<img src="assets/img/A1.jpg" />
 </div>

 <div className="col">
 <h3>About us</h3>
 <h2 className="col-9">Simple Way of Eating Delicious</h2>
 <p className="col-sm">Keep healthy readily available.When you get hungry,
  your're likely to eat the first thing you see on the counter or in the</p>
<Button color="primary" type="submit"><span><NavLink className="nav-link text-white"to="/story">Explore our story</NavLink></span></Button>

 </div>
</div>
</div>

<div className="container">
<div className="row justify-content-md-center">
<div class="col-md-auto ">
<h4 className="features">Features</h4>
</div>
</div>
<div className="row justify-content-md-center">
    <div className="col-md-auto">
<h2>Our Awesome Services</h2>
</div>
</div>
</div>

<div class="container">
  <div class="row ">
   <div class="col-1">
   </div>

    <div class="col-sm points">
      <h4>Quality Food</h4>
      <h7 className="">Keep healthy food readily available. When you get hungry, you're more likely to</h7>
    </div>
    <div class="col-sm points ">
        <h4>Super taste</h4>
        <p>Keep healty food readily available. When you get hungry, you're more likely to</p>
    </div>
    <div class="col-sm points">
    <h4>Faster Delivery</h4>
      <p>Keep healty food readily available. When you get hungry, you're more likely to</p>
    </div>

      </div>


</div>

<div className="container" >
<div className="row justify-content-md-center">
<div className="col-md-auto">
<h4 className="recipes">Our Recipes</h4>
</div>

</div>
<div className="row justify-content-md-center">
<div className="col-md-auto">
<h3>Most popular items</h3>
</div>

</div>

<Carousel
swipeable={false}
draggable={false}
showDots={true}
responsive={responsive}
ssr={true}
infinite={true}
autoPlay={this.props.deviceType !== "mobile" ? true : false}
///autoPlaySpeed={3000}
keyboardControl={true}
customTranisition="all .5"
transitionDuration={500}
containerClass="carousel-container"
removeArrowonDeviceType={["tablet", 'mobile']}
deviceType={this.props.devicetype}
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40px"
>
<div  className="card text-center">
<img className="img-div" src="assets/img/chicken2.jpg"  alt="Card cap" />
<div className="rating">
<i className="fa fa-star " aria-hidden="true"></i>
<i className="fa fa-star "></i>
<i className="fa fa-star "></i>
<i className="fa fa-star-half-o "></i>
</div>
</div>
<div  className="card  text-center">
<img className="img-div" src="assets/img/burger.jpg"  alt="Card  cap" />
<div className="rating">
<i className="fa fa-star " aria-hidden="true"></i>
<i className="fa fa-star "></i>
<i className="fa fa-star-half-o "></i>
</div>
</div>

<div  className="card  text-center">
<img className="img-div" src="assets/img/donut.jpg"  alt="Card cap" />
<div className="rating">
<i className="fa fa-star " aria-hidden="true"></i>
<i className="fa fa-star "></i>
<i className="fa fa-star "></i>
<i className="fa fa-star "></i>
<i className="fa fa-star-half-o "></i>
</div>
</div>
<div  className="card  text-center">
<img className="img-div" src="assets/img/burger2.jpg"  alt="Card cap" />
<div className="rating">
<i className="fa fa-star " aria-hidden="true"></i>
<i className="fa fa-star "></i>
<i className="fa fa-star "></i>
<i className="fa fa-star "></i>
<i className="fa fa-star "></i>
</div>
</div>
</Carousel>

<div className="row justify-content-md-center">
<div className="col-md-auto col-sm-center">
<Button type="submit" className="recipeButton" color="primary">
<span > See more Recipe </span></Button>
</div>

</div>

</div>

    <footer class="footer">
      <div class="container">
      <div class="row">
          <div class="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
                <ul class="list-unstyled">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/story">Our story</Link></li>
                    <li><Link to="/menu">Resturant</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
          </div>
          <div class="col-7 col-sm">
              <h5>Our Address</h5>

          </div>
          <div class="col-12 col-sm align-self-center">
              <div class="text-center">
                  <a href="http://google.com/+"><i class="fa fa-google-plus"></i></a>
                  <a href="http://www.facebook.com/profile.php?id="><i class="bi bi-facebook"></i></a>
                  <a href="http://www.linkedin.com/in/"><i class="bi bi-linkedin"></i></a>
                  <a href="http://twitter.com/"><i class="bi bi-twitter"></i></a>
                  <a href="http://youtube.com/"><i class="bi bi-youtube"></i></a>
                  <a href="mailto:"><i class="bi bi-envelope-open"></i></a>
              </div>
          </div>
      </div>
  <div class="row justify-content-center">
      <div class="col-auto">
          <p>© Copyright 2021 Gourmet Food & more</p>
      </div>
  </div>
  </div>
    </footer>

      <script src="node_modules/jquery/dist/jquery.slim.min.js"></script>
      <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
      <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
      <script src="assets/js/scripts.js"></script>

      </div>
    );
  }
}

export default Home;
