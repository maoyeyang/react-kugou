import React from 'react'
import { is } from 'immutable'

const options = ['history', 'location', 'match']

class BaseComponent extends React.Component<any, any> {
  shouldComponentUpdate(nextProps: any, nextState: any) {
    const thisProps: any = this.props || {}
    const thisState: any = this.state || {}
    nextState = nextState || {}
    nextProps = nextProps || {}

    if (
      Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length
    ) {
      return true
    }

    for (const key in nextProps) {
      if (options.some(item => key === item)) {
        // console.log(111)
        continue
      }
      if (!is(thisProps[key], nextProps[key])) {
        // console.log(222)
        return true
      }
    }

    for (const key in nextState) {
      if (!is(thisState[key], nextState[key])) {
        // console.log(333)
        return true
      }
    }
    return false
  }
}

export default BaseComponent
