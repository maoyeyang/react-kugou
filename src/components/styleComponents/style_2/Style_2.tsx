import * as React from 'react'
import styles from './style_2.module.styl'
import { Link } from 'react-router-dom'
import { UrlToParams } from 'common/js/url'

interface Style_2Props {
  data: any
}

const Style_2: React.StatelessComponent<Style_2Props> = (
  props: Style_2Props
) => {
  const data = props.data
  return (
    <div className={styles.style_2}>
      {data.map((item: any) => (
        <Link
          to={`/plist/info/${UrlToParams(item.url).id}`}
          key={item.id}
          className={styles.box}
        >
          <img className={styles.img} src={item.images} />
          <div className={styles.right}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.content}>{item.content}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Style_2
