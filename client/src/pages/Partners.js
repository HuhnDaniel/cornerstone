import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import PartnerOverlay from '../components/PartnerOverlay';
import Footer from '../components/Footer';

import API from '../utils/API';

function Partners({ menuStatus, menuToggle }) {
	const [partnerList, setPartnerList] = useState([]);
    const [overlayVisibility, setOverlayVisibility] = useState(false);
    const [currentPartner, setCurrentPartner] = useState('');

    useEffect(() => {
        getPartners();
    }, []);
    
    async function getPartners() {
        const { data } = await API.getPartners();

        setPartnerList(data)
    }

    function openOverlay(e) {
        const targetId = e.target.getAttribute('data-id');

        setCurrentPartner(targetId);
        setOverlayVisibility(true);
    }

    function closeOverlay(e) {
        switch (e.target.getAttribute('data-id')) {
            case "margin":
            case "close":
            case "partners":
                setOverlayVisibility(false);
                setCurrentPartner('');
                break;
            default:
                break;
        }
    }

	return (
        <main onClick={menuToggle} className="absolute min-h-full min-w-full" onClick={closeOverlay}>
            <Header menuStatus={menuStatus} />
            
            <section className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pb-24">
                {
                    partnerList.map((partner, i) => {
                        return (
                            <article data-id={partner.id} className={`bg-${partner.profilePic} bg-cover rounded-md text-white cursor-pointer mx-auto my-4 h-72 w-72 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105`} onClick={openOverlay.bind(this)} key={i}>
                                <div data-id={partner.id} className="bg-black p-4 rounded-t bg-opacity-30">
                                    <h3 data-id={partner.id} className="text-2xl">{partner.name}</h3>
                                </div>
                            </article>
                        )
                    })
                }

                <PartnerOverlay overlayVisibility={overlayVisibility} currentPartner={currentPartner} />
            </section>
            
			<Footer />
		</main>
	);
}

export default Partners;