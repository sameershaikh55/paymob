import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroCerti from "../components/HeroCerti";
import CertificationDetail from "../components/CertificationDetail";
import SdkBrands from "../components/SdkBrands";
import SecurityCertificate from "../components/SecurityCertificate";

const Certifications = () => {
	return (
		<Layout>
			<HeroCerti />
			<CertificationDetail />
			<div className="my-5">
				<SdkBrands />
			</div>
			<SecurityCertificate />
		</Layout>
	);
};

export default Certifications;
