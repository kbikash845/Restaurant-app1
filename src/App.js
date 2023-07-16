import React, { useState } from 'react'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import CartProvider from './Store/CartProvider';

function App() {
  const [CardShow,SetCardShow]=useState(false);
  
  const ShowCardHandler=()=>{
    SetCardShow(true)
  };
  const HideHandler=()=>{
    SetCardShow(false)
  }
 
  return (
    <CartProvider>
     {CardShow && <Cart onclosed={HideHandler}/>}
      <Header onshowcard={ShowCardHandler} on/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
    
  )
}

export default App