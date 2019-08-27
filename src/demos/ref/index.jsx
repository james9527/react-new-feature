import React, { Component } from 'react';

export default class RefDemo extends Component {
  constructor() {
    super()
    this.objRef = React.createRef(); // 显示地创建Ref
  }

  componentDidMount() {
    setTimeout(() => {
      this.refs.stringRef.textContent = 'string ref got'
      this.methodRef.textContent = 'method ref got'
      this.objRef.current.textContent = 'obj ref got'
    }, 30)
  }

  render() {
    return (
      <>
        <p className="text-success" ref="stringRef"></p>
        <p ref={ele => (this.methodRef = ele)}></p>
        <p ref={this.objRef}></p>
      </>
    )
  }
}