import { createStore } from 'redux';
import sweaters from './reducers/sweaters'

const store = createStore(sweaters)

window.store = store;

export default store;