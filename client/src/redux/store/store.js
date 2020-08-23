import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import allReducer from "../reducers/rootReducers";
const persistConfig = {
  key: "root",
  storage,
};
const middleWare = [thunk];
const persistedReducer = persistReducer(persistConfig, allReducer);
let store = createStore(
    persistedReducer,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
window.store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
