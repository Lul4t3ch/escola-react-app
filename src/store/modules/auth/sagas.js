import { all, takeLatest } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
// import * as actions from './actions';
import * as types from '../types';

// eslint-disable-next-line require-yield
function* loginRequest({ payload }) {
  console.log('Saga: ', payload);
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
