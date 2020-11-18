import React from 'react';

import Header from '../components/Header';

function Contact({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle}>
            <Header menuStatus={menuStatus} textColor={"black"} />
			<h1>Contact</h1>
		</main>
	);
}

export default Contact;