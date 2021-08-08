import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { RoutePath } from './enums/RoutePath';
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import Score from './pages/score/Score';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path={RoutePath.Home} exact component={Home} />
        <Route path={RoutePath.Game} component={Game} />
        <Route path={RoutePath.Score} component={Score} />
      </Switch>
    </HashRouter>
  );
}

export default App;
