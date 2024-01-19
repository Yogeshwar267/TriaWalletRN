import { all, call, delay, fork, spawn } from "redux-saga/effects";
import AuthenticationSaga from "./authentication";

function* rootSaga() {

  const sagas = [
    AuthenticationSaga,
  ];
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
          } catch (e) {
            console.log(e, 'saga error in ./src/rootSaga');
          }
        }
      })
    )
  );
}
export default rootSaga;
