import React, { Fragment } from 'react';
import Mealimage from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';

function Header() {
  return <Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton/>
    </header>
    <div className={classes["main-image"]}>
        <img src={Mealimage} alt='A Table full of delicius'/>
    </div>
  </Fragment>
}

export default Header