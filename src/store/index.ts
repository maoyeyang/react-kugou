import { Store, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { IStoreModel } from '../model'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

const store = createStore(
  reducer,
  composeWithDevTools({})(applyMiddleware(thunk))
) as Store<IStoreModel>

export default store
