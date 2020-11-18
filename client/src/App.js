import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './pages/Homepage';
import People from './pages/People';
import Projects from './pages/Projects';
import Fields from './pages/Fields';
import Contact from './pages/Contact';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/people/" component={People} />
				<Route exact path="/projects/" component={Projects} />
				<Route exact path="/fields/" component={Fields} />
				<Route exact path="/contact/" component={Contact} />
				<Route path="/" component={Homepage} />
			</Switch>
		</Router>
	);
}

export default App;
