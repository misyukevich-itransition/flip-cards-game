import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/App.scss';
import { RoutePath } from './enums/RoutePath';
import { Start } from './components/start/Start';
import { Game } from './components/game/Game';
import { Score } from './components/score/Score';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RoutePath.Start} exact component={Start} />
        <Route path={RoutePath.Game} component={Game} />
        <Route path={RoutePath.Score} component={Score} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
