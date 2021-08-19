import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroAbout from "../components/HeroAbout";
import AboutDetail from "../components/AboutDetail";
import OurTeam from "../components/OurTeam";
import AboutMoreDetails from "../components/AboutMoreDetails";

const About = () => {
	return (
		<Layout>
			<HeroAbout />
			<AboutDetail />
			<OurTeam />
			<AboutMoreDetails />
		</Layout>
	);
};

export default About;
