import {createStore,combineReducers } from 'redux';
import inputreducer from './reducer/inputreducer'
import mainreducer from './reducer/mainreducer'

const store =createStore(combineReducers({
  input:inputreducer,
  main:mainreducer
}))

export default store;