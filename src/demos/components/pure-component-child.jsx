import React, { Component, PureComponent } from 'react';

/**
 *  一、父组件修改数组（或对象），且继承自PureComponent的情况：
 * 1、子组件无论继承自PureComponent 还是 Component，父组件执行setState后，子组件都接收不到props参数值，因为父组件不重新渲染。
 * 二、父组件修改数组（或对象），且继承自Component的情况：
 * 1、当子组件继承自PureComponent时，父组件执行setState后，子组件接收不到props参数值，因为子组件不重新渲染。
 * 2、当子组件也继承自Component时，父组件执行setState后，子组件可接收到props参数值，因为子组件重新渲染。
 * 结论：数组和对象等引用类型，则要引用不同，才会渲染。
 * 参考链接：https://www.jianshu.com/p/c41bbbc20e65
 */
export class ChildComponent extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log('子组件componentWillMount')
  }

  componentDidMount() {
    console.log('子组件componentDidMount')
  }

  componentWillUpdate() {
    console.log('子组件componentWillUpdate:::')
  }

  componentDidUpdate() {
    console.log('子组件componentDidUpdate:::')
  }
  
  render() {
    let { arr } = this.props;
    // 当子组件继承自PureComponent时，无论父组件继承PureComponent 还是Component，render首次可输出值，父组件setState后接收不到最新值
    console.log('arr:::', arr)
    return (
      <div>
        子组件PureComponent：{JSON.stringify(arr)}
      </div>
    )
  }
}