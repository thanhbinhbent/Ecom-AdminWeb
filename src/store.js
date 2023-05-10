import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './redux/reducers/authReducer'

const rootReducer = combineReducers({
  user: authReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
