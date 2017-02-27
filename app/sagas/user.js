import { call, put, takeEvery } from 'redux-saga/effects'
import browserHistory from 'react-router/lib/browserHistory'
import { loginUser, logoutUser } from 'App/actions/user'
import * as Api from 'App/services/user'
import * as types from 'App/actions/types'

export function* loginUserRuquest(action) {
  try {
    const user = yield call(Api.loginUser, action.username, action.password)
    yield put(loginUser(user))
    yield call(browserHistory.push, '/')
  } catch (e) {
    //
  }
}

export function* logoutUserRequest() {
  yield call(Api.logoutUser)
  yield put(logoutUser())
}

export function* watchLoginUserRequest() {
  yield takeEvery(types.LOGIN_USER_REQUEST, loginUserRuquest)
}

export function* watchLogoutUserRequest() {
  yield takeEvery(types.LOGOUT_USER_REQUEST, logoutUserRequest)
}
