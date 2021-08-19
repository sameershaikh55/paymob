import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const DevelopersBody = () => {
	const data = [
		{
			t: "Create a demo account",
			d: "Test run our solution in minutes.",
			b: ["Get demo"],
		},
		{
			t: "App to App callback protocol",
			d: "How our app to app callback works within your existing framework.",
			b: ["Download demo app"],
		},
		{
			t: "Merchant dashboard APIs",
			d: "API documentation to build your own merchant dashboard.",
			b: ["Start building"],
		},
		{
			t: "Paymob SDK",
			d: "Learn how to integrate our SDK to leverage your own financial services.",
			b: ["Learn more"],
		},
		{
			t: "In-house deployment",
			b: ["Learn more", "Request brochure"],
		},
		{
			t: "In-house deployment",
			b: ["Learn more", "Request brochure"],
		},
	];

	return (
		<div className="developersBody_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="text-center">
								<h1 className="f64 gotham fw-bold color1">Developer tools</h1>
								<p className="col-12 mt-2 mt-md-4 col-md-10 col-lg-6 mx-auto color2 letterSpace f16 crice fw-bold">
									Resources, references and links for developers to integrate
									with our SoftPOS payment ecosystem.
								</p>
							</div>

							<div className="mt-5">
								<h4 className="text-center f18 gotham letterSpace fw-bold mb-4">
									Build with Paymob
								</h4>

								<div className="row gx-4 gx-lg-5 gy-4 gy-lg-5">
									{data.map((prev, ind) => {
										return (
											<div key={ind} className="col-12 col-sm-6 col-md-4">
												{(data.length - 1 > ind && (
													<div className="developer_card d-flex flex-column justify-content-between p-3">
														<h5 className="f18 gotham letterSpace color1 fw600">
															{prev.t}
														</h5>
														<p className="crice fw-bold letterSpace f16 mb-0">
															{prev.d}
														</p>
														<div className="d-flex flex-column align-items-start">
															{prev.b.map((prev2, ind2) => {
																return (
																	<button
																		key={ind2}
																		className="orangeC border-0 bg-transparent fw600 gotham f16 letterSpace"
																	>
																		{prev2}{" "}
																		<IoIosArrowForward className="orangeC" />
																	</button>
																);
															})}
														</div>
													</div>
												)) || (
													<div className="d-flex flex-column align-items-center align-items-md-start justify-content-end mt-2 mt-sm-0 h-100">
														<button className="themeBtn bg-white gotham fw-bold py-2 px-3 border-0 f16">
															Contact us <IoIosArrowForward />
														</button>
													</div>
												)}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DevelopersBody;
