import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Switch } from "react-router-dom";

// IMPORTING PAGES
import Home from "./pages/Home.jsx";
import ProductOverview from "./pages/ProductOverview";
import AndroidSdk from "./pages/AndroidSdk";
import SoftPos from "./pages/SoftPos";
import MposCard from "./pages/MposCard";
import MiniPos from "./pages/MiniPos";
import SmartPos from "./pages/SmartPos";
import MerchantOnboarding from "./pages/MerchantOnboarding";

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/productOverview" component={ProductOverview} />
			<Route exact path="/androidSdk" component={AndroidSdk} />
			<Route exact path="/softPos" component={SoftPos} />
			<Route exact path="/mposCard" component={MposCard} />
			<Route exact path="/miniPos" component={MiniPos} />
			<Route exact path="/smartPos" component={SmartPos} />
			<Route exact path="/merchantOnboarding" component={MerchantOnboarding} />
		</Switch>
	);
}

export default App;
