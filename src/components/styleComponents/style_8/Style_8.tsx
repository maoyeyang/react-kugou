import * as React from 'react'
import styles from './style_8.module.styl'
import { Link } from 'react-router-dom'

interface Style_8Props {
  data: any
}

const Style_8: React.StatelessComponent<Style_8Props> = (
  props: Style_8Props
) => {
  const data = props.data
  return (
    <div className={styles.style_8}>
      {data.map((item: any) => (
        <Link to={`/area/${item.url.split('=').pop()}`} key={item.id}>
          <img className={styles.img} src={item.images} />
        </Link>
      ))}
    </div>
  )
}

export default Style_8
