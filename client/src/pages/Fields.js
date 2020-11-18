import React from 'react';

import Header from '../components/Header';

function Fields({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle}>
            <Header menuStatus={menuStatus} textColor={"black"} />
			<h1>Fields</h1>
		</main>
	);
}

export default Fields;