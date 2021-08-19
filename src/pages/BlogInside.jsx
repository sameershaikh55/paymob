import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import BlogInsideBody from "../components/BlogInsideBody";
import RecomendedBlogs from "../components/RecomendedBlogs";

const BlogInside = () => {
	return (
		<Layout>
			<BlogInsideBody />
			<RecomendedBlogs />
		</Layout>
	);
};

export default BlogInside;
