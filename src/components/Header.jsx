import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
// import triangle from "../assets/triangle.svg";

// IMPORTS
import logo from "../assets/logo.svg";

const ProductList = () => {
	return (
		<div className="dropdownList pt-5">
			<div>
				<h6 className="f18 mb-3 orangeC fw600 px-4">Products</h6>
				<div className="container-fluid pb-4">
					<div className="row">
						<div className="col-6">
							<button className="color1 border-0 shadow-none bg-transparent f14">
								Overview <IoIosArrowForward />
							</button>
						</div>
						<div className="col-6">
							<button className="color1 border-0 shadow-none bg-transparent f14">
								Contact <IoIosArrowForward />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-6">
						<h6 className="bottomHead mb-3 f14">PAYMENT TOOLS</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Android mobile SDK <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									SoftPOS app <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									mPOS card reader <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Mini POS terminal <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Smart POS terminal <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-6">
						<h6 className="bottomHead mb-3 f14">SYSTEM COMPONENETS</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Merchent onboarding <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 fw600">
								<NavLink
									to=""
									className="color1 text-decoration-none color1 fw600"
								>
									Admin portal <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 fw600">
								<NavLink
									to=""
									className="color1 text-decoration-none color1 fw600"
								>
									Merchant & client dashboard <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 fw600">
								<NavLink
									to=""
									className="color1 text-decoration-none color1 fw600"
								>
									Payment gateway <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 fw600">
								<NavLink
									to=""
									className="color1 text-decoration-none color1 fw600"
								>
									Certifications <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
			{/* ARROW END */}
		</div>
	);
};

const UseCases = () => {
	return (
		<div className="dropdownList cases pt-5">
			<div>
				<h6 className="f18 mb-3 orangeC fw600 px-4">Use Cases</h6>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-6">
						<h6 className="bottomHead mb-3 f14">INDUSTRY SECTORS</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Retailers & small business <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Gig economy <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Transportation <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Hospitality <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-6">
						<h6 className="bottomHead mb-3 f14">FRIENDS OF PAYMOB</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Channel partners <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Banking <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Commerce vendors <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-6 mt-2">
						<h6 className="bottomHead mb-3 f14">CASE STUDIES</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									ZmBIZI <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Aisino <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
			{/* ARROW END */}
		</div>
	);
};

const Developers = () => {
	return (
		<div className="dropdownList dev pt-5">
			<div>
				<h6 className="f18 mb-3 py-2 orangeC fw600 px-4">Developers</h6>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-12">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Developer tools <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									App to app API <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									In-house deployment <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Create a demo account <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
			{/* ARROW END */}
		</div>
	);
};

const About = () => {
	return (
		<div className="dropdownList pt-5">
			<div>
				<h6 className="f18 mb-3 orangeC fw600 px-4">About us</h6>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-6">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									About us <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Paymob INsights <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									FAQs <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Press <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-6">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Our team <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Careers <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Certifications and security <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Contact us <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
			{/* ARROW END */}
		</div>
	);
};

const Pricing = () => {
	return (
		<div className="dropdownList pricing pt-5">
			<div>
				<h6 className="f18 mb-3 orangeC fw600 px-4">Pricing</h6>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-12">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/"
									className="color1 text-decoration-none color1 fw600"
								>
									Basic fee setup <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
			{/* ARROW END */}
		</div>
	);
};

const Header = ({ ClickEvent }) => {
	useEffect(() => {
		// FOR NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".header_container");
			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 0);
			}
		});
	}, []);
	const [nestedNav, setNestedNav] = useState({
		first: true,
		second: true,
		third: true,
		fourth: true,
		fifth: true,
	});

	const first = () => {
		setNestedNav({
			first: !nestedNav.first,
			second: false,
			third: false,
			fourth: false,
			fifth: false,
		});
	};
	const second = () => {
		setNestedNav({
			first: false,
			second: !nestedNav.second,
			third: false,
			fourth: false,
			fifth: false,
		});
	};
	const third = () => {
		setNestedNav({
			first: false,
			second: false,
			third: !nestedNav.third,
			fourth: false,
			fifth: false,
		});
	};
	const fourth = () => {
		setNestedNav({
			first: false,
			second: false,
			third: false,
			fourth: !nestedNav.fourth,
			fifth: false,
		});
	};
	const fifth = () => {
		setNestedNav({
			first: false,
			second: false,
			third: false,
			fourth: false,
			fifth: !nestedNav.fifth,
		});
	};
	return (
		<div className="header_container">
			<div className="header_containerSize w-100">
				<div className="container-fluid ps-4 ps-md-2 pe-0 h-100 w-100">
					<div className="row h-100 w-100">
						<div className="col-11 h-100 mx-auto w-100">
							<div className="d-flex justify-content-between align-items-center w-100 h-100">
								<div>
									<NavLink to="/">
										<img src={logo} alt="" />
									</NavLink>
								</div>
								{/* HAMBERGER START */}
								<div className="d-block d-lg-none pointer">
									<GiHamburgerMenu onClick={ClickEvent} fontSize="1.8rem" />
								</div>
								{/* HAMBERGER END */}
								<div className="d-none d-lg-block">
									<ul className="d-flex list-unstyled mb-0">
										<li className="nav_one position-relative">
											<span onClick={first} className="blackC pointer">
												Products
											</span>
											{/* {nestedNav.first && <ProductList />} */}
											<div className="dropdown_one">
												<ProductList />
											</div>
										</li>
										<li className="nav_two ms-5 position-relative">
											<span onClick={second} className="blackC pointer">
												Use cases
											</span>
											{/* {nestedNav.second && <UseCases />} */}
											<div className="dropdown_two">
												<UseCases />
											</div>
										</li>
										<li className="nav_three ms-5 position-relative">
											<span onClick={third} className="blackC pointer">
												Developers
											</span>
											{/* {nestedNav.third && <Developers />} */}
											<div className="dropdown_three">
												<Developers />
											</div>
										</li>
										<li className="nav_four ms-5 position-relative">
											<span onClick={fourth} className="blackC pointer">
												Pricing
											</span>
											{/* {nestedNav.fourth && <Pricing />} */}
											<div className="dropdown_four">
												<Pricing />
											</div>
										</li>
										<li className="nav_five ms-5 position-relative">
											<span onClick={fifth} className="blackC pointer">
												About us
											</span>
											{/* {nestedNav.fifth && <About />} */}
											<div className="dropdown_five">
												<About />
											</div>
										</li>
									</ul>
								</div>
								<div className="d-none d-lg-block">
									<a
										target="blank"
										href="https://airtable.com/shrL21Fd1xLND39mK"
									>
										<button className="color1 border-0 bg-white py-2 px-4 fw800">
											Request Demo
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
