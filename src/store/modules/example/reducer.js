import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case types.BOTÃO_CLICADO_SUCCESS: {
      console.log('Deu certo');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTÃO_CLICADO_REQUEST: {
      console.log('Estou fazendo a sua requisição!');
      return state;
    }
    case types.BOTÃO_CLICADO_FAILURE: {
      console.log('Algo inesperado aconteceu!');
      return state;
    }
    default:
      return state;
  }
};
