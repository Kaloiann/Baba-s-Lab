import React, { useContext } from 'react'
import css from './menu.module.css'
import Input from '../Input'


function Menu({ data }) {
  return (
    <div className={css.container}>
      {data?.map(meal =>
        <ul key={meal.id}>
          <li>
            <h1>{meal.title}</h1>
            <div className={css.mix}>
              <img src={meal.image} alt={meal.title}/>
              <p>{meal.shortDescription}</p>
            </div>
            <div className={css.mix2}>
             <p className={css.price}>${meal.price}</p>
              <div>
                <Input {...meal} />
              </div>
            </div>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Menu