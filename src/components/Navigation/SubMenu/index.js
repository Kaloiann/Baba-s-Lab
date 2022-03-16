import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import categories from '../../../api/categories.json'

import css from './subMenu.module.css'

export const SubMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  // copy this component and use it in <Mobile />

  // category items use onClick instead of onMouseEnter

  // on category click, hide categories and show subcategories ONLY

  // add back button in subcategories menu

  // add "view all" in subcategories menu, which will open the category link

  // on subcategory click, redirect

  // on redirect, hide menu
  
  return (
    <div className={css['main-category']}>
      <ul className={css.categories}>
      {categories.categories?.map((item, i) =>
        <Link to={`/meals/category/${item.name}`} key={`cateogry_${i}`}
          onMouseEnter={() => setActiveCategory(i)}
          // onClick
        >
          {item.name}
        </Link>
      )}
      </ul>
      <div>
        <ul className={css.subcategories}>
          {categories.categories[activeCategory]?.subcategories.map((cat, i) => (
            <Link to={`/meals/subcategory/${cat}`} key={`sub_category_${i}`}>{cat}</Link>
            ))}
        </ul>
      </div>
    </div>
  ) 
}

export default SubMenu