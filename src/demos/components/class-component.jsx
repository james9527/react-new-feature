import React, { Component } from 'react';

let count = 0;
export default class Result extends Component {
  constructor() {
    super();
    this.state = {
      count: count
    };
  }

  componentWillMount() {
    console.log('class-componentWillMount:::')
    this.setState({
      count: ++count
    });

    this.setState({
      count: ++count
    });

    setTimeout(() => {
      this.setState({
        count: ++count
      });

      this.setState({
        count: ++count
      });
    }, 1000);
  }

  componentDidMount() {
    console.log('class-componentDidMount:::')
    this.button.addEventListener('click', this.onClick.bind(this, '原生浏览器事件'), false);
  }

  onClick(info) {
    console.log(info);

    this.setState({
      count: ++count
    });

    this.setState({
      count: ++count
    });
    // click事件后console的输出结果顺序：原生浏览器事件 -> 5 -> 6 -> React事件 -> 8
    // 原因：由于组件没有卸载，state里的count还保留着最后一次结果，componentDidMount又是在组件装载完后调用，因此在onClick事件后会先输出'原生浏览器事件'，因为js里的click事件跟setTimeout一样都是异步执行的，故依次输出5、6，然后再执行绑定的onClick事件，输出'React事件'，最后由于这时是同一事务，故先后加1之后再批量setState，故最后state里的count值为8.
  }

  render() {
    console.log(this.state.count);
    // componentWillMount后console输出结果顺序：2 -> (隔1s后) -> 3 -> 4
    // 原因：主要是因为react中存在一种叫事务的机制，componentWillMount生命周期之后，虚拟dom就执行render操作，然后执行一个叫batchedUpdates的方法，随后会将其中某类事务添加到队列中，在某一时刻做批量更新操作。由于count是全局变量，setTimeout又属于异步执行的，所以先后输出了3和4
    return (
      <div>
        <button type="button" ref={node => this.button = node} onClick={this.onClick.bind(this, 'React事件')}>生成新计数</button>
        <div>Count : {this.state.count}</div>
      </div>
    );
  }
}