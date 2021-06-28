/*
  Este arquivo contem as seguintes responsabilidades:
  -Actions são ações que serão enviadas do seu component
   para acionar os Reducers.
   Ele serve apenas para informar qual função deverá rodar
   e qual é o dado que ela vai usar como parâmetro;
*/

import { TYPES } from './types';

const { SET_USER } = TYPES;

export function addUser(user) {
  return {
    type: SET_USER,
    payload: user
  }
}
