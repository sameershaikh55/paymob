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
import MerchantDashboard from "./pages/MerchantDashboard";
import AdminPortal from "./pages/AdminPortal";
import PaymentGatway from "./pages/PaymentGatway";
import Pricing from "./pages/Pricing";

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
			<Route exact path="/merchantDashboard" component={MerchantDashboard} />
			<Route exact path="/adminPortal" component={AdminPortal} />
			<Route exact path="/paymentGatway" component={PaymentGatway} />
			<Route exact path="/pricing" component={Pricing} />
		</Switch>
	);
}

export default App;
