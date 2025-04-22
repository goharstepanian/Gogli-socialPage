import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = ({id}) => {
  return (
      <nav className={styles.nav}>
          <NavLink to={'/users'} className={styles.navLink}>
              <p>Users</p>
          </NavLink>
          <NavLink to={'/'} className={styles.navLink}>
              <p>Home</p></NavLink>
    </nav>
  )
}

export default Nav