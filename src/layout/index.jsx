import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useHooks } from "../Hooks/useHooks";

const Layout = ({ children }) => {
	const { isOpen, OnClick } = useHooks();

	return (
		<>
			<Header ClickEvent={OnClick} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
