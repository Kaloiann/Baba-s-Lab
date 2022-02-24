import React from 'react'
import css from './navigation.module.css'
import img from '../../images/download.png'
import Cart from '../Cart'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className={css.container}>
      <Link className={css.link} to='/'>
        <div className={css.logo}>
          <img src={img} alt="Granny Icon" />
          <p>
            Baba's Lab
          </p> 
        </div>
      </Link>
      <div className={css.options}>
          <Link to='/menu'>Menu</Link>
          <Link to='/#'>Special</Link>
          <Link to='/#'>Places</Link>
          <Link to='/#'>Often Orders</Link>
          <Link to='/#'>For Baba</Link>
      </div>
      <Cart />
    </div>
  )
}

export default Navigation