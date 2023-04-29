import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { reducer } from '../store/reducer';
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
//-------------REDUX-----------------------//
const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);

//---------------TOOLKIT-------------------//

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, reducer);
// const persistor = persistStore(store);
// export const store = configureStore({reducer: persistedReducer})