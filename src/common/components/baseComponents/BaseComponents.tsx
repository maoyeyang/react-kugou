import React from 'react'
import { is } from 'immutable'

const options = ['history', 'location', 'match']

class BaseComponent extends React.Component {
  shouldComponentUpdate(nextProps: any, nextState: any) {
    const thisProps: any = this.props || {}
    const thisState: any = this.state || {}
    nextState = nextState || {}
    nextProps = nextProps || {}

    if (
      Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length
    ) {
      console.log(111)
      return true
    }

    for (const key in nextProps) {
      if (options.some(item => key === item)) {
        continue
      }
      if (!is(thisProps[key], nextProps[key])) {
        return true
      }
    }

    for (const key in nextState) {
      if (!is(thisState[key], nextState[key])) {
        console.log(333)
        return true
      }
    }
    return false
  }
}

export default BaseComponent
