import React from 'react'
import ReactDOM from 'react-dom'
import Toast from './toast'
import './toast.styl'

type noticeType = {
  type: string
  content: string
  duration: number
  onClose: Function
}
type notificationType = {
  addNotice: Function
  destroy: Function
}

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const notification: any = ReactDOM.render(<Toast />, div)
  return {
    addNotice(notice: noticeType) {
      return notification.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

let notification: notificationType
const notice = (
  type: string,
  content: string,
  duration: number = 2000,
  onClose: Function
) => {
  if (!notification) notification = createNotification()
  return notification.addNotice({ type, content, duration, onClose })
}

export default {
  info(content: string, duration: number, onClose: Function) {
    return notice('info', content, duration, onClose)
  },
  success(content: string = '操作成功', duration: number, onClose: Function) {
    return notice('success', content, duration, onClose)
  },
  error(content: string, duration: number, onClose: Function) {
    return notice('error', content, duration, onClose)
  },
  loading(
    content: string = '加载中...',
    duration: number = 0,
    onClose: Function
  ) {
    return notice('loading', content, duration, onClose)
  }
}
