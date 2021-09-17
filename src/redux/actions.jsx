import { BLOGS } from "./type";
import axios from "axios";

const blogFunc = (data) => {
	return {
		type: BLOGS,
		payload: data,
	};
};

export const blogApi = () => {
	return (dispatch) => {
		axios.get("https://paymobtech.com/wp-json/wp/v2/posts").then((res) => {
			dispatch(blogFunc(res.data));
		});
	};
};

export const blogApiPage = (page) => {
	return (dispatch) => {
		dispatch(blogFunc(""));
		axios
			.get(`https://paymobtech.com/wp-json/wp/v2/posts?page=${page || 1}`)
			.then((res) => {
				dispatch(blogFunc(res.data), console.log(res));
			});
	};
};
