import React from 'react'; // 必须引入，否则报错：'React' must be in scope when using JSX
import {
  Route
} from 'react-router-dom';

import ClassComponent from './demos/components/class-component';
// const classComponent = React.lazy(() => import('./demos/components/class-component'));
import PureComponent from './demos/components/pure-component';

export default (
  <>
    <Route path = '/class-component' component = {ClassComponent}/>
    <Route path = '/pure-component' component = {PureComponent}/>
  </>
)

