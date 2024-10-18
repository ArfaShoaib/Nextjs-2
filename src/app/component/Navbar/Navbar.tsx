import React from 'react'
import Link from 'next/link'
import css from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
    <div className={css.nav}>
      <Link href={"/"} className={css.link}>Home</Link>
      <Link href={"/about"} className={css.link}>About</Link>
      <Link href={"/contact"} className={css.link}>Contact</Link>
</div>

    </div>
  )
}

export default Navbar
