import { Store, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { IStoreModel } from '../model'

const store = createStore(reducer, applyMiddleware(thunk)) as Store<IStoreModel>

export default store
