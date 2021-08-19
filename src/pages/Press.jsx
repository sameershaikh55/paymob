import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import PressHero from "../components/PressHero";
import AboutPaymob from "../components/AboutPaymob";
import FeaturedNews from "../components/FeaturedNews";
import PressUpdate from "../components/PressUpdate";

const Press = () => {
	return (
		<Layout>
			<PressHero />
			<AboutPaymob />
			<FeaturedNews />
			<PressUpdate />
		</Layout>
	);
};

export default Press;
