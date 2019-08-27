
import React, { unstable_ConcurrentMode as ConcurrentMode, Component } from 'react'
import { flushSync } from 'react-dom'

class Parent extends Component {
  state = {
    async: true,
    num: 1,
    length: 100
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateNum()
    }, 200)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  updateNum() {
    const newNum = this.state.num === 3 ? 0 : this.state.num + 1
    if (this.state.async) {
      this.setState({
        num: newNum,
      })
    } else {
      flushSync(() => {
        this.setState({
          num: newNum,
        })
      })
    }
  }

  render() {
    const children = []

    const { length, num, async } = this.state

    for (let i = 0; i < length; i++) {
      children.push(
        <div className="item" key={i}>
          {num}
        </div>,
      )
    }

    return (
      <div className="main">
        async：
        <input
          type="checkbox"
          checked={async}
          onChange={() => flushSync(() => this.setState({ async: !async }))}
        />
        <div className="wrapper">{children}</div>
      </div>
    )
  }
}


export default () => (
  <ConcurrentMode>
    <Parent />
  </ConcurrentMode>
)
