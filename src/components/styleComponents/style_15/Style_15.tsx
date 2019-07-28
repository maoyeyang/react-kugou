import * as React from 'react'
import styles from './style_15.module.styl'
import { Link } from 'react-router-dom'
import { UrlToParams } from 'common/js/url'

interface Style_15Props {
  data: any
}

const Style_15: React.StatelessComponent<Style_15Props> = (
  props: Style_15Props
) => {
  const data = props.data
  return (
    <div className={styles.style_15}>
      {data.map((item: any) => (
        <Link
          to={`/rank/info/${UrlToParams(item.url).rankid}`}
          key={item.id}
          className={styles.box}
        >
          <div className={styles.left}>
            <img className={styles.img} src={item.images} />
            <i className={styles.icon} />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>{item.name}</div>
            {item.rank_info.map((item1: any) => (
              <div className={styles.text} key={item1.hash}>
                {item1.filename}
              </div>
            ))}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Style_15
