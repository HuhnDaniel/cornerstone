import React, { useEffect, useReducer, useState } from 'react';
import $ from 'jquery';

import Header from '../components/Header';
import PartnerOverlay from '../components/PartnerOverlay';
import Footer from '../components/Footer';

import API from '../utils/API';

function Partners({ menuStatus, menuToggle }) {
	const [partnerList, setPartnerList] = useState([]);
	const [overlayVisibility, setOverlayVisibility] = useState(false);
	const [overlayPositioning, setOverlayPositioning] = useState('absolute');
	const [currentPartner, setCurrentPartner] = useState('');
	
	let prevTopDistance = 0;
	let prevBottomDistance = 0;

    useEffect(() => {
        getPartners();
        $(window).on('scroll', handleScroll);

        return () => {
            $(window).off('scroll', handleScroll);
            console.log('Unloaded');
        };
    }, []);
    
    async function getPartners() {
        const { data } = await API.getPartners();

        setPartnerList(data)
    }

    function handleScroll(e) {
		const topDistance = $('[data-id="partnerBlock"]').offset().top - $(window).scrollTop();
		const bottomDistance = $('[data-id="footer"]').offset().top - ($(window).scrollTop() + $(window).height());
console.log(topDistance);
		if (prevTopDistance >= 0 && topDistance < 0) {
			setOverlayPositioning('fixed');
		} else if (prevTopDistance < 0 && topDistance >=0) {
			setOverlayPositioning('absolute');
		}

		prevTopDistance = topDistance;
		prevBottomDistance = bottomDistance;         
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
        <main onClick={menuToggle} className="absolute min-h-full min-w-full">
            <div onClick={closeOverlay}>
                <Header menuStatus={menuStatus} />
                
                <section data-id="partnerBlock" className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pb-24">
                    {
                        partnerList.map((partner, i) => {
                            return (
                                <article data-id={partner.id} className="rounded-md text-white cursor-pointer mx-auto my-4 h-72 w-72 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105" onClick={openOverlay.bind(this)} key={i}>
									<img data-id={partner.id} className="rounded-md h-72 w-72" src={partner.profilePic ? `/images/${partner.profilePic}.jpg` : "/images/default-user.svg"} alt={partner.name} />
                                    <div data-id={partner.id} className="absolute top-0 bg-black p-4 rounded-t bg-opacity-30 w-72">
                                        <h3 data-id={partner.id} className="text-2xl">{partner.name}</h3>
                                    </div>
                                </article>
                            )
                        })
                    }

                    <PartnerOverlay overlayVisibility={overlayVisibility} overlayPositioning={overlayPositioning} currentPartner={currentPartner} />
                </section>
                
                <Footer />
            </div>
		</main>
	);
}

export default Partners;