import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import Header from '../../components/main_components/Header';
import DisciplineOverlay from '../../components/main_components/DisciplineOverlay';
import Footer from '../../components/main_components/Footer';

import API from '../../utils/API';

function Disciplines({ menuStatus, menuToggle }) {
    const [disciplineList, setDisciplineList] = useState([]);
    const [overlayVisibility, setOverlayVisibility] = useState(false);
	const [overlayPositioning, setOverlayPositioning] = useState('absolute h-11/12');
	const [currentDiscipline, setCurrentDiscipline] = useState('');

	let prevTopDistance = 0;

    useEffect(() => {
        getDisciplines();
        $(window).on('scroll', handleScroll);

        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);
    
    async function getDisciplines() {
        const { data } = await API.getDisciplines();

        setDisciplineList(data);
    }

    function handleScroll(e) {
		const topDistance = $('[data-id="block"]').offset().top - $(window).scrollTop();

		if (prevTopDistance >= -16 && topDistance < -16) {
			setOverlayPositioning('fixed top-0 h-4/5');
		} else if (prevTopDistance < -16 && topDistance >=-16) {
			setOverlayPositioning('absolute h-11/12');
		}

		prevTopDistance = topDistance;
    }

    function openOverlay(e) {
        const targetId = e.target.getAttribute('data-id');

        setCurrentDiscipline(targetId);
        setOverlayVisibility(true);
    }

    function closeOverlay(e) {
        switch (e.target.getAttribute('data-id')) {
            case "margin":
            case "close":
            case "disciplines":
                setOverlayVisibility(false);
                setCurrentDiscipline('');
                break;
            default:
                break;
        }
    }

    return (
        <main onClick={menuToggle} className="absolute min-h-full min-w-full" >
            <div onClick={closeOverlay}>
                <Header menuStatus={menuStatus} />

                <section data-id="block" className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pb-24">
                    {
                        disciplineList.map((discipline, i) => {
                            return (
                                <article className="rounded-md text-white cursor-pointer mx-auto my-4 h-72 w-72 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105" onClick={openOverlay.bind(this)} key={i}>
									<img data-id={discipline.id} className="rounded-md h-72 w-72" src={discipline.image ? `/images/${discipline.image}.jpg` : "/images/default-project.svg"} alt={discipline.name} />
                                    <div data-id={discipline.id} className="absolute top-0 bg-black p-4 rounded-t-md bg-opacity-30 w-72">
                                        <h3 data-id={discipline.id} className="text-2xl">{discipline.name}</h3>
                                    </div>
                                    {
                                        discipline.artistCredit ? (
                                            <span className="absolute bottom-0 right-0 p-2 text-sm rounded-tl rounded-br-md bg-black bg-opacity-30">Photo by <a href={discipline.artistCredit} target="_blank" rel="noopener noreferrer">{discipline.artistName}</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span>
                                        ) : (
                                            null
                                        )
                                    }
                                </article>
                            )
                        })
                    }

                    <DisciplineOverlay overlayVisibility={overlayVisibility} overlayPositioning={overlayPositioning} currentDiscipline={currentDiscipline} />
                </section>


                <Footer />
            </div>
        </main>
    );
}

export default Disciplines;