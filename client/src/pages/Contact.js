import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact({ menuStatus, menuToggle }) {
	return (
		<main onClick={menuToggle} className="absolute top-0 left-0 bg-contact bg-fixed min-h-full min-w-full bg-cover text-white text-2xl">
            <Header menuStatus={menuStatus} />

			<section className="flex flex-col space-y-4 text-lg m-8 md:m-16 items-start justify-items-center bg-black p-4 rounded-lg bg-opacity-30 mb-24">
				<article>
					Cornerstone Art &amp; Craft Collaborative LLC<br />
					OverlandPark, KS<br />
					Founding Principal - Barry Huhn<br />
					<a className="text-blue-600" href="mailto:cornerstone.art.craft@gmail.com">cornerstone.art.craft@gmail.com</a>
				</article>

				<article>
					Technical Support<br />
					Submit an issue: <a className="text-blue-600" href="https://github.com/HuhnDaniel/cornerstone/issues/new" target="_blank"  rel="noopener noreferrer">Link</a>
				</article>
			</section>

			<Footer />
		</main>
	);
}

export default Contact;