import React from "react";
// import bespokeSolutions from "../assets/gifs/Bespoke services GIF.gif";
import bespokeSolutions from "../assets/bespokeSolutions.svg";
// import checkLine from "../assets/checkLine.svg";

const BespokeSolutions = () => {
	return (
		<div className="bespoke_solution_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6">
									<p className="orangeC gotham f18 mb-0 mb-md-2">
										Bespoke solutions
									</p>
									<div className="row">
										<div className="col-12 col-lg-10">
											<h1 className="color1 gotham fw700 f34">
												Powered by us, looks like you
											</h1>
										</div>
									</div>
									<div className="col-12 col-lg-9">
										<p className="underHead color1 f18 crice fw600 mt-1 mt-md-5">
											Our SoftPOS solution is entirely bespoke, available as a
											white label application for Android smartphones. Powered
											by us, but with the look and feel of your own branding,
										</p>
										<p className="underHead color1 f18 crice fw600">
											Powered by us, but with the look and feel of your own
											branding,
										</p>
									</div>
								</div>
								<div className="img_container col-11 col-md-6 mx-auto">
									<div className="d-flex">
										{/* <div className="img_text text-end h-100">
											<ul className="d-flex flex-column justify-content-evenly h-100 list-unstyled">
												<li className="d-flex color8 fw-bold gotham">
													No peripherals required{" "}
													<img className="ms-2" src={checkLine} alt="" />
												</li>
												<li className="d-flex color8 fw-bold gotham">
													Accepts any contactless enabled card{" "}
													<img className="ms-2" src={checkLine} alt="" />
												</li>
												<li className="d-flex color8 fw-bold gotham">
													Accepts mobile wallets{" "}
													<img className="ms-2" src={checkLine} alt="" />
												</li>
												<li className="d-flex color8 fw-bold gotham">
													Compliments potential future payment enablers{" "}
													<img className="ms-2" src={checkLine} alt="" />
												</li>
											</ul>
										</div> */}

										<img className="w-100" src={bespokeSolutions} alt="" />
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

export default BespokeSolutions;
