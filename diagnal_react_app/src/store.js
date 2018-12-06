import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import seriesListApp  from './reducers'

const initialState = {}
const middleware = [thunk]
const store = createStore(seriesListApp, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// const store = createStore(() => [], {}, applyMiddleware())

export default store