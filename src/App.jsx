import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import routes from './routes' ;

// render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           </p>
//       </header>
//       <div>{routes}</div>
//     </div>
//   );
// }
class App extends Component {
  render() {
    return (
      <div className= 'App'>
        <ul className= 'nav green'>
          <li>
            <Link to='/class-component'>普通类组件</Link>
          </li>
          <li>
            <Link to='/pure-component'>纯组件</Link>
          </li>
          <li>
            <Link to='/func-component'>函数式组件</Link>
          </li>
          <li>
            <Link to='/higher-component'>高阶组件</Link>
          </li>
          <li>
            <Link to='/portal-component'>组件插槽(Portal)</Link>
          </li>
          <li>
            <Link to='/suspense-component'>suspense组件</Link>
          </li>
        </ul>
        <div>{ routes }</div>
      </div>
    );
  }
}

export default App;
