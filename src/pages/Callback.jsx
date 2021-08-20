import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import CallBackHome from "../components/CallBackHome";
import CallbackApp from "../components/CallbackApp";
import HowitWorks from "../components/HowitWorks";

const Callback = () => {
	return (
		<Layout>
			<CallBackHome />
			<CallbackApp />
			<div className="howItWorks_container">
				<HowitWorks callback />
			</div>
		</Layout>
	);
};

export default Callback;
