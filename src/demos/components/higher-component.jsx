//高阶组件就是一个没有副作用的纯函数。
import React, { Component } from "react";

//封装高阶组件之前代码
// class Welcome extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           username: ''
//       }
//   }

//   componentWillMount() {
//       let username = localStorage.getItem('username');
//       this.setState({
//           username: username
//       })
//   }

//   render() {
//       return (
//           <div>welcome {this.state.username}</div>
//       )
//   }
// }
// class Goodbye extends Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           username: ''
//       }
//   }

//   componentWillMount() {
//       let username = localStorage.getItem('username');
//       this.setState({
//           username: username
//       })
//   }

//   render() {
//       return (
//           <div>goodbye {this.state.username}</div>
//       )
//   }
// }

//封装高阶组件之后代码
const GreetingComponent = ParamComponent => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        userName: ''
      }
      localStorage.setItem('userName', 'James9527')
    }

    componentWillMount() {
      let name = localStorage.getItem('userName');
      this.setState({
        userName: name
      })
    }

    render() {
      return <ParamComponent name={this.state.userName} />
    }
  }

  return NewComponent;
}

class Hello extends Component {
  render() {
    return <div>Hello, {this.props.name}</div>
  }
}
//  升级为高阶组件
Hello = GreetingComponent(Hello);

class Bye extends Component {
  render() {
    return <div>Bye Bye, {this.props.name}</div>
  }
}
//  升级为高阶组件
Bye = GreetingComponent(Bye);

class Greeting extends Component {
  render() {
    return (
      <>
        <Hello />
        <Bye />
      </>
    )
  }
}

export default Greeting;
