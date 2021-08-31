import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Add from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const FAQBody = () => {
	const data = [
		{
			t: "Why TAP on Phone?",
			d: "Tap on Phone is quick, simple and secure. It’s an ideal payment method for customers when they need to pay and go. As a merchant, you can transform any enabled mobile device into a payment terminal.",
		},
		{
			t: "How do I know if a customer can pay via Tap on Phone?",
			d: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum nulla ad temporibus asperiores ea culpa nihil aliquam provident quaerat!",
		},
		{
			t: "Where does the customer tap?",
			d: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum nulla ad temporibus asperiores ea culpa nihil aliquam provident quaerat!",
		},
		{
			t: "Are Tap on Phone payments secure?",
			d: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum nulla ad temporibus asperiores ea culpa nihil aliquam provident quaerat!",
		},
		{
			t: "How do you know if a transaction is successful?",
			d: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum nulla ad temporibus asperiores ea culpa nihil aliquam provident quaerat!",
		},
		{
			t: "What if the transaction does not process?",
			d: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum nulla ad temporibus asperiores ea culpa nihil aliquam provident quaerat!",
		},
		{
			t: "How much do contactless payments cost?",
			d: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum nulla ad temporibus asperiores ea culpa nihil aliquam provident quaerat!",
		},
		{
			t: "Is there a charge for contactless payments?",
			d: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum nulla ad temporibus asperiores ea culpa nihil aliquam provident quaerat!",
		},
		{
			t: "Where around the world can I accept contactless payments?",
			d: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi rerum nulla ad temporibus asperiores ea culpa nihil aliquam provident quaerat!",
		},
	];

	return (
		<div className="faq_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<h1 className="text-center gotham color1 f50 fw-bold mb-5">
								Hi, how can we help?
							</h1>

							<div className="inner_body mx-auto">
								<div className="faq_body px-3 px-md-4 py-2 py-md-3">
									{data.map((prev, ind) => {
										return (
											<Accordion key={ind}>
												<AccordionSummary
													expandIcon={true ? <Add /> : <RemoveIcon />}
													aria-controls="panel1a-content"
													id="panel1a-header"
												>
													<Typography className="head">{prev.t}</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography className="body lh27 fw-bold">
														{prev.d}
													</Typography>
												</AccordionDetails>
											</Accordion>
										);
									})}
								</div>

								<div className="d-flex align-items-center justify-content-end mt-5">
									<p className="color2 letterSpace lh27 f16 crice fw-bold mb-0">
										Still need help?
									</p>
									<Link to="/contact">
										<button className="themeBtn bg-white ms-3 color1 py-2 px-3 border-0 f18 fw-bold gotham f16">
											Contact us <IoIosArrowForward />
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQBody;
