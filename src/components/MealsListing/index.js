import React from 'react'
import menu from '../../api/menu.json'
import categories from '../../api/categories.json'
import { Link, useParams } from 'react-router-dom'
import Menu from '../Menu'

function MealsListing() {
  const { category: curCategory } = useParams();
  const { subcategory: subCategory } = useParams();
  
  const listCategory = curCategory && categories.categories.find(cat => cat.name === curCategory)

  const meals = menu.Menu.filter(meal => meal.category === curCategory || meal.subcategory === subCategory)
 
  return (
    <>
    {listCategory?.subcategories.map((cat, i) => <Link to={`/meals/subcategory/${cat}`} key={`subcategorie_${i}`} >{cat}</Link>)}
    <Menu data={meals} />
    </>
  )
}

export default MealsListing