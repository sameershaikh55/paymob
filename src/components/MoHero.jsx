import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import hero from "../assets/systemComp/s2.svg";

const MoHero = () => {
	return (
		<div className="hero_container mPos">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="fw-bolder">Digital merchant onboarding</h1>
									<p className="mt-3 mt-md-4 fw-bold">
										Seamlessly onboard your merchants with our ready-made KYC
										flow, Paymob take care of the end-to-end onboarding process
										so you can focus on your own financial offering.
									</p>
									<button className="py-2 px-3 border-0 f18 mt-2 mt-md-4">
										Get started now
									</button>
									<button className="ms-3 py-2 px-3 border-0 f18 mt-2 mt-md-4">
										Contact sales <IoIosArrowForward />
									</button>
								</div>
								<div className="col-12 col-md-6 mt-5 mt-md-0 mb-4 mb-md-0">
									<div className="row">
										<div className="col-12 col-sm-8 col-md-9 mx-auto">
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
	);
};

export default MoHero;
