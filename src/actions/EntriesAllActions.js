import { REQUEST_ENTRIES_ALL, GET_ENTRIES_ALL_FAILURE, GET_ENTRIES_ALL_SUCCESS } from "./types";
import { SPACE_ID, ENVIROMENT_ID, ACCESS_TOKEN } from "../constants";
import axios from "axios";

export const getAllEntries = () => dispatch => {
	dispatch({ type: REQUEST_ENTRIES_ALL });

	return axios({
		method: "GET",
		url: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIROMENT_ID}/entries?access_token=${ACCESS_TOKEN}`
	})
		.then(response => {
			console.log(response);
			dispatch({ type: GET_ENTRIES_ALL_SUCCESS, payload: response.data.items });
		})
		.catch(err => {
			console.log(err.response);
			dispatch({ type: GET_ENTRIES_ALL_FAILURE, payload: err });
		});
};
