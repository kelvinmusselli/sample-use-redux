import React from 'react';

import { useSelector } from 'react-redux';

function Welcome() {

  const { user } = useSelector(state => state.users);
  // o state dentro de useSelector retorna todos os states que foram
  // criados no redux, tendo lá o mesmo exemplo se tivesse stocks
  // com isso assim como useContext que vc retorna os valores , vc consegue
  // trazer os dados que foram setados em algum estado;

  return <h1>{ user }</h1>
}

export default Welcome;
