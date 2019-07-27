import React, { Component } from 'react';
import ReactDom from 'react-dom';

//组件插槽
const portalElm = document.createElement('div');
portalElm.className = "align-center"
document.body.appendChild(portalElm)

class App extends Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary">动态展示Portal组件</button>
        {
          this.state.show ? 
            <div>{ReactDom.createPortal(<span>假装是模态弹窗组件</span>, portalElm)}</div> 
          : null
        }
      </div>
    )
  }
} 

export default App;