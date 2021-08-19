import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BlogPagination = () => {
	return (
		<div className="bespoke_solution_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="d-flex align-items-center justify-content-center">
								<p className="f18 mb-0 me-3 color2">1 / 2</p>
								<button className="themeBtn bg-white color1 gotham fw-bold py-2 px-3 border-0 f18">
									Next <IoIosArrowForward />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPagination;
