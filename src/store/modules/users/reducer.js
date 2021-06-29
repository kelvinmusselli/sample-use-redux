/*
  Aqui vaicolocar a lógica que você precisa nos dados antes de salva-los na Store.
  pegar informações, enviar, tratar, consumir apis, tratar dados e etc.

  >> LOCAL DE TODAS AS LOGICAS ANTES DE MANDAR PARA OS STATES CRIADOS <<
*/


import { TYPES } from './types';
import { INITIAL_STATE } from './states';

const { GET_USER, SET_USER } = TYPES;

const users = (state = INITIAL_STATE, action) => {

  switch(action.type){
    case GET_USER: {
      return { ...state }
    }
    case SET_USER: {
      return { user: action.payload }
    }
    default: {
      return state;
    }
  }

};

export default users
