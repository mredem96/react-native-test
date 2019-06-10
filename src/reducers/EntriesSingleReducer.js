import { REQUEST_ENTRY_SINGLE, GET_ENTRY_SINGLE_SUCCESS, GET_ENTRY_SINGLE_FAILURE } from "../actions/types";

const initialState = {
	data: null,
	error: "",
	loading: false
};

const reducerEntrySingle = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_ENTRY_SINGLE:
			return {
				...state,
				loading: true
			};
		case GET_ENTRY_SINGLE_SUCCESS:
			return {
				...state,
				loading: false,
				error: "",
				data: action.payload
			};
		case GET_ENTRY_SINGLE_FAILURE:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
};

export default reducerEntrySingle;
