import React from 'react';

import Header from '../components/Header';

function Projects({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle}>
            <Header menuStatus={menuStatus} textColor={"black"} />
			<h1>Projects</h1>
		</main>
	);
}

export default Projects;