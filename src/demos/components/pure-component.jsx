import React, { Component, PureComponent } from 'react';
import { ChildComponent } from './pure-component-child' ;

/**
 * PureComponent Vs Component：PureComponent通过prop和state的浅比较来实现shouldComponentUpdate，某些情况下可以用PureComponent提升性能。
 * 所谓浅比较(shallowEqual)，即react源码中的一个函数，然后根据下面的方法进行是不是PureComponent的判断，帮我们做了本来应该我们在shouldComponentUpdate中做的事情。
 * if (this._compositeType === CompositeTypes.PureClass) { shouldUpdate = !shallowEqual(prevProps, nextProps) || ! shallowEqual(inst.state, nextState);}.这里判断了state有没有发生变化（prop同理），从而决定要不要重新渲染。
 */
export default class CounterButton extends Component {
  constructor(props) {
    console.log('constructor:::');
    super(props);
    this.state = { 
      count: 1,
      isShow: false,
      arr: [1]
    };
  }

  componentWillMount() {
    console.log('父组件pure-componentWillMount:::')
  }

  componentDidMount() {
    console.log('父组件pure-componentDidMount:::')
  }

  componentWillUpdate() {
    console.log('父组件pure-componentWillUpdate:::')
  }

  componentDidUpdate() {
    console.log('父组件pure-componentDidUpdate:::')
  }

  // 使用此生命周期提示：shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate:::')
  // }
  
  handleIncrease = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow
    }, () => {
      console.log('isShow:::', this.state.isShow)
    })
  }

  handleModifyArr = () => {
    let { arr } = this.state;
    arr.push(2);
    this.setState({
      arr
    }, () => console.log(this.state.arr))
    // [1, 2]
    // [1, 2, 2]
    // [1, 2, 2, 2]
  }

  handleModifyArr2 = () => {
    let { arr } = this.state;
    this.setState({
      arr: [...arr, 2]
    })
  }

  // 情况一：改变基本数据类型-- Number
  // render() {
  //   console.log('render:::')
  //   return (
  //     <button className='btn btn-info' onClick={ this.handleIncrease }>
  //       Count：{this.state.count}
  //     </button>
  //   )
  // }
  
  // 情况二：改变基本数据类型--布尔值
  // render() {
  //   console.log('render:::')
  //   return (
  //     <button className='btn btn-info' onClick={this.handleShow}>
  //       isShow：{String(this.state.isShow)}
  //     </button>
  //   )
  // }

  // 情况三：改变引用类型--数组
  // render() {
  //   console.log('render:::')
  //   return (
  //     <button className='btn btn-info' onClick={this.handleModifyArr}>
  //       Count：{JSON.stringify(this.state.arr)}
  //     </button>
  //   )
  // }

  /**
   * 情况四：利用扩展运算符产生新数组（也适用于对象）
   * 用扩展运算符产生新数组，使this.state.arr的引用发生了变化，每次点击按钮都会输出render，界面也会变化，不管该组件是继承自Component还是PureComponent的
   */
  // render() {
  //   return (
  //     <div>
  //       <button onClick={this.handleModifyArr2}> 点击 </button>
  //       <div>
  //         {
  //           this.state.arr.map((v, k) => {
  //             return [k, v];
  //           })
  //         }
  //       </div>
  //     </div>
  //   )
  // }

  /**
   * 情况五：有子组件，且子组件继承自PureComponent或Component
   */
  render() {
    return (
      <div>
        <button onClick={this.handleModifyArr}> 父组件点击 </button>
        {
          ChildComponent ? <ChildComponent arr={this.state.arr}/> : null
        }
      </div>
    )
  }
}