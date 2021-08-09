import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import Hero from "../components/Hero";
import Products from "../components/Products";
import WhyMob from "../components/WhyMob";
import Brands from "../components/Brands";
import FinancialService from "../components/FinancialService";
import SystemComponent from "../components/SystemComponent";
import Insights from "../components/Insights";

const Home = () => {
	return (
		<Layout>
			<Hero />
			<FinancialService />
			<WhyMob />
			<Brands />
			<Products />
			<SystemComponent />
			<Insights />
		</Layout>
	);
};

export default Home;
