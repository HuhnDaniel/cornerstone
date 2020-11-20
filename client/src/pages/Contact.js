import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle} className="fixed top-0 left-0 h-full w-full">
            <Header menuStatus={menuStatus} />
			<h1>Contact</h1>
			<Footer />
		</main>
	);
}

export default Contact;