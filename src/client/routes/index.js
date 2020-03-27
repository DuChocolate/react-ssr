import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import routes from './route-config';
import Layout from '../pages/Layout';
const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((item, index) => (
          <Route exact key={item.path} {...item}></Route>
        ))}
      </Switch>
    </Layout>
  );
}
export default App;
