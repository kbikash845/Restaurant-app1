import React from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal';

function Cart(props) {
    const CartItem=[
        {id:"c1",name:"Shushi",amount:2,price:12.99}
    ].map((item)=><li>{item.name}</li>)
  return (
    <Modal onclosed={props.onclosed}>
      {CartItem}  
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onclosed}>Closed</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart