import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { reducer } from '../store/reducer';

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);
