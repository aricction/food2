import React,{ component} from 'react';

class FinalCart extends Component {

   
    render () {

        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item =>{
                return (
                    <div className="container" key={item.id}>  
                    <div className="item-img">
                    <img src={item.img} alt={item.img} className=""/>
                    </div>

                    <p><b>Price: {item.price}</b></p>
                    <b>{item.quantity}</b>
                    </div>

                    
                )
            })
        ):
         ( 
             <div>
               <p>add items</p>
             </div>

        )
        return (
            <div>

            </div>
        )
    }
}


export default FinalCart
