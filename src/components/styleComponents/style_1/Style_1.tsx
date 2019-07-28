import * as React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'common/components/carousel/Carousel'
import styles from './style_1.module.styl'
import { UrlToParams } from 'common/js/url'

interface Style_1Props {
  banner: any
}

const Style_1: React.StatelessComponent<Style_1Props> = (
  props: Style_1Props
) => {
  const banner = props.banner || []
  return (
    <div className={styles.sliderWrapper}>
      {!!banner.length && (
        <Carousel>
          {banner.map((item: any, index: number) => (
            <div key={index} className={styles.padding}>
              <Link to={`/plist/info/${UrlToParams(item.url).id}`}>
                <img src={item.images} />
              </Link>
            </div>
          ))}
        </Carousel>
      )}
    </div>
  )
}

export default Style_1
