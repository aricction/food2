import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
class Menu extends Component{

  constructor(props){
    super(props);

    this.state = {
       dishes: [
         {
           id: 0,
           name:'Uthappizza',
           image: 'assets/images/uthappizza.png',
           category: 'mains',
           label:'Hot',
           price:'4.99',
           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'

         },
         {  id: 1,
           name:'Zucchipakoda',
           image: 'assets/images/zucchipakoda.png',
           category: 'appetizer',
           label:'',
           price:'1.99',
           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
         },

         {
           id: 2,
           name:'Uthappizza',
           image: 'assets/images/uthappizza.png',
           category: 'mains',
           label:'Hot',
           price:'4.99',
           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'

         },

         {  id: 3,
           name:'Zucchipakoda',
           image: 'assets/images/zucchipakoda.png',
           category: 'appetizer',
           label:'',
           price:'1.99',
           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
         }
       ]
    }
  }
  render() {

    const menu = this.state.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
        < Media tag="li">
            < Media left middle>
              < Media object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className="ml-5">
            <Media heading>{dish.name}</Media>
            
            <p>{dish.description}</p>
            </Media>
        </Media>
        </div>

      );

    });

    return (
<div className="home">
      <div className="container">
         <div className="row">
           <Breadcrumb> 
             <BreadcrumbItem><Link to='/home' style={{ color: '#9c88ff' }}>Home</Link></BreadcrumbItem>
             <BreadcrumbItem active> Menu </BreadcrumbItem>
           </Breadcrumb>
          < div className="col-12">
               <div className="text3 row justify-content-center">
                   <h1> MENU </h1>
               </div>
                <hr />
           </div>
           <Media list>
           {menu}
           </Media>
           </div>

           </div>
           <Footer />
</div>




    );
  }
}

export default Menu;
