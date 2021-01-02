import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import API from '../utils/API';

function Partners({ menuStatus, menuToggle }) {
	const [partnerList, setPartnerList] = useState([]);

    useEffect(() => {
        async function getPartners() {
            const { data } = await API.getPartners();

            setPartnerList(data);
        }

        getPartners();
    }, []);

	return (
		<main onClick={menuToggle} className="fixed top-0 left-0 h-full w-full">
            <Header menuStatus={menuStatus} />

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 pb-24">
                {
                    partnerList.map((partner, i) => {
                        return (
                            <article className={`bg-${partner.profilePic} bg-cover rounded-md text-white cursor-pointer mx-auto my-4 h-72 w-72 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105`} key={i}>
                                <div className="bg-black p-4 rounded-t bg-opacity-30">
                                    <h3 className="text-2xl">{partner.name}</h3>
                                </div>
                                
                                <span className="absolute bottom-0 right-0 p-2 text-sm rounded-tl bg-black bg-opacity-30">Specializes in {partner.primaryField}</span>
                                    
                            </article>
                        )
                    })
                }
            </section>
            
			<Footer />
		</main>
	);
}

export default Partners;