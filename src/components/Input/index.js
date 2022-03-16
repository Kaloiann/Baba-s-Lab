import React, { useContext, useReducer } from 'react'
import { CartContext } from '../../store/CartProvider'
import css from './input.module.css'


const Reducer = (state, action) => {
  switch(action.type){
    case 'field':
      return {
        ...state,
      }
    case '+':
      return {
        ...state,
        value: state.value + 1,
      }
    case '-':
      return {
        ...state,
        value: state.value - 1,
      }
  }  
  return state
}

const initalState = {
  value: 1,
}

function Input(props) {
    const [state, dispatch] = useReducer(Reducer, initalState)

    const { value } = state

    const submitHandler = (e) => {
      e.preventDefault()
    }

    const cartCtx = useContext(CartContext)
    const addToCartHandler = () => {
      cartCtx.addMeal({
        id: props.id,
        title: props.title,
        amount: value,
        image: props.image,
        price: props.price  
      })
    }

  return (
    <form className={css.container} onSubmit={submitHandler}>
      <button className={css.red} disabled={value == 1} onClick={() => dispatch({ type: '-' })}>-</button>
      <p>Amount:</p>
      <input type="number"  readOnly value={value} onChange={e => dispatch({
        type: 'field',
        value: e.target.value
      })}/>
      <button className={css.blue} disabled={value >= 10} onClick={() => dispatch({ type: '+'})} >+</button>
      <button className={css.add} onClick={addToCartHandler}>+ Add</button>
    </form>
  )
}

export default Input