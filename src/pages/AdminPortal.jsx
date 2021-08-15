import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import ApHero from "../components/ApHero";
import OurPaymentInfra from "../components/OurPaymentInfra";
import PreBuiltDash from "../components/PreBuiltDash";
import MoDetails from "../components/MoDetails";

const AdminPortal = () => {
	return (
		<Layout>
			<ApHero />
			<MoDetails adminP />
			<PreBuiltDash adminP />
			<OurPaymentInfra adminP />
		</Layout>
	);
};

export default AdminPortal;
