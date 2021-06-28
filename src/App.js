import React from 'react';

import { Provider } from 'react-redux'; //Como em contextAPI tem o Provider que prove o envio dos
// contextos para todas as paginas
// o redux nao trabalha diferente mas a diferença que ele utiliza apenas um arquivo para prover tudo

import store from './store';
// o store precisa estar como propriedade no provider

import { Switch, BrowserRouter, Route }  from 'react-router-dom';

import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route  path="/" exact component={Home} />
          <Route  path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
