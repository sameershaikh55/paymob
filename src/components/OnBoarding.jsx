import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import onboarding from "../assets/gifs/Merchant onboarding GIF.gif";

const OnBoarding = () => {
	return (
		<div className="payment_interface_container onboarding_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-md-6">
									<div>
										<p className="orangeC gotham f18 mb-0 mb-md-2">
											Onboarding
										</p>
										<div className="row">
											<div className="col-12 col-md-10">
												<h1 className="color1 gotham fw700">
													Focus on your product while we focus on your back-end
													onboarding process
												</h1>
											</div>
										</div>
										<div className="row">
											<p className="col-12 col-md-10 lh39 color1 f18 crice fw600">
												Allowing you to provide payment acceptance to your
												merchant custmers from day one.
											</p>
										</div>
										<a href="https://airtable.com/shrL21Fd1xLND39mK">
											<button className="themeBtn bg-white gotham orangeC py-2 px-3 border-0 f18">
												Find out more <IoIosArrowForward />
											</button>
										</a>
									</div>
								</div>
								<div className="col-md-6 mt-5 mt-md-0">
									<img className="w-100" src={onboarding} alt="onboarding" />
									{/* <div className="row">
										<div className="col-12 col-lg-11">
											<div className="your_business_container px-4 py-5">
												<h2 className="text-center gotham orangeCL fw800 mb-4">
													Your Business
												</h2>

												<div>
													<h4 className="color4 fw700">You are a:</h4>
													<div>
														<ul className="list-unstyled d-flex flex-wrap">
															<li className="me-2 mt-2 d-flex align-items-center">
																<input type="radio" name="business" id="st" />
																<label
																	className="color4 gotham fw600 f12 ms-1"
																	htmlFor="st"
																>
																	Sole Trader
																</label>
															</li>
															<li className="me-2 mt-2 d-flex align-items-center">
																<input type="radio" name="business" id="re" />
																<label
																	className="color4 gotham fw600 f12 ms-1"
																	htmlFor="re"
																>
																	Registered Entity
																</label>
															</li>
															<li className="me-2 mt-2 d-flex align-items-center">
																<input type="radio" name="business" id="plc" />
																<label
																	className="color4 gotham fw600 f12 ms-1"
																	htmlFor="plc"
																>
																	Public Limited Company
																</label>
															</li>
															<li className="d-flex mt-2 align-items-center">
																<input type="radio" name="business" id="o" />
																<label
																	className="color4 gotham fw600 f12 ms-1"
																	htmlFor="o"
																>
																	Others
																</label>
															</li>
														</ul>
													</div>

													<div className="mt-3">
														<div className="mb-3">
															<label
																className="gotham mb-1 f18 color4 fw800"
																htmlFor=""
															>
																Legal company name
															</label>
															<br />
															<input
																className="px-3 py-2 w-100"
																type="text"
																name=""
																id=""
															/>
														</div>
														<div className="mb-3">
															<label
																className="gotham mb-1 f18 color4 fw800"
																htmlFor=""
															>
																Country
															</label>
															<br />
															<input
																className="px-3 py-2 w-100"
																type="text"
																name=""
																id=""
															/>
														</div>

														<div className="mb-3">
															<label
																className="gotham mb-1 f18 color4 fw800"
																htmlFor=""
															>
																City
															</label>
															<br />
															<input
																className="px-3 py-2 w-100"
																type="text"
																name=""
																id=""
															/>
														</div>

														<div className="mb-3">
															<label
																className="gotham mb-1 f18 color4 fw800"
																htmlFor=""
															>
																Phone Number
															</label>
															<br />
															<input
																className="px-3 py-2 w-100"
																type="text"
																name=""
																id=""
															/>
														</div>

														<div>
															<label
																className="gotham mb-1 f18 color4 fw800"
																htmlFor=""
															>
																E-mail address
															</label>
															<br />
															<input
																className="px-3 py-2 w-100"
																type="text"
																name=""
																id=""
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OnBoarding;
