import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Switch } from "react-router-dom";

// IMPORTING PAGES
import Home from "./pages/Home.jsx";
import ProductOverview from "./pages/ProductOverview";

function App() {
	return (
		<Switch>
			{/* <Route exact path="/" component={Home} />
			<Route exact path="/productOverview" component={ProductOverview} /> */}
			<Route exact path="/" component={ProductOverview} />
		</Switch>
	);
}

export default App;
