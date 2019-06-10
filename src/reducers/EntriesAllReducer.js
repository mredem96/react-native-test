import { REQUEST_ENTRIES_ALL, GET_ENTRIES_ALL_FAILURE, GET_ENTRIES_ALL_SUCCESS } from "../actions/types";

const initialState = {
	data: null,
	error: "",
	loading: false
};

const reducerEntriesAll = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_ENTRIES_ALL:
			return {
				...state,
				loading: true
			};
		case GET_ENTRIES_ALL_SUCCESS:
			return {
				...state,
				loading: false,
				error: "",
				data: action.payload
			};
		case GET_ENTRIES_ALL_FAILURE:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
};

export default reducerEntriesAll;
