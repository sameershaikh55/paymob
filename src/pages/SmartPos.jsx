import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import SmartPosHero from "../components/SmartPosHero";
import SmartSpecification from "../components/SmartSpecification";

const SmartPos = () => {
	return (
		<Layout>
			<SmartPosHero />
			<SmartSpecification />
		</Layout>
	);
};

export default SmartPos;
