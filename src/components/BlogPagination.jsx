import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useHistory, useParams } from "react-router";

const BlogPagination = () => {
	const history = useHistory();
	const [pageState, setPageState] = useState(1);
	const { page } = useParams();

	const increasePage = () => {
		if (pageState !== 3) {
			setPageState(pageState + 1);
		}
	};

	useEffect(() => {
		if (pageState !== 1) {
			history.push(`/blogList/${pageState}`);
		} else {
			history.push(`/blogList`);
		}
	}, [pageState]);

	return (
		<div className="bespoke_solution_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="d-flex align-items-center justify-content-center">
								{pageState >= 2 && (
									<button
										onClick={() => setPageState(pageState - 1)}
										className="themeBtn bg-white color1 gotham fw-bold py-2 px-3 border-0 f18 me-3"
									>
										<IoIosArrowBack /> Prev
									</button>
								)}
								<p className="f18 mb-0 me-3 color2">{page || 1} / 3</p>
								<button
									onClick={increasePage}
									className="themeBtn bg-white color1 gotham fw-bold py-2 px-3 border-0 f18"
								>
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
