import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import categories from '../../../api/categories.json'

import css from './subMenuMobile.module.css'

export const SubMenuMobile = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  // - decomposition
  // - composition

  // (issue)
  // #1 define - we need mobile submenu
  // #2 wrspm - we have desktop submenu
  // #3 decompose

  // branch: mobile-submenu
  
  // copy this component and use it in <Mobile />
  
  // category items use onClick instead of onMouseEnter
  
  // on category click, hide categories and show subcategories ONLY
  
  // add back button in subcategories menu
  
  // add "view all" in subcategories menu, which will open the category link
  
  // on subcategory click, redirect
  
  // on redirect, hide menu
  
  // #4 acceptence criteria - define when a step is completed
  //  - write test
  //   are categories hided?
  //   are subcategories shown?
  //  - find corner case

  //  register form
  //  email
  //  confirm email
  //  password
   // happy path
   // unhappy path
   // test if email and confirm email are the same
   // test if theere is password

  // #5 composition
  //  - paradigms
  //  - design patterns
  //  - libraries


  // google:
  //  software engineering decomposition and composition
  //  software engineering user stories and acceptance criterias
  //  software engineering wrspm
  //  software engineering happy path and unhappy path
  
  
  // create merge request from gitHub
  // git checkout main
  // git pull

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

export default SubMenuMobile