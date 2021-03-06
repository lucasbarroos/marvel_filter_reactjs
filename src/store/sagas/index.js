import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { SignIn } from './auth';

export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.SIGN_IN_REQUEST, SignIn)]);
}
