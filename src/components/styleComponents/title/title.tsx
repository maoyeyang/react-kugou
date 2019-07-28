import * as React from 'react'
import styles from './title.module.styl'
interface TitleProps {
  title: any
}

const Title: React.StatelessComponent<TitleProps> = (props: TitleProps) => {
  return (
    <div className={styles.title}>
      <div className={styles.menu_title} />
      <span>{props.title}</span>
    </div>
  )
}

export default Title
