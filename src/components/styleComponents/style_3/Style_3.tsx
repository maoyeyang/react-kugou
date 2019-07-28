import * as React from 'react'
import styles from './style_3.module.styl'
import { Link } from 'react-router-dom'
// import { UrlToParams } from 'common/js/url'

interface Style_3Props {
  data: any
}

const Style_3: React.StatelessComponent<Style_3Props> = (
  props: Style_3Props
) => {
  const data = props.data
  return (
    <div className={styles.style_3}>
      {data.map((item: any) => (
        <Link to={`#`} key={item.id} className={styles.box} replace={true}>
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

export default Style_3
