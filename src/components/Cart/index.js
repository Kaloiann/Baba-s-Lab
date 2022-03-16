import React, { useContext, useState } from 'react'
import MenuRender from '../Menu/MenuRender'
import { CartContext } from '../../store/CartProvider'
import css from './cart.module.css'
import data from '../../api/menu.json'

function Cart() {
  const [order, setOrder] = useState(false)
  const cartCtx = useContext(CartContext)
  const { meals } = cartCtx

  const hasMeals = Object.values(meals).find(val => val > 0)

  const orderHandler = (id) => {
    setOrder(true)
    cartCtx.removeAllMeals(id)
  }
  
  const mealsIds = Object.keys(meals)
  const renderMeals = data.Menu.filter(meal => mealsIds.find(id => id == meal.id)) || []
  const totalPrice = mealsIds.length ? mealsIds.map(id => parseFloat(renderMeals.find(meal => meal.id == id).price) * meals[id])?.reduce((a, b) => a + b) : 0

  return (
    <div className={css.container}>
        <h1 className={css.h1}>Your Cart :</h1>
        <MenuRender renderMeals={renderMeals} />
        <div className={css.amount}>
          <p className={css.price}>Price: ${totalPrice.toFixed(2)}</p>
          {hasMeals && <button onClick={orderHandler} className={css.button}>Order</button>}
          {order && <p className={css.order} >Your order is recived !</p> }
        </div>
    </div>
  )
}

export default Cart