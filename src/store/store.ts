import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from './reducers/CategorySlice';

const rootReducer = combineReducers({
  // [categoryApi.reducerPath]: categoryApi.reducer,
  categoryReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoryApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore['dispatch'];