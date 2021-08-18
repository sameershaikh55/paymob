import React from "react";

// IMPORT
import hero from "../assets/certifications/hero.svg";

const HeroCerti = () => {
	return (
		<div>
			<div className="hero_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="row align-items-center">
									<div className="col-12 col-md-6">
										<h1 className="fw-bolder">Certifications and security</h1>
										<p className="mt-3 mt-md-4 fw-bold">
											At Paymob we have built our technology around trust and
											safety, holding ourselves to the highest industry security
											standards. We are PCI-DSS Level 1 certified and FCA
											Approved. Paymob are also approved by a multitude of
											global payment providers to ensure all payment cards can
											be accepted using our software.{" "}
										</p>
									</div>
									<div className="col-12 col-md-6 mt-1 mt-md-0 mb-4 mb-md-0">
										<div className="row">
											<div className="col-12 col-sm-8 col-md-10 mx-auto text-center">
												<img className="w-100" src={hero} alt="" />
											</div>
										</div>
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

export default HeroCerti;
