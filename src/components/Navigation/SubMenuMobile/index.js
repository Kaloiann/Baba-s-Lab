import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory   } from 'react-router-dom'
import categories from '../../../api/categories.json'

import css from './subMenuMobile.module.css'

export const SubMenuMobile = ({ setShowMenu }) => {
  const [activeCategory, setActiveCategory] = useState(null)
  const [hideCategories, setHideCategories] = useState(false)
  const history = useHistory();

  const hideCategoriesHandler = (i) => {
    setHideCategories(true)
    setActiveCategory(i)
  }
  const showCategoriesHandler = () => {
    setHideCategories(false)
  }
  const redirectHandler = (subCat) => {
    setShowMenu(false)
    history.push(`/meals/subcategory/${subCat}`)
  }
 

  return (
    <div className={css['main-category']}>
      <ul className={css.categories}>
      {hideCategories && <button onClick={showCategoriesHandler}>Back</button> }
      {!hideCategories && categories.categories?.map((cat, i) =>
        <div to={`/meals/category/${cat.name}`} key={`cateogry_${i}`}
          onClick={() => hideCategoriesHandler(i)} 
        >
          {cat.name}
        </div>
      )}
      </ul>
      <div>
        {hideCategories && <ul className={css.subcategories}>
          {categories.categories[activeCategory]?.subcategories.map((subCat, i) => (
            <div onClick={() => redirectHandler(subCat)} key={`sub_category_${i}`}>{subCat}</div>
            ))}
        </ul>}
      </div>
    </div>
  ) 
}

export default SubMenuMobile