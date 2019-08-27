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
          <li>
            <Link to='/memo-component'>memo组件</Link>
          </li>
          <li>
            <Link to='/context-component'>context组件</Link>
          </li>
          <li>
            <Link to='/ref-component'>createRef</Link>
          </li>
          <li>
            <Link to='/fiber-component'>Fiber组件</Link>
          </li>
          <li>
            <Link to='/hooks-component'>Hooks典型应用</Link>
          </li>
          <li>
            <Link to='/hooks-for-ref'>Hooks结合Ref</Link>
          </li>
          <li>
            <Link to='/hooks-for-memo'>Hooks结合Memo</Link>
          </li>
          <li>
            <Link to='/hooks-for-fetch'>Hooks结合Fetch</Link>
          </li>
          <li>
            <Link to='/hooks-for-context'>Hooks结合Context</Link>
          </li>
        </ul>
        <div>{ routes }</div>
      </div>
    );
  }
}

export default App;
