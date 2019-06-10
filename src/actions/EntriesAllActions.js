import { REQUEST_ENTRIES_ALL, GET_ENTRIES_ALL_FAILURE, GET_ENTRIES_ALL_SUCCESS } from "./types";
import axios from "axios";

const SPACE_ID = "vhdsczpqp6a0";
const ENVIROMENT_ID = "master";
const ACCESS_TOKEN = "S1_ZZcjX2qDUQNoMxc67gOzQIWUTdDWgJN19FVyaaBA";

export const getAllEntries = () => dispatch => {
	dispatch({ type: REQUEST_ENTRIES_ALL });

	return axios({
		method: "GET",
		url: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIROMENT_ID}/entries?access_token=${ACCESS_TOKEN}`
	})
		.then(response => {
			dispatch({ type: GET_ENTRIES_ALL_SUCCESS, payload: response.data.items });
		})
		.catch(err => {
			dispatch({ type: GET_ENTRIES_ALL_FAILURE, payload: err });
		});
};
