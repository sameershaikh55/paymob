import React from "react";
import blog from "../assets/home/blog.svg";
import { IoIosArrowForward } from "react-icons/io";

const BlogListHero = () => {
	return (
		<div className="blog_list_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="text-center">
								<h1 className="color1 gotham f50 fw-bold">Paymob INsights.</h1>
								<p className="orangeC gotham f20 mb-4">
									Recent updates, trending news, business tips and advice from
									the Paymob team.
								</p>
							</div>

							<div className="row align-items-center gx-2 gx-lg-5 inner_container">
								<div className="col-12 col-md-6 pe-lg-5 text-end h-100">
									<div className="row h-100">
										<div className="col-12 col-lg-9 ms-auto h-100 d-flex flex-column justify-content-between">
											<h2 className="f35 gotham fw600 color1">
												How an in-app payments SDK can transform your
												business...
											</h2>
											<div className="mt-2 mt-md-5">
												<button className="f14 border-0 bg-transparent orangeC fw600 gotham">
													Learn more <IoIosArrowForward />
												</button>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6 mt-5 mt-md-0">
									<img className="w-100" src={blog} alt="blog" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogListHero;