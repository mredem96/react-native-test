import axios from "axios";
import { SPACE_ID, ENVIROMENT_ID, ACCESS_TOKEN } from "../constants";
import { REQUEST_ENTRY_SINGLE, GET_ENTRY_SINGLE_SUCCESS, GET_ENTRY_SINGLE_FAILURE } from "./types";

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
