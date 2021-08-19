import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const PressHero = () => {
	return (
		<div className="press_hero_container d-flex justify-content-center align-items-center">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto text-center">
							<h1 className="gotham fw-bold f64">Press</h1>
							<p className="my-4 color2 crice f16 lh27 letterSpace fw600">
								For media enquiries, please contact pr@paymobtech.com
							</p>
							<button className="themeBtn color1 bg-white fw-bold gotham py-2 px-3 border-0 f18">
								Download our press kit
							</button>
							<div>
								<p className="color2 fw600 mt-4 crice lh27 letterSpace">
									Follow Paymob
								</p>
								<div>
									<AiOutlineInstagram fontSize="1.2rem" className="orangeC" />
									<FaLinkedinIn className="ms-4 orangeC" fontSize="1.2rem" />
									<FaTwitter className="ms-4 orangeC" fontSize="1.2rem" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PressHero;
