import Uthappizza from '../../images/samosa.jpg'
import Vadonut from '../../images/donut2.jpg'
import Zucchipakoda from '../../images/noodles5.png'
import Elaicheesecake from '../../images/chicken4.jpg'
import Pasta from '../../images/pasta3.png'
import Burger from '../../images/1.png'
import { ADD_TO_CART, REMOVE_ITEM,ADD_QUANTITY,SUB_QUANTITY , ADD_SHIPPING} from '../actions/action-types/cart-actions'


const initState = {
  items : [
    {id:1, title: 'Samosa', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:7.00, img:Uthappizza},
    {id:2, title: 'Chocolate Donut', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:80, img:Vadonut},
    {id:3, title: 'Hakka Noodles', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:110, img:Zucchipakoda},
    {id:4, title: 'Butter Chicken', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:100, img:Elaicheesecake},
    {id:5, title: 'Red Sauce Pasta', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:90, img:Pasta},
    {id:6, title: 'Burger', desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex. ", price:50.44, img:Burger}
  ],
  addedItems:[],
  total: 0

}

const cartReducer= (state = initState,action)=>{
  if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1
           return{
              ...state,
               total: state.total + addedItem.price
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price

          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }

      }
  }
  if(action.type === REMOVE_ITEM){
    let itemToRemove = state.addedItems.find(item=>action.id===item.id)
    let new_items = state.addedItems.filter(item=> action.id !== item.id)

    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }

  if(action.type === ADD_QUANTITY){
    let addedItem = state.items.find(item => item.id === action.id)
      addedItem.quantity += 1
      let newTotal = state.total + addedItem.price
      return{
        ...state,
        total: newTotal
      }
  }

  if(action.type === SUB_QUANTITY){
    let addedItem = state.items.find(item=> item.id === action.id)
    if(addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item =>item.id !== action.id )
        let newTotal = state.total - addedItem.price
        return{
          ...state,
          addedItems: new_items,
          total: newTotal
        }
  }

  else {
    addedItem.quantity -= 1
    let newTotal = state.total - addedItem.price
    return{
      ...state,
      total: newTotal
    }

  }

}
  if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
  }

  if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 6
      }
}
else {
  return state
    }

}

export default cartReducer;
