import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
	key: "root",
	storage,
	whitelist: []
};
const reducers = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk, logger];
// if (__DEV__) react native check dev

const store = createStore(reducers, undefined, compose(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

export { store, persistor };
