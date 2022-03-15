import React, { useContext } from 'react'
import CartContext from '../store/cart-context'
import css from './menuRender.module.css'

function MenuRender({ renderMeals }) {
  const cartCtx = useContext(CartContext)
  const { meals } = cartCtx

  const removeFromCartHandler = (id) => {
    cartCtx.removeMeal(id)
  }

  return (
    <div className={css.container}>
      {renderMeals?.length ? renderMeals.map((meal, i) => meals[meal.id] ?
        <ul key={i}>
          <li key={meal.id}>
                <h1>{meal.title}</h1>
                <img src={meal.image} alt={meal.title}/>
              <div className={css.mix}>
                <p>${meal.price}</p>
                <p>x{meals[meal.id]}</p>
              </div>
          </li>
          <button onClick={() => removeFromCartHandler(meal.id)}>X</button>
        </ul>
        : null
      ): null}
    </div>
  )
}

export default MenuRender