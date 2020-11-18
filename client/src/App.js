import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './pages/Homepage';
import People from './pages/People';
import Projects from './pages/Projects';
import Fields from './pages/Fields';
import Contact from './pages/Contact';

function App() {
    const [menuStatus, setMenuStatus] = useState(false)

    function menuToggle(e) {
        e.preventDefault();

        if (menuStatus) {
            setMenuStatus(false);
        } else if (e.target.tagName === 'BUTTON') {
            setMenuStatus(true);
        }
    }

	return (
		<Router>
			<Switch>
				{/* <Route exact path="/people/" component={People} /> */}
				<Route exact path="/people/" children={ <People menuStatus={menuStatus} menuToggle={menuToggle} /> } />
				{/* <Route exact path="/projects/" component={Projects} /> */}
				<Route exact path="/projects/" children={ <Projects menuStatus={menuStatus} menuToggle={menuToggle} /> } />
				{/* <Route exact path="/fields/" component={Fields} /> */}
				<Route exact path="/fields/" children={ <Fields menuStatus={menuStatus} menuToggle={menuToggle} /> } />
				{/* <Route exact path="/contact/" component={Contact} /> */}
				<Route exact path="/contact/" children={ <Contact menuStatus={menuStatus} menuToggle={menuToggle} /> } />
				{/* <Route path="/" component={Homepage} /> */}
				<Route path="/" children={ <Homepage menuStatus={menuStatus} menuToggle={menuToggle} /> } />
			</Switch>
		</Router>
	);
}

export default App;
