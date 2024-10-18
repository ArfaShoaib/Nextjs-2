'use client'
import React from 'react'
import css from './contact.module.css'

const ContactPage = () => {
  return (
    
    <div className={css.bodyview}>
      <div className={css.wrapper}>
        <div className={css.form}>
          <h1 className={css.heading}> Contact Me</h1>
        <input type="text" placeholder='Name' className={css.inputs}/>
        <input type="email" placeholder='Email' className={css.inputs} />
        <textarea rows={3} cols={30} placeholder='Message' className={css.texts}></textarea>
        <button className={css.click}>Submit</button>
        
        </div>

      </div>
    </div>
    
  )
}

export default ContactPage
