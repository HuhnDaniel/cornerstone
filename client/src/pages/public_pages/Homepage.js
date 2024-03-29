import React, { useState } from 'react';

import Header from '../../components/main_components/Header';
import Footer from '../../components/main_components/Footer';

function Homepage({ menuStatus, menuToggle }) {
    const [aboutUsStatus, setAboutUsStatus] = useState(false);

    function aboutUsToggle(e) {
		if (aboutUsStatus) {
			setAboutUsStatus(false);
		} else {
			setAboutUsStatus(true);
		}
    };

	return (
        <main onClick={menuToggle} className="absolute top-0 left-0 bg-homepage bg-fixed min-h-full text-white min-w-full bg-cover">
            <Header menuStatus={menuStatus} aboutUsToggle={aboutUsToggle} isHome={true} />
            
            {
                aboutUsStatus ? (
                    <article data-id="block" className="flex flex-col space-y-4 text-lg m-8 md:m-16 items-center justify-items-center bg-black pt-2 pb-4 rounded-lg bg-opacity-40 mb-24">
                        <h2 data-id="close" className="self-end text-xl cursor-pointer px-4" onClick={aboutUsToggle}>⨯</h2>
                        <p className="w-4/5">The name is the brand - we are design and technical professionals, collaborating together to bring art to our disciplines and craftsmanship to our projects. Our skills range from architecture to graphic arts, and from creative writing to web development. Commitment to art and craft is the cornerstone of our work - building a reliable foundation for the services we provide.</p>
                        <p className="w-4/5">We believe all work has intrinsic value. Some of the work on this web site is for business purposes, and some is a form of creative expression. All is intended as contribution to the common good as we complement each other's skills and strengths.</p>
                        <p className="w-4/5">If you have a project you would like us to collaborate with you on as a client - or if you want to bring your skills to the group - please reach out to one of our maker-partners. You can search for our offerings and project examples either by "Design Disciplines" or by "Collaboration Partners".</p>
                    </article>
                ) : (
                    null
                )
            }

            <span className="absolute bottom-0 right-0 m-2 text-sm">Photo by <a href="https://unsplash.com/@mana5280?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">mana5280</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span>

			<Footer />
		</main>
	);
}

export default Homepage;