import React from 'react'
import css from './menu.module.css'
import data from '../../api/menu.json'
import Button from '../Button'
import Input from '../Input'
import img from '../../images/meat.png'


function Menu() {
  return (
    <div className={css.container}>
      {data.Menu.map(product =>
        <ul key={product.id}>
          <li>
            <h1>{product.title}</h1>
            <div className={css.mix}>
              <img src={img} alt='Meat ball'/>
              <p>{product.shortDescription}</p>
            </div>
            <div className={css.mix2}>
             <p className={css.price}>${product.price}</p>
              <div>
                <Input />
                <Button />
              </div>
            </div>
          </li>
        </ul>
        )}
    </div>
  )
}

export default Menu