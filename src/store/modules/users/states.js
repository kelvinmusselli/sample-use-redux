/*
  Este arquivo contem as seguintes responsabilidades:
  -Armazenar os estados da aplicação relacionados apenas a users;
  -Caso tivesse outro state(estado) de estoque por exemplo teria uma outra pasta chamada stock
   dentro dela teria um arquivo states também e um estado apenas para o estoque que poderia ser
   "stocks";
  -Com isso os estados estaram acessíveis onde vc chamar para fazer interações, pegar dados,
   receber dados, tratar informações e etc etc...;
*/

export const INITIAL_STATE = {
  user: '', // pode ser um obj, um array, numbers, boolean, etc
};
