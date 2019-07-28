import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import GoBack from 'components/goBack/GoBack'
import * as actions from 'store/actions'
import Scroll from 'common/components/scroll/Scroll'
import SongList from 'components/songList/SongList'
import styles from './search.module.styl'

interface SearchProps {
  play: boolean
  hot: any
  result: any
  getHotData: Function
  getSearchResult: Function
}
interface SearchState {
  showHot: boolean
  keyword: string
}

class Search extends React.PureComponent<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props)
    this.state = {
      showHot: true,
      keyword: ''
    }
  }
  public render() {
    const hot = this.props.hot.toJS()
    const result = this.props.result.toJS()
    return (
      <div
        className={styles.search + ' ' + (this.props.play ? styles.play : '')}
      >
        <GoBack text={'搜索'} styleType={true} />
        <Scroll scrollStyle={styles.scrollStyle}>
          <div>
            <div className={styles.searchBox}>
              <div className={styles.searchForm}>
                <i className={styles.searchIcon} />
                <input
                  className={styles.searchInput}
                  placeholder="歌手/歌名/拼音"
                  value={this.state.keyword}
                  onChange={e => {
                    this.setState({
                      keyword: e.target.value
                    })
                  }}
                />
                <div
                  className={styles.searchButton}
                  onClick={() => {
                    this.search(this.state.keyword)
                  }}
                >
                  搜索
                </div>
              </div>
            </div>
            {this.state.showHot && (
              <div className={styles.hot}>
                <div className={styles.hotTitle}>最近热门</div>
                {!!hot.length &&
                  hot.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={styles.hotItem}
                      onClick={() => {
                        this.search(item.keyword)
                      }}
                    >
                      {item.keyword}
                    </div>
                  ))}
              </div>
            )}
            {!this.state.showHot && (
              <div className={styles.result}>
                <div className={styles.resultTitle}>
                  <div>共有{result.total}条数据</div>
                  <div
                    onClick={() => {
                      this.setState({
                        showHot: true,
                        keyword: ''
                      })
                    }}
                  >
                    清空
                  </div>
                </div>
                <SongList styleType={1} data={this.props.result.toJS().list} />
              </div>
            )}
          </div>
        </Scroll>
      </div>
    )
  }
  search(text: string) {
    this.props.getSearchResult(text)
    this.state.showHot &&
      this.setState({
        showHot: false,
        keyword: text
      })
  }
  public async componentDidMount() {
    if (this.props.result.toJS().keyword) {
      this.setState({
        keyword: this.props.result.toJS().keyword,
        showHot: false
      })
    }
    this.props.getHotData(this.props.hot)
  }
}
const mapState = (state: any) => {
  return {
    play:
      JSON.stringify(state.getIn(['global', 'player', 'playInfo'])) !== '{}',
    hot: state.getIn(['search', 'hot']),
    result: state.getIn(['search', 'result'])
  }
}
const mapDispath = (dispatch: Dispatch) => {
  return {
    getHotData: (payload: any) => actions.getHotData(payload)(dispatch),
    getSearchResult: (payload: any) =>
      actions.getSearchResult(payload)(dispatch)
  }
}

export default connect(
  mapState,
  mapDispath
)(Search)
