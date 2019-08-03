import * as React from 'react'
import styles from './style_4.module.styl'
import { Link } from 'react-router-dom'

interface Style_4Props {
  data: any
}

const Style_4: React.StatelessComponent<Style_4Props> = (
  props: Style_4Props
) => {
  const data = props.data
  return (
    <div className={styles.style_4}>
      {data.map((item: any) => (
        <Link to={`#`} key={item.id} replace={true} className={styles.box}>
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

export default Style_4
