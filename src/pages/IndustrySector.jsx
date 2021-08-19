import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroIndustry from "../components/HeroIndustry";
import IndustryBody from "../components/IndustryBody";

const IndustrySector = () => {
	return (
		<Layout>
			<HeroIndustry ind />
			<IndustryBody />
		</Layout>
	);
};

export default IndustrySector;
