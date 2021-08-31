import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactBody = () => {
	return (
		<div className="contact_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6">
									<h1 className="color1 gotham f64 fw600">Contact us</h1>
									<div className="row">
										<div className="col-12 col-md-10 col-lg-6">
											<ul className="list-unstyled mt-4 mt-md-5">
												<li className="mb-4 mb-md-5 color1 letterSpace f18 gotham lh27 d-flex">
													<div>
														<HiOutlineLocationMarker
															className="orangeC me-3"
															fontSize="1.6rem"
														/>
													</div>
													<div>
														71-75 Shelton Street, Covent Garden, London,
														England, WC2H 9JQ
													</div>
												</li>
												<li className="mb-4 mb-md-5 color1 letterSpace f18 gotham lh27 d-flex">
													<div>
														<FiMail
															className="orangeC me-3"
															fontSize="1.5rem"
														/>{" "}
													</div>
													<div>
														For general queries contact{" "}
														<a
															className="color1 text-decoration-none"
															href="mailto:welcome@paymobtech.com"
														>
															welcome@paymobtech.com
														</a>
													</div>
												</li>
												<li className="mb-4 mb-md-5 color1 letterSpace f18 gotham lh27 d-flex">
													<div>
														<FiMail
															className="orangeC me-3"
															fontSize="1.5rem"
														/>{" "}
													</div>
													<div>
														For media enquiries contact{" "}
														<a
															className="text-decoration-none color1 letterSpace f18 gotham"
															href="mailto:pr@paymobpos.com"
														>
															pr@paymobpos.com
														</a>
													</div>
												</li>
												<li className="">
													<a
														href="tel:+447751 471779"
														className="d-flex text-decoration-none color1 letterSpace f18 gotham lh27"
													>
														<div>
															<FiPhone
																className="orangeC me-3"
																fontSize="1.5rem"
															/>{" "}
															+44
														</div>
														<div>7751 471779</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6 mt-5 mt-md-0">
									<div className="contact_form py-5 px-4">
										<input
											className="w-100 mb-4 gotham f18 color2 letterSpace"
											type="text"
											name=""
											id=""
											placeholder="Name*"
										/>
										<br />
										<input
											className="w-100 mb-4 gotham f18 color2 letterSpace"
											type="text"
											name=""
											id=""
											placeholder="Company name*"
										/>
										<br />
										<input
											className="w-100 mb-4 gotham f18 color2 letterSpace"
											type="text"
											name=""
											id=""
											placeholder="Email address*"
										/>
										<br />
										<input
											className="w-100 mb-4 gotham f18 color2 letterSpace"
											type="text"
											name=""
											id=""
											placeholder="Phone number*"
										/>
										<br />
										<textarea
											className="w-100 mb-4 gotham f18 color2 letterSpace"
											name=""
											id=""
											cols="30"
											rows="3"
											placeholder="Tell us more more about your project?"
										></textarea>

										<div className="text-end mt-2 mt-md-3">
											<button className="themeBtn py-2 px-4 border-0 letterSpace bg-white fw-bold gilroy">
												Submit
											</button>
										</div>
									</div>

									<p className="text-center color1 f10 walsheim letterSpace my-4">
										This site is protected by reCAPTCHA and the Google Privacy
										Policy and Terms of Service apply.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactBody;
