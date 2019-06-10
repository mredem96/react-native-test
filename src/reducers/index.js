import { combineReducers } from "redux";
import entriesAllReducer from "./EntriesAllReducer";
import entrySingleReducer from "./EntriesSingleReducer";

export default combineReducers({
	entriesAll: entriesAllReducer,
	entrySingle: entrySingleReducer
});
