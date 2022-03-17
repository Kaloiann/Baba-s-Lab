import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubMenuMobile from '../SubMenuMobile'
import css from './mobile.module.css'

const Mobile = ({ setShowMenu }) => {
  const [showCategory, setShowCategory] = useState(false)

  const hideNavHandler = () => {
    setShowMenu(false)
  }

  return (
    <div className={css.container}>
       <div className={css.options}>
          <div onClick={() => setShowCategory(!showCategory)}>Menu</div>
          <div>
            {showCategory ?
              <SubMenuMobile setShowMenu={setShowMenu} />
            : null}  
          </div>  
        </div>
        <Link onClick={hideNavHandler} to='/places'>Places</Link>
        <Link onClick={hideNavHandler} to='/info'>For Baba</Link>
    </div>
  )
}

export default Mobile