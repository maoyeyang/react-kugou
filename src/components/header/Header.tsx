import * as React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.styl'

const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo} title="酷狗音乐" />
      <Link to="/share/1" className={styles.button}>
        转到专区
      </Link>
      <Link to="/search" className={styles.btnSearch} />
    </div>
  )
}

export default Header
