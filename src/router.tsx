import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import QuestionOne from './Pages/QuestionOne';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/questionOne" component={QuestionOne} />

      </Switch>
    </BrowserRouter>


  );
}

export default Router;