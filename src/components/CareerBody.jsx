import React from "react";
import { NavLink } from "react-router-dom";

const CareerBody = () => {
	return (
		<div className="career_container d-flex justify-content-center align-items-center text-center">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="gotham fw-bolder">Careers at Paymob.</h1>

							<div className="row">
								<div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-7 mx-auto my-3 my-sm-4 my-md-5">
									<p className="color2 f18 crice lh27 fw600">
										At Paymob we’re challenging the status quo of paytech,
										uplifiting businesses around the world to accept payments
										through their own smartphones... Without the use of dongles,
										cables or external hardware. Join us!
									</p>
								</div>
							</div>

							<NavLink to="/careers/job_openings">
								<button className="themeBtn orangeC bg-white gotham fw-bold py-2 px-3 border-0 f16">
									View our job openings 👉
								</button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CareerBody;