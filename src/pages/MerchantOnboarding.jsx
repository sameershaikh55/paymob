import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import MoHero from "../components/MoHero";
import MoDetails from "../components/MoDetails";
import OnBoarding from "../components/OnBoarding";
import OurPaymentInfra from "../components/OurPaymentInfra";

const MerchantOnboarding = () => {
	return (
		<Layout>
			<MoHero />
			<MoDetails />
			<OnBoarding />
			<OurPaymentInfra />
		</Layout>
	);
};

export default MerchantOnboarding;
