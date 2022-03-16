import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubMenu from '../SubMenu'
import css from './mobile.module.css'

const Mobile = () => {
  const [showCategory, setShowCategory] = useState(false)

  return (
    <div className={css.container}>
       <div className={css.options}>
          <div onClick={() => setShowCategory(!showCategory)}>Menu</div>
          <div>
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
  )
}

export default Mobile