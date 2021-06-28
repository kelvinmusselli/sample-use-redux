//Arquivo principal do redux que é responsável para pegar tudo que é feito anteriormente
// e enviar para o Provider que fica no App.js e no AppJs ele disponibilzia o redux para todas
// as paginas e acessar quando necessário;

import { createStore, applyMiddleware } from 'redux';
// createStore é o responsável para criar a Store
// applyMiddleware é responsável para deixar o redux asincrono mas com isso
// ele dependen da instalação do redux thunk; com isso ele deve englobar o thunk dentro applyMiddleware

import thunk from 'redux-thunk';
//lib para deixar o redux async await

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules/rootReducers';
// todos os reducers criados que servem para fazer as conexoes com o react e ser acessivel

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
