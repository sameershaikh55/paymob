import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const OurPaymentInfra = () => {
	const data = [
		"Merchant dashboard",
		"Merchant dashboard",
		"Admin portal",
		"Certifications",
	];

	return (
		<div className="ourPaymentInfra_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6 col-lg-5">
									<h1 className="color7">
										Our payment <br /> infrastructure.
									</h1>
								</div>
								<div className="col-12 col-md-6 col-lg-7">
									<div className="row">
										{data.map((prev, i) => {
											return (
												<div key={i} className="col-6 mt-4">
													<div className="cards_inner ps-2">
														<h5 className="gotham f20 color1 fw700 color7">
															{prev}
														</h5>
														<button className="f14 border-0 bg-transparent orangeC fw600 gotham">
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
			</div>
		</div>
	);
};

export default OurPaymentInfra;
