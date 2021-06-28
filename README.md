<h3>Uso simples de Redux</h3>


<b>createStore</b>: Função responsável por criar a store em si, é essa função que deixa todos os estados globais.


<b>combineReducers</b>: Cria um objeto com todos os estados e faz a ligação com os reducers para que a store possa guarda-los.


<b>applyMiddleware</b>: Permite que os middlewares interceptem as actions antes de chegar ao reducer para fazer toda a lógica.


<b>useDispatch</b>: outra função, ela é o nosso despachante, em outras palavras, o cavalo do nosso mensageiro, que vai mandar o novo estado já tratado para o reducer pelas actions


<b>useSelector</b>: É uma função que será responsável por acessa um estado global da store. Na linha 13, usamos a descontrução do ES6 para pegar somente o estado do cart dentro da store.


<b>Actions</b>: São ações que serão enviadas do seu component para acionar os Reducers. Ele serve apenas para informar qual função deverá rodar e qual é o dado que ela vai usar como parâmetro!


<b>Reducers</b>: Que faz todo o trabalho e aplica a lógica, qual é a função do Reducer?


<b>States</b>: É o responsável para armazenar os estados criados, modificados e atualizados
