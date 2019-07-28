import * as React from 'react'
import styles from './style_13.module.styl'
import { Link } from 'react-router-dom'
import { UrlToParams } from 'common/js/url'

interface Style_13Props {
  data: any
}

const Style_13: React.StatelessComponent<Style_13Props> = (
  props: Style_13Props
) => {
  const data = props.data
  return (
    <div className={styles.style_13}>
      {data.map((item: any) => (
        <Link
          to={`/plist/info/${UrlToParams(item.url).id}`}
          key={item.id}
          className={styles.box}
        >
          <div className={styles.top}>
            <img className={styles.img} src={item.images} />
            <div className={styles.info}>
              <i className={styles.iconleft} />
              <span className={styles.count}>{item.extend}</span>
              <i className={styles.iconright} />
            </div>
          </div>
          <p className={styles.name}>{item.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default Style_13
