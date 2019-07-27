import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Dispatch } from 'redux'
import GoBack from 'components/goBack/GoBack'
import * as actions from 'store/actions'
import Scroll from 'common/components/scroll/Scroll'
import styles from './search.module.styl'

interface SearchProps {
  play: boolean
  data: any
  getHotData: Function
}

class Search extends React.PureComponent<SearchProps, {}> {
  public render() {
    const data = this.props.data.toJS()
    console.log(data)
    return (
      <div
        className={styles.search + ' ' + (this.props.play ? styles.play : '')}
      >
        <GoBack text={'搜索'} styleType={true} />
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>{111}</div>
        </Scroll>
      </div>
    )
  }
  public async componentDidMount() {
    this.props.getHotData(this.props.data)
  }
}
const mapState = (state: any) => {
  return {
    play:
      JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}',
    data: state.getIn(['search', 'hot'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    getHotData: (payload: any) => actions.getHotData(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(Search)
