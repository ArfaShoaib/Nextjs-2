import React from 'react'
import css from './Hero.module.css'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className={css.fullbody}>
       <motion.h1
        initial={{ opacity: 0, y: 50}}  // Start state
        animate={{ opacity: 1.5, y: 0,scale:1.2 }}   // End state
        transition={{ duration: 1 }}   // Animation duration
        className={css.heading}
      >
        Welcome to Our Landing Page
      </motion.h1>
  <div>
  <motion.p
       initial={{ opacity: 0, y: 50  }}  // Start state
       animate={{ opacity: 1.5, y: 0 , scale:1}}   // End state
       transition={{ duration: 2 }}   // Animation duration
       className={css.paragraph}
       
      >
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deserunt eius in et rerum similique fugiat nihil aut iste ipsa? Delectus saepe dolor quo possimus, numquam neque enim tempora eveniet rerum in nihil facere officia unde? Fuga atque, rerum laborum quisquam doloribus expedita quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. A, itaque.
      </motion.p>
  </div>
    </div>
  )
}

export default Hero
