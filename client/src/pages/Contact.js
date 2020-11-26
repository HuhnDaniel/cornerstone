import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle} className="fixed top-0 left-0 h-full w-full text-2xl">
            <Header menuStatus={menuStatus} />

            <article className="m-8">
                Cornerstone Art &amp; Craft Collaborative LLC<br />
                OverlandPark, KS<br />
                Founding Principal - Barry Huhn<br />
                <a className="text-blue-600" href="mailto:cornerstone.art.craft@gmail.com">cornerstone.art.craft@gmail.com</a>
            </article>

            <article className="m-8">
                Technical Support<br />
                Submit an issue: <a className="text-blue-600" href="https://github.com/HuhnDaniel/cornerstone/issues/new" target="_blank"  rel="noopener noreferrer">Link</a>
            </article>

			<Footer />
		</main>
	);
}

export default Contact;