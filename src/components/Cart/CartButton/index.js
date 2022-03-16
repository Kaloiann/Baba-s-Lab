import React from 'react'
import CartIcon from '../CartIcon'
import css from './cartButton.module.css'

function CartButton({ amount }) {
  return (
    <button className={css.container}>
      <CartIcon />
      <h1 className={css.text}>Your Cart</h1>
      <p className={css.badge}>{amount}</p>
    </button>
  )
}

export default CartButton