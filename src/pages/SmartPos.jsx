import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import SmartPosHero from "../components/SmartPosHero";
import MiniSpecification from "../components/MiniSpecification";

const SmartPos = () => {
	return (
		<Layout>
			<SmartPosHero />
			<MiniSpecification />
		</Layout>
	);
};

export default SmartPos;
