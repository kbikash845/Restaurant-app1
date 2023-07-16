import {useContext}from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/Cart-context';

function HeaderCartButton(props) {
  const cartCtx=useContext(CartContext);

  const numberOfCardItem=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber+item.amount
  },0)

  const btnClasses=`${classes.button} ${classes.bump}`;

  return (
    <button className={btnClasses} onClick={props.onclick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>{numberOfCardItem}</span>
    </button>
  )
}

export default HeaderCartButton