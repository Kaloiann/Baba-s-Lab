import React, { useReducer } from 'react'
import CartContext from './cart-context';

const minAmount = (amount) => amount <= 0 ? 0 : amount

const Reducer = (state, action) => {
  switch(action.type){
    case 'add':
      return {
        amount: state.amount + action.meal.amount,
        meals: {
          ...state.meals,
          [action.meal.id]: (state.meals[action.meal.id] || 0) + action.meal.amount
        }
      };

    case 'remove':
      return {
        amount: minAmount(state.amount - 1),
        meals: {
          ...state.meals,
          [action.id]: minAmount((state.meals[action.id] - 1))
        }
      }
  }
  return initalState
}

const initalState = {
  meals: {},
  amount: 0,
}
function CartProvider(data) {
  const [state, dispatch] = useReducer(Reducer, initalState)

  const addMealHandler = (meal) => {
    dispatch({ type: 'add', meal: meal })
  }
  const removeMealHandler = (id) => {
    dispatch({ type: 'remove', id: id })
  }

  const cartContext = {
    meals: state.meals,
    amount: state.amount,
    addMeal: addMealHandler,
    removeMeal: removeMealHandler
  };

  return (
    <CartContext.Provider value={cartContext}>
      {data.children}
    </CartContext.Provider>
  )
}

export default CartProvider