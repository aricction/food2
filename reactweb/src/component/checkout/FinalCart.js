
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity} from '../actions/cartActions';

import Footer from '../footer';
import $ from 'jquery';
import { Fragment } from 'react';


class FinalCart extends Component{





    render(){

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(

                      
<div> 
    
                        
                <div class="container">
                
                <div class="row">
                  <div class="col-sm">
                   
                  <span className="foodname ">{item.title}</span>
                  </div>

                  <div class="col-5">
                  <span className="foodname "><b>Qty:{item.quantity}</b> </span>
                  </div>

                  <div class="col">
                  <p className='price'>
                  <b>Price: {item.price}₹</b>
                  </p>
                  <hr/>
                  </div>
                 
                  </div>
                  </div>
                  </div>                              
                    )
                })
            ):

             (
                <div className='img-fluid'  alt="empty cart">
               
                </div>
             )
       return(
                <div className='container'>
                    <p className='card-header'>YOUR ORDER</p>
                      <ul className="">
                        {addedItems}
                        <b>Total: {this.props.total} ₹</b>
                    </ul>
                </div>
                  
              
            
     





       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(FinalCart);
