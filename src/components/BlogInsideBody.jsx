import React from "react";
import hero from "../assets/blogInside/hero.svg";

const BlogInsideBody = () => {
	const data = [
		"The payment space is evolving so fast with lots of innovative means of paying for goods seamlessly. Nowadays one could pay for goods using their phone, smartwatches and so on. The On -land Smart Payment Infrastructure webinar is the first of series of its kind and seeks to highlight various features of innovative technologies coming up in the smart payment industry.",
		"The payment space is evolving so fast with lots of innovative means of paying for goods seamlessly. Nowadays one could pay for goods using their phone, smartwatches and so on. The On -land Smart Payment Infrastructure webinar is the first of series of its kind and seeks to highlight various features of innovative technologies coming up in the smart payment industry.",
		"The payment space is evolving so fast with lots of innovative means of paying for goods seamlessly. Nowadays one could pay for goods using their phone, smartwatches and so on. The On -land Smart Payment Infrastructure webinar is the first of series of its kind and seeks to highlight various features of innovative technologies coming up in the smart payment industry.",
		"The payment space is evolving so fast with lots of innovative means of paying for goods seamlessly. Nowadays one could pay for goods using their phone, smartwatches and so on. The On -land Smart Payment Infrastructure webinar is the first of series of its kind and seeks to highlight various features of innovative technologies coming up in the smart payment industry.",
		"The payment space is evolving so fast with lots of innovative means of paying for goods seamlessly. Nowadays one could pay for goods using their phone, smartwatches and so on. The On -land Smart Payment Infrastructure webinar is the first of series of its kind and seeks to highlight various features of innovative technologies coming up in the smart payment industry.",
		"The payment space is evolving so fast with lots of innovative means of paying for goods seamlessly. Nowadays one could pay for goods using their phone, smartwatches and so on. The On -land Smart Payment Infrastructure webinar is the first of series of its kind and seeks to highlight various features of innovative technologies coming up in the smart payment industry.",
		"The payment space is evolving so fast with lots of innovative means of paying for goods seamlessly. Nowadays one could pay for goods using their phone, smartwatches and so on. The On -land Smart Payment Infrastructure webinar is the first of series of its kind and seeks to highlight various features of innovative technologies coming up in the smart payment industry.",
		"The payment space is evolving so fast with lots of innovative means of paying for goods seamlessly. Nowadays one could pay for goods using their phone, smartwatches and so on. The On -land Smart Payment Infrastructure webinar is the first of series of its kind and seeks to highlight various features of innovative technologies coming up in the smart payment industry.",
	];

	return (
		<div className="blog_inside_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="text-center">
								<h1 className="color1 gotham fw-bold">
									How an in-app payments SDK can transform your business...
								</h1>
								<p className="orangeC gotham f16 mt-3 mb-3">Feb 18 2021</p>

								<img className="w-100" src={hero} alt="" />
							</div>

							<div className="row mt-4 mt-md-5">
								<div className="col-12 col-md-11 px-4 px-md-2 mx-auto">
									{data.map((prev, ind) => {
										return (
											<p
												className="color2 f16 letterSpace lh27 gotham fw-light"
												key={ind}
											>
												{prev}
											</p>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogInsideBody;
