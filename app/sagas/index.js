import { fork } from 'redux-saga/effects'
import { watchLoginUserRequest, watchLogoutUserRequest } from './user'
import { watchShowMessageRequest } from './messages'

export default function* rootSaga() {
  yield [
    fork(watchLoginUserRequest),
    fork(watchLogoutUserRequest),
    fork(watchShowMessageRequest),
  ]
}
