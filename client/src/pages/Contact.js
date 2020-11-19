import React from 'react';

import Header from '../components/Header';

function Contact({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle} className="fixed top-0 left-0 h-full w-full">
            <Header menuStatus={menuStatus} textColor={"black"} />
			<h1>Contact</h1>
		</main>
	);
}

export default Contact;