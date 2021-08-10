import React from "react";

// IMPORTS
import contentIcon from "../assets/productOverview/contentIcon.svg";
import softPos from "../assets/productOverview/softPos.svg";

// IMPORTING COMPONENTS
import Layout from "../layout";
import ProductHero from "../components/ProductHero";
import BrandPartners from "../components/BrandsPartner";
import PaymentInterface from "../components/PaymentInterface";
import PartnerPaymob from "../components/PartnerPaymob";
import NewFeature from "../components/NewFeature";
import { IoIosArrowForward } from "react-icons/io";
import ExploreAvail from "../components/ExploreAvail";

const ProductOverview = () => {
	return (
		<Layout>
			<ProductHero />
			<BrandPartners />
			<PaymentInterface />
			<PartnerPaymob />
			<NewFeature />

			{/* PAGE TEXT START */}
			<div className="productView_content py-4">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="d-flex flex-column align-items-center col-11 col-lg-12 mx-auto">
								<img src={contentIcon} alt="" />
								<div className="line my-3 me-2 d-none d-md-block"></div>
								<p className="col-12 col-md-10 col-lg-8 gotham f20 lh39 text-white text-center mb-1 my-2 my-md-1">
									With the ZmBIZI Smartphone integrated with the Paymob SoftPOS
									we are now able to create the next generation of mobile
									merchants who are doing
									<br />
									‘business on the go’.
								</p>
								<h6 className="text-white f14 lh39 fw-light gotham mt-3 mb-4 mt-md-0 mb-md-0">
									Alpesh Patel, Co Founder of ZmBIZI
								</h6>
								<button className="gotham f14 border-0 bg-transparent orangeC fw600">
									Case study <IoIosArrowForward />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* PAGE TEXT END */}

			<ExploreAvail />

			{/* PAGE TEXT END */}
			<div className="softPos_container py-5 py-md-4 mb-0 mb-md-5">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-10 mx-auto">
								<h1 className="text-center fw-bold color1 gotham">
									Paymob SoftPOS demo
								</h1>
								<div>
									<img className="w-100" src={softPos} alt="" />
								</div>
								<div className="d-flex justify-content-center mt-4">
									<button className="gotham color1 border-0 bg-white py-2 fw500 f18 px-4">
										Request demo <IoIosArrowForward />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* PAGE TEXT END */}
		</Layout>
	);
};

export default ProductOverview;