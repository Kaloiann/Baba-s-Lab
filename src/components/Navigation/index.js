import React, { useState, useEffect } from 'react'
import css from './navigation.module.css'
import img from '../Logo/download.png'
import { Link } from 'react-router-dom'
import CartButton from '../Cart/CartButton'
import categories from '../../api/categories.json'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Mobile from './Mobile'

export const SubMenu = () => {
  const [activeCategory, setActiveCategory] = useState(null)
  
  return (
    <div className={css['main-category']}>
      <ul className={css.categories}>
      {categories.categories?.map((item, i) =>
        <Link to={`/meals/category/${item.name}`} key={`cateogry_${i}`}
          onMouseEnter={() => setActiveCategory(i)}
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

const DesktopMenu = () => {
  const [showCategory, setShowCategory] = useState(false)

  return (
    <>
      <div className={css.container}>
        <Link className={css.link} to='/'>
          <div className={css.logo}>
            <img src={img} alt="Granny Icon" />
            <p>
              Baba's Lab
            </p> 
          </div>
        </Link>
          <div className={css.options}>
            <div
              className={css.show}
              onMouseEnter={() => setShowCategory(true)}
              onMouseLeave={() => setShowCategory(false)}
            >
              <Link to='/menu'>Menu</Link>
              <div className={css.menu}>
                {showCategory ?
                  <SubMenu />
                : null}  
              </div>  
            </div>
            {/* <Link to='/#'>Special</Link> */}
            <Link to='/#'>Places</Link>
            {/* <Link to='/#'>Often Orders</Link> */}
            <Link to='/#'>For Baba</Link>
        </div>
        <Link to='/cart'>
          <CartButton />
        </Link>
      </div>
    </>
  )
}

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className={css.container}>
        <Link className={css.link} to='/'>
          <div className={css.logo}>
            <img src={img} alt="Granny Icon" />
            <p>
              Baba's Lab
            </p> 
          </div>
        </Link>
        <div className={css.visible}>
         {!showMenu ? <AiOutlineMenu className={css['show-menu']} onClick={() => setShowMenu(true)}/> : 
         <AiOutlineClose className={css['close-menu']} onClick={() => setShowMenu(false)}/>}
        </div>
        <div className={css['mobile-navigation']}>
          {showMenu &&  <Mobile />}
        </div>
        <Link to='/cart'>
          <CartButton />
        </Link>
      </div>
    </>
  )
}
  
function Navigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960)
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  });
  return (
    isMobile
    ? <MobileMenu />
    : <DesktopMenu />
  )
}

export default Navigation