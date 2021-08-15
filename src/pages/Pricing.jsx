import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import PriceHero from "../components/PriceHero";
import PricingDetails from "../components/PricingDetails";
import CoreFeatures from "../components/CoreFeatures";

const Pricing = () => {
	return (
		<Layout>
			<PriceHero />
			<PricingDetails />
			<CoreFeatures />
		</Layout>
	);
};

export default Pricing;
