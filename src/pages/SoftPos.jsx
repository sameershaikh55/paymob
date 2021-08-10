import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroSoft from "../components/HeroSoft";
import SdkBrands from "../components/SdkBrands";
import SoftDetails from "../components/SoftDetails";
import HiwSoft from "../components/HiwSoft";
import BespokeSolutions from "../components/BespokeSolutions";
import SystemComponent from "../components/SystemComponent";
import CaseStudies from "../components/CaseStudies";
import Benefits from "../components/Benefits";

const SoftPos = () => {
	return (
		<Layout>
			<HeroSoft />
			<SdkBrands />
			<SoftDetails />
			<HiwSoft />
			<BespokeSolutions />
			<SystemComponent />
			<Benefits />
			<CaseStudies />
		</Layout>
	);
};

export default SoftPos;
