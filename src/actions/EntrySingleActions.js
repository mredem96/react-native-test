import { REQUEST_ENTRY_SINGLE, GET_ENTRY_SINGLE_SUCCESS, GET_ENTRY_SINGLE_FAILURE } from "./types";
import axios from "axios";

const SPACE_ID = "vhdsczpqp6a0";
const ENVIROMENT_ID = "master";
const ACCESS_TOKEN = "S1_ZZcjX2qDUQNoMxc67gOzQIWUTdDWgJN19FVyaaBA";
const ENTRY_ID = "";
export const getSingleEntry = props => dispatch => {
	dispatch({ type: REQUEST_ENTRY_SINGLE });
	return axios({
		method: "GET",
		url: `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIROMENT_ID}/entries/${props.sys
			.id}?access_token=${ACCESS_TOKEN}`
	})
		.then(response => {
			console.log(response);
			dispatch({ type: GET_ENTRY_SINGLE_SUCCESS, payload: response.data });
		})
		.catch(err => {
			dispatch({ type: GET_ENTRY_SINGLE_FAILURE, payload: err });
		});
};
