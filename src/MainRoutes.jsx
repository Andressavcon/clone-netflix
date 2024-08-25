import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Accounts } from "./pages/Accounts";
import { MoviesProvider } from "./context/Movies";
import { SearchResults } from "./pages/SearchResults";

function MainRoutes() {
	return (
		<>
			<MoviesProvider>
				<Router>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/accounts" element={<Accounts />} />
						<Route path="/home" element={<Home />} />
						<Route path="/search" element={<SearchResults />} />
					</Routes>
				</Router>
			</MoviesProvider>
		</>
	);
}

export default MainRoutes;
