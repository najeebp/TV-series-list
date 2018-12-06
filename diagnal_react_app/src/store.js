import { createStore } from 'redux'
import seriesListApp  from './reducers'

const initialState = {}
const store = createStore(seriesListApp, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store