/*
  Este arquivo contem as seguintes responsabilidades:
  -Juntar os reducers criados em unico arquivo;
  -Disponibilizar ele globalmente na aplicação;
  -Caso seja contextAPI ele juntará os contextos em volta das páginas ou rotas no arquivo
   que você deseja que ele esteja acessível, por padrão é o App.js que englobará todos os contextos;
  -No caso do redux ele terá um único componente chama Provider que recebe por propriedade store;
  -Dentro dessa propriedade store você conseguirá ter acesso a todos estados da aplicação,
   usando cada um com base na sua necessidade
*/
import { combineReducers } from "redux";
import users from './users/reducer';

export default combineReducers({
  users,
});
