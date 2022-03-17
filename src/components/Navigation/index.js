import React, { useState, useEffect, useContext } from 'react'
import css from './navigation.module.css'
import img from '../Logo/download.png'
import { Link } from 'react-router-dom'
import CartButton from '../Cart/CartButton'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Mobile from './Mobile'
import SubMenu from './SubMenu'
import { CartContext } from '../../store/CartProvider'

  
function Navigation() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 960)
  const [showCategory, setShowCategory] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const cartCtx = useContext(CartContext)


  const { amount } = cartCtx

   const MobileMenu = <>
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
        {showMenu &&  <Mobile setShowMenu={setShowMenu} />}
      </div>
      <Link to='/cart'>
        <CartButton amount={amount} />
      </Link>
    </div>
  </>

  const DesktopMenu = <>
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
          <Link to='/places'>Places</Link>
          <Link to='/info'>For Baba</Link>
      </div>
      <Link to='/cart'>
        <CartButton amount={amount} />
      </Link>
    </div>
  </>

  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 960);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize)
  });

  return (
    isMobile
      ? MobileMenu
      : DesktopMenu
  )
}

export default Navigation