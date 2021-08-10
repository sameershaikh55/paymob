import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroSdk from "../components/HeroSdk";
import SdkBrands from "../components/SdkBrands";
import SdkDetails from "../components/SdkDetails";
import HowitWorks from "../components/HowitWorks";
import SystemComponent from "../components/SystemComponent";

const AndroidSdk = () => {
	return (
		<Layout>
			<HeroSdk />
			<SdkBrands />
			<SdkDetails />
			<HowitWorks />
			<SystemComponent />
		</Layout>
	);
};

export default AndroidSdk;
