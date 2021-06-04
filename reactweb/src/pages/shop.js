import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Breadcrumb, BreadcrumbItem, Button  } from 'reactstrap';
import { Link } from 'react-router-dom';
import Headercart from '../component/headcart';
import Footer from '../component/footer';
import { connect } from 'react-redux';
import { addToCart } from '../component/actions/cartActions';
import $ from 'jquery';
//import * as data from './data.json';
//import data from '../local-json/data.json';
//import Products from '../component/Products';


class Shop extends Component{

componentDidMount() {

  var itemCount = 0;

$('.add').click(function (){
  itemCount ++;
  $('#itemCount').html(itemCount).css('display', 'block');
}); 
}
  handleClick = (id) => {
    this.props.addToCart(id);
    alert("Added to cart successully!");
  }
  

  render() {

        let itemList = this.props.items.map(item=>{
            return(
              <div className="box">

                <div className="card" key={item.id}>
                        <div className="card-image">

                          <img className="img-div" src={item.img} alt={item.title}/>
                        </div>

                              <span className="card-title container">{item.title}</span>


                        <div className="card-content ">
                            <p>{item.desc}</p>
                            <p>{item.label}</p>
                            <p><b>Price: {item.price} ₹</b></p>
                          

                        </div>
                        <Button className="button1" type="submit" color="success">
                       <span className="add" to="/" onClick={()=>{this.handleClick(item.id)}} ><i className="bi bi-bag-plus"> </i>  Add To Cart</span>
                           </Button>

                 </div>
           </div>
            );
        })
    return (
<div className="home">
<div className="container">

     <div className="row">
           <Breadcrumb>
             <BreadcrumbItem><Link to='/home'  style={{ color: '#e84118' }}>Home</Link></BreadcrumbItem>
             <BreadcrumbItem active> Order Online </BreadcrumbItem>
           </Breadcrumb>

          <div className="col-12">
               <div className="text3 row justify-content-center">
                   <h1> ORDER ONLINE </h1>
               </div>
                <hr/>
          </div>

           <div className="container">
          <Headercart />
          </div>


          <div className="box">

          {itemList}
          </div>

       </div>

 </div>

       <Footer />
</div>

   );
  }
}
const mapStateToProps = (state)=>{

    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{

    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop);
