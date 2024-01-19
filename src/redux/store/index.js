import { createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RootReducer from "../reducers";
import RootSaga from "../sagas";
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whiteList: ["common"],
};

/**
 * Persist reducer
 */
const persistedReducer = persistReducer(persistConfig, RootReducer);

/**
 * Create store with persisted reducer
 */
export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(RootSaga);

export const persistor = persistStore(store);
