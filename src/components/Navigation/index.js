import React from 'react'
import css from './navigation.module.css'
import img from '../../images/download.png'
import Cart from '../Cart'

function Navigation() {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={img} alt="Granny Icon" />
        <p>Baba's Lab</p>
      </div>
      <ul className={css.options}>
        <li>Menu</li>
        <li>Special</li>
        <li>Places</li>
        <li>Often Orders</li>
        <li>For Baba</li>
      </ul>
      <Cart />
    </div>
  )
}

export default Navigation