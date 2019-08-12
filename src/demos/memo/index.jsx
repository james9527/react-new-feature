import React, { memo, Component } from 'react';

function Child({ seconds }) {
  console.log("I am rendering");
  return <div>Memo组件 =》倒计时：{seconds} s</div>;
}

function isEqual(prevProps, nextProps) {
  if (prevProps.seconds === nextProps.seconds) {
    return true;
  } else {
    return false;
  }
}
// const RocketComponent = props => <div>my rocket component. {props.fuel}!</div>;

// 创建一个只在prop改变时发生渲染的版本
// const MemoizedRocketComponent = memo(RocketComponent);
// const memocom = () => {
//   return memo(Child, isEqual);
// };
const DemoComponent = memo(Child, isEqual);

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      second: 10
    }
  }

  componentWillMount() {
    let { second } = this.state;
    console.log('second:::', second);
    if(second > 0) {
      this.timerObj = setInterval(() => {
        this.setState({ second: --second })
      }, 1000);
    }
  }

  componentWillUpdate() {
    let { second } = this.state;
    if (second === 1) clearInterval(this.timerObj);
  }

  componentWillUnmount() {
    clearInterval(this.timerObj);
  }

  render() {
    return <DemoComponent seconds={this.state.second} />;
  }
}
export default Counter;

// function Child({ seconds }) {
//   console.log('I am rendering');
//   return (
//     <div>I am update every {seconds} seconds</div>
//   )
// };
// export default React.memo(Child);