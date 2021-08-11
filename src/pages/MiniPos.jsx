import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import MiniPosHero from "../components/MiniPosHero";
import MiniSpecification from "../components/MiniSpecification";

const MiniPos = () => {
	return (
		<Layout>
			<MiniPosHero />
			<MiniSpecification />
		</Layout>
	);
};

export default MiniPos;
