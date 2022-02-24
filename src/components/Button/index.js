import React from 'react'
import css from './button.module.css'

function Button() {
  return (
    <div className={css.container}>
      <button>+Add</button>
    </div>
  )
}

export default Button