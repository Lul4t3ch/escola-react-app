import * as types from '../types';

export function clicaBotaoRequest() {
  return {
    type: types.BOTÃO_CLICADO_REQUEST,
  };
}

export function clicaBotaoSuccess() {
  return {
    type: types.BOTÃO_CLICADO_SUCCESS,
  };
}

export function clicaBotaoFailure() {
  return {
    type: types.BOTÃO_CLICADO_FAILURE,
  };
}
