import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import BlogListHero from "../components/BlogListHero";
import BlogListBody from "../components/BlogListBody";
import BlogPagination from "../components/BlogPagination";

const BlogList = () => {
	return (
		<Layout>
			<BlogListHero />
			<BlogListBody />
			<BlogPagination />
		</Layout>
	);
};

export default BlogList;
