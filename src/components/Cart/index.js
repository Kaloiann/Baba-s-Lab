import React from 'react'
import CartIcon from './CartIcon'
import css from './cart.module.css'

function Cart() {
  return (
    <div className={css.container}>
      <p>
        Your Cart
      </p>
      <CartIcon />
    </div>

  )
}

export default Cart