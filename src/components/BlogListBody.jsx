import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import blog from "../assets/home/blog.svg";

const BlogListBody = () => {
	const data = [
		{
			i: blog,
			p: "Product",
			t: (
				<h2 className="color1 f20 fw700">
					How an in-app payments SDK can <br /> transform your business
				</h2>
			),
		},
		{
			i: blog,
			p: "INsights",
			t: (
				<h2 className="color1 f20 fw700">
					5 Benefits of Accepting Contactless <br /> Payments
				</h2>
			),
		},
		{
			i: blog,
			p: "Product",
			t: (
				<h2 className="color1 f20 fw700">
					How an in-app payments SDK can <br /> transform your business
				</h2>
			),
		},
		{
			i: blog,
			p: "INsights",
			t: (
				<h2 className="color1 f20 fw700">
					5 Benefits of Accepting Contactless <br /> Payments
				</h2>
			),
		},
		{
			i: blog,
			p: "Product",
			t: (
				<h2 className="color1 f20 fw700">
					How an in-app payments SDK can <br /> transform your business
				</h2>
			),
		},
		{
			i: blog,
			p: "INsights",
			t: (
				<h2 className="color1 f20 fw700">
					5 Benefits of Accepting Contactless <br /> Payments
				</h2>
			),
		},
	];

	return (
		<div className="insights_container blogBody">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								{data.map((prev, ind) => {
									const { i, p, t } = prev;
									return (
										<div className="col-11 col-md-6 mx-auto mt-5" key={ind}>
											<img src={i} alt="" />
											<div className="ps-3 mt-2">
												<p className="f14 crice mb-0 mb-md-2">{p}</p>
												{t}
												<button className="f14 border-0 bg-transparent orangeC fw600">
													Learn more <IoIosArrowForward />
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogListBody;
