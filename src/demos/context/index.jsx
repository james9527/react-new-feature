//Context 主要是解决props向多层嵌套的子组件传递的问题，原理是定义了一个全局对象
import React from 'react';
import PropTypes from 'prop-types';

// createContext类似于createStore，提供了Provider
const { Provider, Consumer } = React.createContext('default');

class Person extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'James9527',
  //     newContext: '理解Context'
  //   }
  // }
  /**
   * 可不加constructor
   */
  state = {
    name: 'James9527',
    newContext: '我是Context'
  }

  render() {
    return(
      <>
        <div>
          <label className="text-warning">父节点=> name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label className="text-warning">父节点=> newContext:</label>
          <input
            type="text"
            value={this.state.newContext}
            onChange={e => this.setState({ newContext: e.target.value })}
          />
        </div>
        <Provider value={{ name: 'ThreeTree', newContext: this.state.newContext }}>
          { this.props.children }
        </Provider>
      </>
    )
  }
}

class Student extends React.Component {
  static contextTypes = {
    name: PropTypes.string
  } 

  render() {
    return (
      <Consumer>
        {value => <p className="text-info">子节点=> name: {value.name}</p>}
      </Consumer>
    );
  }
}

function Teacher(props, context) {
  return (
    <Consumer>
      {value => (
        <p className="text-warning">子节点=> newContext: {value.newContext}</p>
      )}
    </Consumer>
  );
}

Teacher.contextTypes = {
  value: PropTypes.string
}

export default () => (
  <Person>
    <Teacher/>
    <Student/>
  </Person>
)