import * as React from 'react'
import styles from './style_14.module.styl'
import { Link } from 'react-router-dom'

interface Style_14Props {
  data: any
}

const Style_14: React.StatelessComponent<Style_14Props> = (
  props: Style_14Props
) => {
  const data = props.data
  return (
    <div className={styles.style_14}>
      {data.map((item: any) => (
        <Link to={`#`} key={item.id} replace={true} className={styles.box}>
          <div className={styles.top}>
            <img className={styles.img} src={item.images} />
            <div className={styles.info}>
              <i className={styles.iconleft} />
              <span className={styles.count}>{item.extend}</span>
              <i className={styles.iconright} />
            </div>
          </div>
          <p className={styles.songname}>{item.name}</p>
          <p className={styles.singername}>{item.extend_singer}</p>
        </Link>
      ))}
    </div>
  )
}

export default Style_14
