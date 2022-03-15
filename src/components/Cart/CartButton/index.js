import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../CartIcon'
import css from './cartButton.module.css'

function CartButton() {
  const cartCtx = useContext(CartContext)

  const { amount } = cartCtx

  return (
    <button className={css.container}>
      <CartIcon />
      <h1 className={css.text}>Your Cart</h1>
      <p className={css.badge}>{amount}</p>
    </button>
  )
}

export default CartButton