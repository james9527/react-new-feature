import React, { Component } from 'react';

function hello() {
  console.log('🚀我是简单版高阶组件');
}

// 传入一个函数，返回一个新函数
function higher(fn) {
  return () => {
    console.log('111');
    fn();
    console.log('222');
  }
}

const helloRes = higher(hello);
helloRes();

class HigherComp extends React.PureComponent {
  render() {
    return (
      <div>我是高阶组件</div>
    )
  }
}

export default HigherComp;