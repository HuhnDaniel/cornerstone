import React from 'react';

import Header from '../components/Header';

function People({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle}>
            <Header menuStatus={menuStatus} textColor={"black"} />
			<h1>People</h1>
		</main>
	);
}

export default People;