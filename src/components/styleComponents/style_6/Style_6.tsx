import * as React from 'react'
import styles from './style_6.module.styl'
import { Link } from 'react-router-dom'
import { UrlToParams } from 'common/js/url'

interface Style_6Props {
  data: any
}

const Style_6: React.StatelessComponent<Style_6Props> = (
  props: Style_6Props
) => {
  const data = props.data
  return (
    <div className={styles.style_6}>
      {data.map((item: any) => (
        <Link
          to={`/singer/info/${UrlToParams(item.url).singerid}`}
          key={item.id}
          className={styles.box}
        >
          <img className={styles.img} src={item.images} />
          <p className={styles.songname}>{item.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default Style_6
