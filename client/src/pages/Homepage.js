import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Homepage({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle} className="fixed top-0 left-0 bg-homepage min-h-full min-w-full bg-cover text-white">
            <Header menuStatus={menuStatus} />

            <span className="absolute bottom-0 right-0 m-2 text-sm">Photo by <a href="https://unsplash.com/@mana5280?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">mana5280</a> on <a href="https://unsplash.com/@mana5280?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span>
			<Footer />
		</main>
	);
}

export default Homepage;