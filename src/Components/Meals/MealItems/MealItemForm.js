import {useRef,useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'



function MealItemForm(props) {
  const [amountIsValid,SetAmountIsValid]=useState(true)
  const amountInput=useRef()
  const submitHandler=event=>{
    event.preventDefault()
    const enterAmount=amountInput.current.value;
    const enterAmountNumber=+enterAmount;
    if(
      enterAmount.trim().length===0 ||
       enterAmountNumber<1 || 
       enterAmountNumber>5){
        SetAmountIsValid(false);
        return;
       }
       props.onAddToCard(enterAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountInput}
       label="Amount"
        input={{
        id:'amount',
        type:'number',
        min:'1',
        max:'5',
        step:'1',
        defaultValue:'1'
      }}/>
      <button >+Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm