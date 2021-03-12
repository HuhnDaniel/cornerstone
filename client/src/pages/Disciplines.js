import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import DisciplineOverlay from '../components/DisciplineOverlay';
import Footer from '../components/Footer';

import API from '../utils/API';

function Disciplines({ menuStatus, menuToggle }) {
    const [disciplineList, setDisciplineList] = useState([]);
    const [overlayVisibility, setOverlayVisibility] = useState(false);
    const [currentDiscipline, setCurrentDiscipline] = useState('');

    useEffect(() => {
        getDisciplines();

        return () => {};
    }, []);
    
    async function getDisciplines() {
        const { data } = await API.getDisciplines();

        setDisciplineList(data)
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

                <section className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pb-24">
                    {
                        disciplineList.map((discipline, i) => {
                            return (
                                <article data-id={discipline.id} className={`bg-${discipline.image} bg-cover rounded-md text-white cursor-pointer mx-auto my-4 h-72 w-72 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105`} onClick={openOverlay.bind(this)} key={i}>
                                    <div data-id={discipline.id} className="bg-black p-4 rounded-t-md bg-opacity-30">
                                        <h3 data-id={discipline.id} className="text-2xl">{discipline.field}</h3>
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

                    <DisciplineOverlay overlayVisibility={overlayVisibility} currentDiscipline={currentDiscipline} />
                </section>


                <Footer />
            </div>
        </main>
    );
}

export default Disciplines;