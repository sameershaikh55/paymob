import React from "react";
import { useEffect } from "react";
import logoW from "../assets/logoW.svg";

// IMPORTING COMPONENTS
import Layout from "../layout";
import BlogInsideBody from "../components/BlogInsideBody";
import RecomendedBlogs from "../components/RecomendedBlogs";

// IMPORTING REDUX
import { connect } from "react-redux";
import { blogApi, blogApiPage } from "../redux/actions";
import { useParams } from "react-router";

const BlogInside = ({ blogApi, blogs, blogApiPage }) => {
	const { page, singleBlog } = useParams();

	console.log(page, "loout");
	console.log(singleBlog, "singleBlog");

	useEffect(() => {
		if (page !== undefined) {
			console.log(page, "lo");
			blogApiPage(page);
		} else {
			blogApi();
		}
	}, []);

	if (blogs.length) {
		var filteredData = blogs.filter((prev) => singleBlog === prev.slug);
	}

	return (
		<>
			{(!blogs.length && (
				<div className="loading_page">
					<div className="inner_loading d-flex flex-column align-items-center">
						<img src={logoW} alt="" />
					</div>
				</div>
			)) || (
				<Layout>
					<BlogInsideBody filteredData={filteredData} />
					<RecomendedBlogs blogs={blogs} />
				</Layout>
			)}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		blogs: state.reducer.blogs,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		blogApi: function () {
			dispatch(blogApi());
		},
		blogApiPage: function (page) {
			dispatch(blogApiPage(page));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BlogInside);
