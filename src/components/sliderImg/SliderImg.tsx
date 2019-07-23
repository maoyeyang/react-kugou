import * as React from 'react'
import { connect } from 'react-redux'
import Carousel from 'common/components/carousel/Carousel'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import styles from './sliderImg.module.styl'

type PathParamsType = {}
type SliderImgModel = RouteComponentProps<PathParamsType> & {
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
              <a href="#">
                <img src={require('../../assests/images/banner.jpg')} />
              </a>
            </div>
            {banner.map((item: any, index: number) => (
              <div key={index}>
                <a href={item.extra.tourl}>
                  <img src={item.imgurl} />
                </a>
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
)(withRouter(SliderImg))
