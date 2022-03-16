import React from 'react'
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillGoogleCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import css from './footer.module.css'

const Footer = () => {
  return (
    <div className={css.container}>
        <div className={css.phone}>
          <BsFillTelephoneFill className={css.social}/>
          <h1>0230130120</h1>
        </div>
        <a href="https://www.facebook.com/"><BsFacebook  className={css.social}/></a>
        <a href="https://twitter.com/"><AiFillTwitterCircle  className={css.social}/></a>
        <a href="https://www.instagram.com/"><AiFillInstagram  className={css.social}/></a>
        <a href="https://www.google.bg/"><AiFillGoogleCircle  className={css.social}/></a>
        <a href="https://www.youtube.com/"><AiFillYoutube  className={css.social}/></a>
    </div>
  )
}

export default Footer