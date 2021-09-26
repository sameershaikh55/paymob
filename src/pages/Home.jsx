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

// IMPORT SEO
import Seo from "../components/Seo";

const Home = () => {
	return (
		<Layout>
			<Seo
				title="A payment engine for business apps. - Paymob"
				description="A payment engine for business apps. - Paymob"
				canonical="https://paymobtech.com/"
			/>
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
