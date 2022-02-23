import React from 'react'
import css from './menu.module.css'
import data from '../../api/menu.json'


function Menu() {
  return (
    <div className={css.container}>
      {data.Menu.map(product =>
        <ul key={product.id}>
          <li>
            <h1>{product.title}</h1>
            <img src={product.image} alt="" />
            <p>{product.shortDescription}</p>
            <p>${product.price}</p>
          </li>
        </ul>
        )}
    </div>
  )
}

export default Menu