import React from "react";

// IMPORTING COMPONENTS
import HeroMpos from "../components/HeroMpos";
import Specifications from "../components/Specifications";
import Layout from "../layout";

const MposCard = () => {
	return (
		<Layout>
			<HeroMpos />
			<Specifications />
		</Layout>
	);
};

export default MposCard;
