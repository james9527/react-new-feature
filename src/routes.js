import React from 'react';
import {
  Route
} from 'react-router-dom';

import ClassComponent from './demos/components/class-component';
// const classComponent = React.lazy(() => import('./demos/components/class-component'));
import PureComponent from './demos/components/pure-component';
import FuncComponent from './demos/components/function-component';
// import HigherComponent from './demos/components/higher-component-simple';
import HigherComponent from './demos/components/higher-component';
import PortalComponent from './demos/components/portal-component';
import SuspenseComponent from './demos/suspense/index';
import MemoComponent from './demos/memo/index';
import ContextComponent from './demos/context/index';

export default (
  // <> 等价于文档片段 React.Fragment
  <>
    <Route path = '/class-component' component = {ClassComponent}/>
    <Route path = '/pure-component' component = {PureComponent}/>
    <Route path = '/func-component' component = {FuncComponent}/>
    <Route path = '/higher-component' component = {HigherComponent}/>
    <Route path = '/portal-component' component = {PortalComponent}/>
    <Route path = '/suspense-component' component = {SuspenseComponent}/>
    <Route path = '/memo-component' component = {MemoComponent}/>
    <Route path = '/context-component' component = {ContextComponent}/>
  </>
)

