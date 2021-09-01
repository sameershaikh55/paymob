import React from "react";

// IMPORTS
import { IoIosArrowForward } from "react-icons/io";
import t1 from "../assets/ourTeam/t1.png";
import t2 from "../assets/ourTeam/t2.png";
import t3 from "../assets/ourTeam/t3.png";
import t4 from "../assets/ourTeam/t4.png";
import t5 from "../assets/ourTeam/t5.png";
import t6 from "../assets/ourTeam/t6.png";
import t7 from "../assets/ourTeam/t7.png";
import t8 from "../assets/ourTeam/t8.png";
import t9 from "../assets/ourTeam/t9.png";
import t10 from "../assets/ourTeam/t10.png";

const TeamBody = () => {
	const data = [
		{
			i: t1,
			t: "Grigory Gurbanov",
			d: "CTO & Founder",
		},
		{
			i: t2,
			t: "Kosta Du",
			d: "CEO & Co-Founder",
		},
		{
			i: t3,
			t: "Rod P",
			d: "IR Manager",
		},
		{
			i: t4,
			t: "Kate L",
			d: "Project Manager",
		},
		{
			i: t5,
			t: "Charlotte P",
			d: "Social Media & Community Manager",
		},
		{
			i: t6,
			t: "Vladimir L",
			d: "Lead Developer",
		},
		{
			i: t7,
			t: "Alex B",
			d: "Compliance Officer",
		},
		{
			i: t8,
			t: "Kate I",
			d: "Communications Associate",
		},
		{
			i: t9,
			t: "Alex K",
			d: "Dev Ops Engineer",
		},
		{
			i: t10,
			t: "Bulat M",
			d: "Graphic Designer",
		},
		{
			i: t10,
			t: "Bulat M",
			d: "Graphic Designer",
		},
	];

	return (
		<div className="our_team_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="color1 gotham fw-bold">Meet the team</h1>

							<div className="row mt-2 mt-md-3">
								{data.map((prev, ind) => {
									return (
										<div
											key={ind}
											className={`${
												(ind + 1 < data.length && "col-6 col-md-4 col-lg-3") ||
												"col-12 col-md-4 col-lg-3"
											} text-center mt-3`}
										>
											{(ind + 1 < data.length && (
												<>
													<img className="w-100" src={prev.i} alt="" />
													<h6 className="color2 gotham f16 mt-2 mb-1">
														{prev.t}
													</h6>
													<p className="color2 f16 crice fw600">{prev.d}</p>
												</>
											)) || (
												<div className="d-flex flex-column align-items-center align-items-md-start justify-content-end height_set mt-3 mt-sm-0">
													<p className="color2 gotham">Want to work with us?</p>
													<button className="themeBtn bg-white gotham fw-bold py-2 px-3 border-0 f16">
														View our job openings <IoIosArrowForward />
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
	);
};

export default TeamBody;
