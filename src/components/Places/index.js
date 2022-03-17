import React from 'react'
import { MdPlace } from 'react-icons/md'
import css from './places.module.css'

const Places = () => {
  return (
    <div className={css.container}>
       <ul className={css.options}>
         <li>
          <MdPlace className={css.icon} />
          <p>85 Bruckner Blvd, Bronx, NY 10454, United States</p>
          <iframe className={css.places} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8541.611212744612!2d-73.92806920466394!3d40.80784830596454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5dd5dd7fa53%3A0x86d92bda659b6c4b!2sMcDonald&#39;s!5e0!3m2!1sen!2sbg!4v1647511639624!5m2!1sen!2sbg" />
         </li>
         <li>
          <MdPlace className={css.icon} />
          <p>279 E 149th St, Bronx, NY 10451, United States</p>
          <iframe className={css.places} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10157.012002023745!2d-73.92048933238682!3d40.812635543752734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5d198cb3613%3A0xe5b419e5b08f42c9!2sMcDonald&#39;s!5e0!3m2!1sen!2sbg!4v1647511783704!5m2!1sen!2sbg" />
         </li>
          <li>
          <MdPlace className={css.icon} />
          <p>556 7th Ave, New York, NY 10018, United States</p>
          <iframe className={css.places} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10166.256803288423!2d-73.99359133757339!3d40.75220921653933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ab5d085263%3A0x52774cdada21a749!2sMcDonald&#39;s!5e0!3m2!1sen!2sbg!4v1647512157420!5m2!1sen!2sbg" />
          </li>
       </ul>
      </div>
  )
}

export default Places