import { all, put, takeLatest } from "redux-saga/effects";
import ActionTypes from "../types";

export function* login(payload) {
  try {
    // const response = yield call(APICaller, 'endpoint', 'method', {});
    yield put({
      // call some action
    });
  } catch (err) {
    yield put({
      // call some action
    });
  }
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.LOGIN, login),
  ]);
}
