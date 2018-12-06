import { combineReducers } from "redux"
import fetchSeriesReducer from './fetchSeriesReducer'

const seriesListApp = combineReducers({
  series: fetchSeriesReducer
})

export default seriesListApp