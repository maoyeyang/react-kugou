import React, { Component } from 'react'

type noticeType = {
  type: string
  content: string
  duration: number
  onClose: Function
  key: string
}
type iconType = {
  [info: string]: string
}

type PropsType = {}
type StateType = {
  notices: noticeType[]
}

class ToastBox extends Component<PropsType, StateType> {
  transitionTime: number
  constructor(props: any) {
    super(props)
    this.transitionTime = 300
    this.state = { notices: [] }
    this.removeNotice = this.removeNotice.bind(this)
  }

  getNoticeKey() {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  addNotice(notice: noticeType) {
    const { notices } = this.state
    notice.key = this.getNoticeKey()

    // notices.push(notice);//展示所有的提示
    notices[0] = notice //仅展示最后一个提示

    this.setState({ notices })
    if (notice.duration > 0) {
      setTimeout(() => {
        this.removeNotice(notice.key)
      }, notice.duration)
    }
    return () => {
      this.removeNotice(notice.key)
    }
  }

  removeNotice(key: string) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter(notice => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
          return false
        }
        return true
      })
    })
  }

  render() {
    const { notices } = this.state
    const icons: iconType = {
      info: 'toast_info',
      success: 'toast_success',
      error: 'toast_error',
      loading: 'toast_loading'
    }
    return (
      <div className="toast">
        {notices.map((notice: noticeType) => (
          <div key={notice.key}>
            {notice.type === 'loading' && <div className="toast_bg" />}
            <div className="toast_box">
              <div className={`toast_icon ${icons[notice.type]}`} />
              <div className="toast_text">{notice.content}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ToastBox
