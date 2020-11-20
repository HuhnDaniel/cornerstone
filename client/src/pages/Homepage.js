import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle} className="fixed top-0 left-0 bg-homepage min-h-full min-w-full bg-cover text-white">
            <Header menuStatus={menuStatus} />

			<Footer />
		</main>
	);
}

export default Homepage;