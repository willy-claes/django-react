import { fork } from 'redux-saga/effects'
import { watchLoginUserRequest, watchLogoutUserRequest } from './user'

export default function* rootSaga() {
  yield [
    fork(watchLoginUserRequest),
    fork(watchLogoutUserRequest),
  ]
}
