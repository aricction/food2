
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom'
import { removeItem, addQuantity, subtractQuantity} from './actions/cartActions';
import Recipe from './Recipe';
import Headercart from './headcart';
import Footer from './footer';
import $ from 'jquery';
class Cart extends Component{

  handleRemove =(id)=>{
    this.props.removeItem(id);
  }

  handleAddQuantity = (id) =>{
    this.props.addQuantity(id);
  }

  handleSubtractQuantity =(id)=>{
    this.props.subtractQuantity(id);
  }

  componentDidMount() {

    var itemCount = 0;
  
  $('.add').click(function (){
    itemCount ++;
    $('#itemCount').html(itemCount).css('display', 'block');
  }); 
  }

    render(){

        let addedItems = this.props.items.length ?
            (
                this.props.items.map(item=>{
                    return(

                        <div className="container collection-item avatar" key={item.id}>
                        <div className="row ">
                                    <div className="item-img">
                                        <img src={item.img} alt={item.img} className=""/>
                                </div>


                                    <div className="col">

                                        <span className="title ">{item.title}</span>
                                        <div class="d-none d-sm-block">
                                          <p >{item.desc}</p>
                                            </div>
                                        <div class="col-sm">




                                        </div>
                                        <p><b>Price: {item.price}₹</b></p>
                                        <p>
                                            <b>Quantity: {item.quantity}</b>
                                        </p>
                                        <div class="">
                                        <div class="">
                                        <div class="">
                                        <div className="add-remove">

                                            <Link to="/cart"><span className="bi bi-plus" onClick={()=>{this.handleAddQuantity(item.id)}}></span></Link>
                                            <Link to="/cart"><span className="bi bi-dash" onClick={()=>{this.handleSubtractQuantity(item.id)}}></span></Link>
                                        </div>
                                        </div>
                                        </div>
                                        </div>
                                        <Button className="button" color="warning" onClick={()=>{this.handleRemove(item.id)}}>Remove</Button>
                                    </div>
                                 </div>
                               </div>
                    )
                })
            ):

             (
                <div className='img-fluid'  alt="empty cart">
                  <img src="/assets/img/cart.png" />
                </div>
             )
       return(
         <div className="home">
          <div className="container">
            <Headercart />
            <div className="col">

                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                  <Recipe />
                 </div>
               </div>
             </div>
            <Footer />
         </div>






       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
    }
}
const mapDispatchToProps = (dispatch ) =>{
return {
removeItem: (id)=>{dispatch(removeItem(id))},
addQuantity: (id)=>{dispatch(addQuantity(id))},
subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
