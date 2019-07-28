import * as React from 'react'
import styles from './style_11.module.styl'
import { Link } from 'react-router-dom'
import { UrlToParams } from 'common/js/url'

interface Style_11Props {
  data: any
}

const Style_11: React.StatelessComponent<Style_11Props> = (
  props: Style_11Props
) => {
  const data = props.data
  console.log(data)
  return (
    <div className={styles.style_11}>
      {data.map((item: any) => (
        <Link
          to={`/plist/info/${UrlToParams(item.url).id}`}
          key={item.id}
          className={styles.box}
        >
          <div className={styles.top}>
            <img className={styles.img} src={item.images} />
            <div className={styles.info}>
              <i className={styles.icon} />
              <span className={styles.count}>{item.extend}</span>
            </div>
          </div>
          <p className={styles.p}>{item.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default Style_11
