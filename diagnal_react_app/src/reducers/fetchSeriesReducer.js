import { FETCH_SERIES } from '../actions/constants'

const initialState = {
	seriesList: [],
	title: ''
}

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_SERIES:
			return {
				...state,
				seriesList: state.seriesList.length > 0 ? state.seriesList.concat(action.payload.page['content-items']['content']) : action.payload.page['content-items']['content'],
				title: action.payload.page.title
			}
		default:
			return state
	}
}