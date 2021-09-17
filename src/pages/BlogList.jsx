import React, { useEffect } from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import BlogListHero from "../components/BlogListHero";
import BlogListBody from "../components/BlogListBody";
import BlogPagination from "../components/BlogPagination";
import logoW from "../assets/logoW.svg";
import { connect } from "react-redux";
import { blogApiPage } from "../redux/actions";
import { useParams } from "react-router";

const BlogList = ({ blogApiPage, blogs }) => {
	const { page } = useParams();

	useEffect(() => {
		blogApiPage(page);
	}, [page]);

	return (
		<>
			<Layout>
				{(!blogs.length && (
					<div className="loading_page">
						<div className="inner_loading d-flex flex-column align-items-center">
							<img src={logoW} alt="" />
						</div>
					</div>
				)) || (
					<>
						{!page && <BlogListHero blogs={blogs} />}
						<BlogListBody blogsPag={blogs} />
					</>
				)}
				<BlogPagination />
			</Layout>
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
		blogApiPage: function (page) {
			dispatch(blogApiPage(page));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(BlogList);
