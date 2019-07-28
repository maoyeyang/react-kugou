import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Carousel from 'common/components/carousel/Carousel'
import styles from './sliderImg.module.styl'

type SliderImgModel = {
  [propName: string]: any
}

class SliderImg extends React.PureComponent<SliderImgModel> {
  public render() {
    const banner = this.props.banner || []
    return (
      <div className={styles.sliderWrapper}>
        {!!banner.length && (
          <Carousel>
            <div>
              <Link to="/area/101">
                <img src={require('../../assests/images/banner.jpg')} />
              </Link>
            </div>
            {banner.map((item: any, index: number) => (
              <div key={index}>
                <Link
                  to={
                    item.extra.tourl.indexOf('/yueku/category') !== -1
                      ? `/area/${item.extra.tourl.split('=')[1]}`
                      : `/plist/info/${item.extra.tourl.split('/').pop()}`
                  }
                >
                  <img src={item.imgurl} />
                </Link>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    )
  }
}

const mapState = (state: any) => ({
  banner:
    state.getIn(['newSong', 'banner']) &&
    state.getIn(['newSong', 'banner']).toJS()
})

export default connect(
  mapState,
  null
)(SliderImg)
