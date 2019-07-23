import React from 'react'
import BScroll from 'better-scroll'

interface scrollProps {
  children: any
  scrollStyle: any
}

interface scrollState {
  click: boolean
  probeType: number
}

export default class Scroll extends React.Component<scrollProps, scrollState> {
  wrapper: any
  wrapperBs: any
  constructor(props: scrollProps) {
    super(props)
    this.wrapper = React.createRef()
    this.wrapperBs = null
    this.state = {
      click: true,
      probeType: 1
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  }

  _initScroll() {
    if (!this.wrapper.current) {
      return
    }
    this.wrapperBs = new BScroll(this.wrapper.current, {
      probeType: this.state.probeType,
      click: this.state.click
    })
  }
  refresh() {
    this.wrapperBs && this.wrapperBs.refresh()
  }
  render() {
    return (
      <div ref={this.wrapper} className={this.props.scrollStyle}>
        {this.props.children}
      </div>
    )
  }
}
