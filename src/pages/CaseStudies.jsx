import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroCase from "../components/HeroCase";
import CaseStudiesBody from "../components/CaseStudiesBody";

const CaseStudies = () => {
	return (
		<Layout>
			<HeroCase />
			<CaseStudiesBody />
		</Layout>
	);
};

export default CaseStudies;
