import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import css from './input.module.css'



function Input() {
  const [value, setValue] = useState(0)


  const increaseHandler = (e) => {
    e.preventDefault()
    setValue(prevCount => prevCount + 1)
  }
  const decreaseHandler = (e) => {
    e.preventDefault()
    setValue(prevCount => prevCount - 1)
  }

  return (
    <form className={css.container}>
      <button className={css.red} onClick={decreaseHandler}>-</button>
      <p>Amount:</p>
      <input type="number" readOnly value={value} placeholder='0'/>
      <button className={css.green} onClick={increaseHandler}>+</button>
    </form>
  )
}

export default Input