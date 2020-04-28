import { createStore } from 'redux';

import rootReducer from './modules/rootRecucer';

const store = createStore(rootReducer);

export default store;
