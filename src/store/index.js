import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "shopcartCart",
  storage,
  whitelist: ["cart"]
}

const persistedReducer = persistReducer(config, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk))

export default {
  store,
  persistor: persistStore(store)
}
