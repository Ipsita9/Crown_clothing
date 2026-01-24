// import { compose, createStore, applyMiddleware } from "redux";
import{configureStore} from  "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
 import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
 import { loggerMiddleware } from "./middleware/logger";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./root-saga";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
 };

// const sagaMiddleware = createSagaMiddleware();

 const persistedReducer = persistReducer(
  persistConfig,
   rootReducer
 );

// const middlewares = [sagaMiddleware, loggerMiddleware];

// const composeEnhancer =
//   import.meta.env.MODE !== "production" &&
//   typeof window !== "undefined" &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : compose;

// const composedEnhancers =
//   composeEnhancer(applyMiddleware(...middlewares));

//  export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(loggerMiddleware),
// });
export const store = configureStore({
  reducer: persistedReducer, // 👈 THIS is the fix
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist
    }).concat(loggerMiddleware),
});

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
