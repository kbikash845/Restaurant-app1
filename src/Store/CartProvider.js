import {useReducer}from 'react';
import CartContext from './Cart-context';

const defaultCardState={
    items:[],
    totalAmount:0
}
const cardReducer=(state,action)=>{
    if(action.type==='ADD'){
        const updateItems=state.items.concat(action.item);
        const updateTotalAmount=state.totalAmount + action.item.price*action.item.amount;
        return {
            items:updateItems,
            totalAmount:updateTotalAmount
        }
    }
    return defaultCardState;
}
function CartProvider(props) {
    const [cardState,dispatchCardAction]=useReducer(cardReducer,defaultCardState)

    const addItemToCardHandler=item=>{
        dispatchCardAction({type:'ADD',item:item})
    };
    const removeItemFromCardHandler=id=>{
        dispatchCardAction({type:'REMOVE',id:id})
    }
    const cartContext={
        items:cardState.items,
        totalAmount:cardState.totalAmount,
        addItem:addItemToCardHandler,
        removeItem:removeItemFromCardHandler
    }
  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}

export default CartProvider