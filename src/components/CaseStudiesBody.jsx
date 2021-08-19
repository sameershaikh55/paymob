import React from "react";
import check from "../assets/check.svg";
import i1 from "../assets/mPosSolutions/hero.svg";
import i2 from "../assets/miniPos/hero.svg";
import i3 from "../assets/smartPos/hero.svg";
import { IoIosArrowForward } from "react-icons/io";

const CaseStudiesBody = () => {
	const data = [
		{
			i: i1,
			t: "mPOS card reader",
		},
		{
			i: i2,
			t: "Mini POS Terminal",
		},
		{
			i: i3,
			t: "Smart POS Terminal",
		},
	];

	return (
		<div className="caseStudyBody_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-10 col-lg-6 mx-auto order-1 order-lg-0 mt-5 mt-lg-0">
									<div className="row align-items-end">
										{data.map((prev, ind) => {
											return (
												<div key={ind} className="col-6 mx-auto text-center">
													<img
														style={{ width: (ind === 1 && "50%") || "100%" }}
														src={prev.i}
														alt=""
													/>
													<h5 className="color1 gotham f18 fw600 mt-3 mb-0">
														{prev.t}
													</h5>
													<button className="f14 border-0 bg-transparent orangeC fw600">
														Learn more <IoIosArrowForward />
													</button>
												</div>
											);
										})}
									</div>
								</div>
								<div className="col-12 col-md-10 col-lg-6 ms-auto">
									<p className="orangeC fw-bold text-end gotham f18 mb-0 mb-md-2">
										Case studies
									</p>
									<h1 className="f64 gotham color1 text-end fw-bolder">
										Aisino uses Paymobs certfied SDK in their terminals
									</h1>
									<p className="color2 text-end crice mt-3 mt-md-4 fw-bold">
										Partner Aisino, an IT and hardware provider integrated our
										SDK (software development kit) in their Mini POS, mPOS and
										Smart POS terminals for NFC contactless payment acceptance.
									</p>
									<hr />

									<h6 className="f18 gotham text-end my-4 fw-bold">Products</h6>
									<ul className="list-unstyled">
										<li className="mb-2 text-end color2 gotham f16">
											Paymob SDK (software development kit){" "}
											<img className="ms-2" src={check} alt="" />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudiesBody;
