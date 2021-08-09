import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import logoW from "../assets/logoW.svg";
import b3 from "../assets/brands/b3.svg";

const Footer = () => {
	const products = [
		{ t: "Product overview" },
		{ t: "Android mobile SDK" },
		{ t: "SoftPOS mobile App" },
		{ t: "mPOS card reader" },
		{ t: "Mini POS Terminal" },
		{ t: "Smart POS Terminal" },
		{ t: "Merchant onboarding" },
		{ t: "Dashboards" },
		{ t: "Admin portal" },
		{ t: "Payment gateway" },
	];

	const cases = [
		{ t: "Industry sectors" },
		{ t: "Channel partners" },
		{ t: "Commerce vendors" },
		{ t: "Banking" },
		{ t: "Case studies" },
	];

	const dev = [
		{ t: "Developer tools" },
		{ t: "App to app API" },
		{ t: "In-house deployment" },
		{ t: "Banking" },
		{ t: "Case studies" },
	];

	const price = [{ t: "Basic fee setup" }];

	const about = [
		{ t: "About us" },
		{ t: "Paymob INsightsAbout us" },
		{ t: "FAQs" },
		{ t: "Press" },
		{ t: "Certifications & security" },
		{ t: "Careers" },
		{ t: "Contact us" },
	];

	return (
		<div className="footer_container text-white">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-12 col-lg-3 d-flex flex-column flex-md-row flex-lg-column justify-content-between">
									<div className="w-100">
										<h3 className="fw500">Ready to get started?</h3>
										<button className="border-0 bg-transparent text-white">
											Contact sales <IoIosArrowForward />
										</button>
									</div>
									<div className="w-100 mt-5 mt-sm-0">
										<img src={logoW} alt="" />
										<p className="text-dark fw-bold f12 mt-2">
											<span className="bottomLineGrayLight pb-2">Paymob i</span>
											s a proud{" "}
											<img className="brandLogo ms-1" src={b3} alt="" /> backed
											company
										</p>
										<p className="secondText f8 color5">
											"Paymob" is a trading name of PAYMOB TECHNOLOGY LTD, an
											entity incorporated and registered under the law of
											England and Wales at the following address: 71-75 Shelton
											Street, Covent Garden, London, England, WC2H 9JQ, Company
											registration number 11965837. "Paymob" is authorised by
											the Financial Conduct Authority (FCA) in the UK under The
											Payment Services Regulations 2017 for issuing and/or
											acquiring of payment instruments (FRN: 917808).
										</p>
									</div>
								</div>
								<div className="col-12 col-lg-9 mt-lg-0">
									<div className="d-flex justify-content-between flex-wrap">
										<div className="mt-5">
											<div>
												<h6 className="fw600">
													<span className="borderTop pt-2">Produ</span>cts
												</h6>
												<ul className="list-unstyled mt-3">
													{products.map((prev, i) => {
														return (
															<li className="mb-2 mb-md-3 f14" key={i}>
																{prev.t}
															</li>
														);
													})}
												</ul>
											</div>
										</div>
										<div className="mt-5">
											<h6 className="fw600">
												<span className="borderTop pt-2">Use cas</span>es
											</h6>
											<ul className="list-unstyled mt-3">
												{cases.map((prev, i) => {
													return (
														<li className="mb-2 mb-md-3 f14" key={i}>
															{prev.t}
														</li>
													);
												})}
											</ul>
										</div>
										<div className="mt-5">
											<h6 className="fw600">
												<span className="borderTop pt-2">Develo</span>pers
											</h6>
											<ul className="list-unstyled mt-3">
												{dev.map((prev, i) => {
													return (
														<li className="mb-2 mb-md-3 f14" key={i}>
															{prev.t}
														</li>
													);
												})}
											</ul>
										</div>
										<div className="mt-5">
											<h6 className="fw600">
												<span className="borderTop pt-2">Pricing</span>
											</h6>
											<ul className="list-unstyled mt-3">
												{price.map((prev, i) => {
													return (
														<li className="mb-2 mb-md-3 f14" key={i}>
															{prev.t}
														</li>
													);
												})}
											</ul>
										</div>
										<div className="mt-5">
											<h6 className="fw600">
												<span className="borderTop pt-2">About</span> us
											</h6>
											<ul className="list-unstyled mt-3">
												{about.map((prev, i) => {
													return (
														<li className="mb-2 mb-md-3 f14" key={i}>
															{prev.t}
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>

								<div className="d-flex flex-column justify-content-start align-items-end mt-5 mt-md-0">
									<h6 className="f15">
										<span className="orangeC fw-bolder">Subscribe</span> to
										Paymob INsights, our weekly newsletter!
									</h6>
									<div className="newsletterInp d-flex justify-content-between px-4 py-2">
										<input
											type="text"
											name=""
											id=""
											className="border-0 bg-transparent"
											placeholder="joebloggs@address.com"
										/>
										<button className="ps-4 bg-transparent color1 f14 fw-bold">
											SUBSCRIBE
										</button>
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

export default Footer;
