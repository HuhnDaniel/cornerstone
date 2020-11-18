import React from 'react';

import Header from '../components/Header';

function Homepage({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle} className="fixed top-0 left-0 bg-homepage h-full w-full bg-cover">
            <Header menuStatus={menuStatus} textColor={"white"} />
		</main>
	);
}

export default Homepage;