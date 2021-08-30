import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import InHouseBody from "../components/InHouseBody";
import InHouseTableOne from "../components/InHouseTableOne";
import InHouseDetail from "../components/InHouseDetail";

const InHouseDeployement = () => {
	return (
		<Layout>
			<InHouseBody />
			<InHouseDetail />		
			<InHouseTableOne />
		</Layout>
	);
};

export default InHouseDeployement;
