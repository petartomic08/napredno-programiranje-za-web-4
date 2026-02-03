import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header_div}>
      <Link className={styles.header_link} to='/products'>Products</Link>
      <Link className={styles.header_link} to='/categories'>Categories</Link>
      <Link className={styles.header_link} to='/orders'>Orders</Link>
      <Link className={styles.header_link} to='/users'>Users</Link>
    </div>
  )
}

export default Header