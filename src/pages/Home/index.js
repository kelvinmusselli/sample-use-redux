import React from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addUser } from '../../store/modules/users/actions';

function Home() {

  const history = useHistory();
  const dispatch =  useDispatch();
  // Quando vc precisa fazer alguma alteração no estado
  // adicionar um dados novo, um cadastro e consumir uma action
  // vc deve chamar de redux o useDispatch e tbm a action necessária
  // com isso vc chama como exemplo abaixo
  // caso fosse contextAPI vc só precisa do useContext e de dentro dele
  // chamar o contexto necessário responsável a acessa que vc necessita

  const [usuario, setUsuario] = React.useState('');

  const handleLogin = () => {
    dispatch(addUser(usuario));
    history.push('/welcome');
  };

  return (
    <>
      <input
        type="text"
        name="usuario"
        value={usuario}
        onChange={ e => setUsuario(e.target.value)}
      />
      <button onClick={() => handleLogin()}>Entrar</button>
    </>
  );
}

export default Home;
