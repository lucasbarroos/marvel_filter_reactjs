import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';

// import Auth from '~/services/Auth';
import api from '~/services/api';

import AuthActions from '../ducks/auth';

export function* SignIn({ email, password }) {
  try {
    const result = yield call(api.post, '/sessions', { email, password });
    localStorage.setItem('@VLounge:token', result.data.token);
    yield put(AuthActions.signInSuccess(result.data.token));
    yield put(push('/'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu email ou senha',
      })
    );
  }
}
