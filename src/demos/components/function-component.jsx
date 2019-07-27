import React, { Component, PureComponent } from 'react';

//函数式组件没有自身的状态，相同的props输入必然会获得完全相同的组件展示。不需要关心组件的一些生命周期函数和渲染的钩子更简洁。
const Hello = ({name}) => {
  return <p>您好，我是{name}</p>
}

class FuncComp extends PureComponent {
  render() {
    return <Hello name="James9527"></Hello>
  }
}

export default FuncComp;