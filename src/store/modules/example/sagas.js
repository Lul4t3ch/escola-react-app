import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      toast.success('Requisição foi feita com sucesso!');
    }, 2000);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch (error) {
    toast.error('Requisição falhou!');
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTÃO_CLICADO_REQUEST, exampleRequest)]);
