import { FETCH_SERIES } from './constants'

export const fetchSeries = (payload) => {
	return { type: FETCH_SERIES, payload }
}