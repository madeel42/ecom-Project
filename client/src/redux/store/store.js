import { createStore, applyMiddleware,compose } from "redux";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import allReducer from "../reducers/rootReducers";
const persistConfig = {
  key: "root",
  storage,
};
const middleWare = [thunk];
const persistedReducer = persistReducer(persistConfig, allReducer);

if(process.env.NODE_ENV === 'production') {
 var store = createStore(persistedReducer, compose(
      applyMiddleware(...middleWare)
  ));
} else {
 var store = createStore(persistedReducer, compose(
      applyMiddleware(...middleWare),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));
}
// let store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(...middleWare))
// );
// let store = createStore(
//     persistedReducer,
//   compose(
//     applyMiddleware(...middleWare),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );
window.store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
