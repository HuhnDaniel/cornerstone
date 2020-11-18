import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './pages/Homepage';
import Explore from './pages/Explore';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/explore/" component={Explore} />
				<Route path="/" component={Homepage} />
			</Switch>
		</Router>
	);
}

export default App;
