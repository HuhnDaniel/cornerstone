import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Project({ menuStatus, menuToggle }) {
    return (
        <main onClick={menuToggle} className="absolute min-h-full min-w-full">
            <Header menuStatus={menuStatus} />

			<Footer />
        </main>
    );
}

export default Project;