import React from "react";

const HeroIndustry = ({ ind }) => {
	return (
		<div className="industry_container d-flex justify-content-center align-items-center text-center">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						{(ind && (
							<div className="col-11 col-lg-12 mx-auto">
								<h1 className="color1 gotham fw-bold mb-0">Industry sectors</h1>
								<div className="col-12 col-sm-10 col-md-8 col-lg-5 mx-auto mt-4">
									<p className="Walsheim color2 lh27 fw-light">
										Paymob provide powerful, easy-to-use, intuitive, Point of
										Sale (POS) contactless payment systems, with multiple
										payment options along with our contactless Tap-to-Phone
										technology across the UK and Europe.
									</p>
								</div>
							</div>
						)) || (
							<div className="col-11 col-lg-12 mx-auto">
								<h1 className="color1 gotham fw-bold mb-0">
									Friends of Paymob
								</h1>
								<div className="col-12 col-sm-10 col-md-8 col-lg-5 mx-auto mt-4">
									<p className="Walsheim color2 lh27 fw-light">
										Enabling fintechs, commerce solution vendors and banking
										institutions across three continents to provide their own
										Tap to Phone solutions through our bespoke white label app,
										or an integrated SDK for their existing application, and POS
										terminals.  
									</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroIndustry;
