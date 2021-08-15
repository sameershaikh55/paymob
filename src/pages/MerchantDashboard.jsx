import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import OurPaymentInfra from "../components/OurPaymentInfra";
import MdHero from "../components/MdHero";
import MdDetails from "../components/MdDetails";
import PreBuiltDash from "../components/PreBuiltDash";

const MerchantDashboard = () => {
	return (
		<Layout>
			<MdHero />
			<MdDetails />
			<PreBuiltDash />
			<OurPaymentInfra md />
		</Layout>
	);
};

export default MerchantDashboard;
