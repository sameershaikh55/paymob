import React from "react";

// IMPORTS
import explore from "../assets/productOverview/explore.svg";
import i1 from "../assets/explorePaymob/i1.svg";
import i2 from "../assets/explorePaymob/i2.svg";
import i3 from "../assets/explorePaymob/i3.svg";
import i4 from "../assets/explorePaymob/i4.svg";

const ExploreAvail = () => {
	const data = [
		{
			i: i1,
			t: "U.S.",
		},
		{
			i: i2,
			t: "U.K. and Europe",
		},
		{
			i: i3,
			t: "Canada and Mexico",
		},
		{
			i: i4,
			t: "Kyrgyzstan",
		},
	];

	return (
		<div className="explore_availability_container py-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-6 px-0">
									<img className="w-100" src={explore} alt="explores" />
								</div>
								<div className="col-6">
									<p className="text-end orangeC gotham f18 mb-0 mb-md-2">
										Where is Paymob?
									</p>
									<h1 className="color1 gotham fw700 text-end mb-4">
										Explore our availability
									</h1>
									<p className="underHead color1 f18 crice fw600">
										Paymob currently service our network of partners across the
										U.K. Europe, North America and Kyrgyzstan. We are working
										hard to expand our reach to elevate fintech partners and
										vendors globally.
									</p>

									<div className="row mt-5">
										{data.map((prev, i) => {
											return (
												<div key={i} className="col-6 text-end">
													<div className="explore_card py-4">
														<h5>{prev.t}</h5>
														<img src={prev.i} alt="" />
													</div>
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
		</div>
	);
};

export default ExploreAvail;
