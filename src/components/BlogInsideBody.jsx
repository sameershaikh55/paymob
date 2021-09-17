import React from "react";
import hero from "../assets/blogInside/hero.svg";

const BlogInsideBody = ({ filteredData }) => {
	if (filteredData && filteredData[0] && filteredData[0].date) {
		var dayDateString = new Date(filteredData[0].date).toString().split(" ");
	}

	return (
		<>
			<div className="blog_inside_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="text-center">
									<h1
										dangerouslySetInnerHTML={{
											__html: filteredData[0].title.rendered,
										}}
										className="color1 gotham fw-bold"
									></h1>
									<p className="orangeC gotham f16 mt-3 mb-3">
										{dayDateString[1]} {dayDateString[2]} {dayDateString[3]}
									</p>

									{(filteredData[0].featured_image_urls &&
										filteredData[0].featured_image_urls.large !== "" && (
											<img
												className="thumbnail w-100"
												src={filteredData[0].featured_image_urls.large[0]}
												alt=""
											/>
										)) || <img className="w-100" src={hero} alt="" />}
								</div>

								<div className="content_body row mt-4 mt-md-5">
									<div className="col-12 col-md-11 px-4 px-md-2 mx-auto">
										<div
											dangerouslySetInnerHTML={{
												__html: filteredData[0].content.rendered,
											}}
											className="color2 f16 letterSpace lh27 gotham fw-light"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogInsideBody;
