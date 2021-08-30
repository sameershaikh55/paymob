import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import logoW from "../assets/logoW.svg";
import b3 from "../assets/brands/b3.svg";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";

const Footer = () => {
	const products = [
		{ t: "Product overview", l: "/productOverview" },
		{ t: "Android mobile SDK", l: "/androidSdk" },
		{ t: "SoftPOS mobile App", l: "/softPos" },
		{ t: "mPOS card reader", l: "/mposCard" },
		{ t: "Mini POS Terminal", l: "/miniPos" },
		{ t: "Smart POS Terminal", l: "/smartPos" },
		{ t: "Merchant onboarding", l: "/merchantOnboarding" },
		{ t: "Dashboards", l: "/merchantDashboard" },
		{ t: "Admin portal", l: "/adminPortal" },
		{ t: "Payment gateway", l: "/paymentGatway" },
	];

	const cases = [
		{ t: "Industry sectors", l: "/industrySector" },
		{ t: "Channel partners", l: "/partners" },
		{ t: "Commerce vendors", l: "/partners" },
		{ t: "Banking", l: "/partners" },
		{ t: "Case studies", l: "/caseStudies" },
	];

	const dev = [
		{ t: "Developer tools", l: "/developers" },
		{ t: "App to app API", l: "/callback" },
		{ t: "In-house deployment", l: "/inHouseDeployement" },
		{ t: "Banking", l: "/partners" },
		{ t: "Case studies", l: "/caseStudies" },
	];

	const price = [
		{ t: "Basic fee setup", el: "https://airtable.com/shrL21Fd1xLND39mK" },
	];

	const about = [
		{ t: "About us", l: "/about" },
		{ t: "Paymob INsights", l: "insight" },
		{ t: "FAQs", l: "/faq" },
		{ t: "Press", l: "/press" },
		{ t: "Certifications & security", l: "/certifications" },
		{ t: "Careers", l: "/careers" },
		{ t: "Contact us", l: "/contact" },
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
															<>
																{(prev.l === "insight" && (
																	<LinkS
																		to={prev.l}
																		offset={-120}
																		smooth={true}
																		duration={600}
																		spy={true}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</LinkS>
																)) ||
																	(prev.el && (
																		<a
																			target="blank"
																			href={prev.el}
																			className="text-decoration-none"
																		>
																			<li
																				className="text-white mb-2 mb-md-3 f14"
																				key={i}
																			>
																				{prev.t}
																			</li>
																		</a>
																	)) || (
																		<Link
																			to={prev.l}
																			className="text-decoration-none"
																		>
																			<li
																				className="text-white mb-2 mb-md-3 f14"
																				key={i}
																			>
																				{prev.t}
																			</li>
																		</Link>
																	)}
															</>
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
														<>
															{(prev.l === "insight" && (
																<LinkS
																	to={prev.l}
																	offset={-120}
																	smooth={true}
																	duration={600}
																	spy={true}
																	className="text-decoration-none"
																>
																	<li
																		className="text-white mb-2 mb-md-3 f14"
																		key={i}
																	>
																		{prev.t}
																	</li>
																</LinkS>
															)) ||
																(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
														</>
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
														<>
															{(prev.l === "insight" && (
																<LinkS
																	to={prev.l}
																	offset={-120}
																	smooth={true}
																	duration={600}
																	spy={true}
																	className="text-decoration-none"
																>
																	<li
																		className="text-white mb-2 mb-md-3 f14"
																		key={i}
																	>
																		{prev.t}
																	</li>
																</LinkS>
															)) ||
																(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
														</>
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
														<>
															{(prev.l === "insight" && (
																<LinkS
																	to={prev.l}
																	offset={-120}
																	smooth={true}
																	duration={600}
																	spy={true}
																	className="text-decoration-none"
																>
																	<li
																		className="text-white mb-2 mb-md-3 f14"
																		key={i}
																	>
																		{prev.t}
																	</li>
																</LinkS>
															)) ||
																(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
														</>
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
														<>
															{(prev.l === "insight" && (
																<LinkS
																	to={prev.l}
																	offset={-120}
																	smooth={true}
																	duration={600}
																	spy={true}
																	className="text-decoration-none"
																>
																	<li
																		className="text-white mb-2 mb-md-3 f14"
																		key={i}
																	>
																		{prev.t}
																	</li>
																</LinkS>
															)) ||
																(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
														</>
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
