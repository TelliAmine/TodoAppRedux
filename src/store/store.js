import {createStore, combineReducers} from 'redux';
import changeitem from '../reducers/reducerAdd'
import deleteitem from '../reducers/reducerdelete'

const store = createStore(changeitem)

export default store
