Uso simples de Redux


createStore: Função responsável por criar a store em si, é essa função que deixa todos os estados globais.

combineReducers: Cria um objeto com todos os estados e faz a ligação com os reducers para que a store possa guarda-los.

applyMiddleware: Permite que os middlewares interceptem as actions antes de chegar ao reducer para fazer toda a lógica.
