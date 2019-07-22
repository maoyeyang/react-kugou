import * as React from 'react'
import styles from './header.module.styl'

const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className={styles.header}>
      <a className={styles.logo} title="酷狗音乐" href="#" />
      <span>下载酷狗</span>
      <a className={styles.btnSearch} href="#" />
    </div>
  )
}

export default Header
