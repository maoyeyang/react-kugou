import * as React from 'react'
import styles from './style_16.module.styl'
import { Link } from 'react-router-dom'
// import { UrlToParams } from 'common/js/url'

interface Style_16Props {
  data: any
}

const Style_16: React.StatelessComponent<Style_16Props> = (
  props: Style_16Props
) => {
  const data = props.data
  return (
    <div className={styles.style_16}>
      {data.map((item: any) => (
        <Link to={`#`} key={item.id} className={styles.box} replace={true}>
          <div className={styles.top}>
            <img className={styles.img} src={item.images} />
            <i className={styles.icon} />
            <div className={styles.mask} />
          </div>
          <p className={styles.songname}>{item.name}</p>
          <p className={styles.singer}>{item.extend_singer}</p>
        </Link>
      ))}
    </div>
  )
}

export default Style_16
