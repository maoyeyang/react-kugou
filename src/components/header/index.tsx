import * as React from 'react'
import './index.styl'

const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className="header">
      <a className="logo" title="酷狗音乐" href="#" />
      <span>下载酷狗</span>
      <a className="btn-search" href="#" />
    </div>
  )
}

export default Header
