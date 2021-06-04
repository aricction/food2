import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
//import { addShipping } from './actions/cartActions'
class Recipe extends Component{

    componentWillUnmount() {
         if(this.refs.shipping.checked)
              this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){

        return(
            <div className="container">
                <div className="collection">
                    <span className="">
                            <label className="col">
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6₹)</span>
                            </label>
                        </span>
                        <li className="collection-item"><b>Total: {this.props.total} ₹</b></li>
                    </div>
                    <div className="container checkout">
                        <Button  type="submit" color="primary">
                            <span>
                                <NavLink className="nav-link text-white" to="/Example">
                                    Checkout
                                </NavLink>
                            </span>
                        </Button>
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
