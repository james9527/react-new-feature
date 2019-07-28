import React from 'react'; // 必须引入，否则报错：'React' must be in scope when using JSX
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

export default (
  <>
    <Route path = '/class-component' component = {ClassComponent}/>
    <Route path = '/pure-component' component = {PureComponent}/>
    <Route path = '/func-component' component = {FuncComponent}/>
    <Route path = '/higher-component' component = {HigherComponent}/>
    <Route path = '/portal-component' component = {PortalComponent}/>
    <Route path = '/suspense-component' component = {SuspenseComponent}/>
  </>
)

