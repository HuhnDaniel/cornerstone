import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './pages/Homepage';
import Partners from './pages/Partners';
import Disciplines from './pages/Disciplines';
import Contact from './pages/Contact';

function App() {
    const [menuStatus, setMenuStatus] = useState(false)

    function menuToggle(e) {
        if (menuStatus) {
            setMenuStatus(false);
        } else if (e.target.tagName === 'BUTTON') {
            setMenuStatus(true);
        }
    }

	return (
		<Router>
			<Switch>
				<Route exact path="/partners/" children={ <Partners menuStatus={menuStatus} menuToggle={menuToggle} /> } />
				<Route exact path="/disciplines/" children={ <Disciplines menuStatus={menuStatus} menuToggle={menuToggle} /> } />
				<Route exact path="/contact/" children={ <Contact menuStatus={menuStatus} menuToggle={menuToggle} /> } />
				<Route path="/" children={ <Homepage menuStatus={menuStatus} menuToggle={menuToggle} /> } />
			</Switch>
		</Router>
	);
}

export default App;
