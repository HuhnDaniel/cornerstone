import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';

import Header from '../../components/main_components/Header';
import PartnerOverlay from '../../components/main_components/PartnerOverlay';
import Footer from '../../components/main_components/Footer';

import API from '../../utils/API';

const emptyProject = {
    Partner: {},
    PartnerId: null,
    subDisciplineId: null,
    awards: "",
    client: "",
    id: null,
    path: "",
    image: "",
    link: "",
    location: "",
    name: "",
    overview: "",
    role: "",
    timeframe: ""
}

function Project({ menuStatus, menuToggle }) {
    const { projId } = useParams();

    const [project, setProject] = useState(emptyProject);
    const [overlayVisibility, setOverlayVisibility] = useState(false);
	const [overlayPositioning, setOverlayPositioning] = useState('absolute h-11/12');  
    const [currentPartner, setCurrentPartner] = useState('');

    let prevTopDistance = 0;

    useEffect(() => {
        setProject(emptyProject);
        getProject(projId);
        
        $(window).on('scroll', handleScroll);
    }, [projId]);
    useEffect(() => {
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    async function getProject(projId) {
        const { data } = await API.getProjectById(projId);

        setProject(data[0]);
    }

    function handleScroll() {
		const topDistance = $('[data-id="block"]').offset().top - $(window).scrollTop();

		if (prevTopDistance >= -16 && topDistance < -16) {
            setOverlayPositioning('fixed top-0 h-4/5');
		} else if (prevTopDistance < -16 && topDistance >= -16) {
			setOverlayPositioning('absolute h-11/12');
		}

		prevTopDistance = topDistance;     
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
            case "projectCard":
                setOverlayVisibility(false);
                setCurrentPartner('');
                break;
            default:
                break;
        }

        menuToggle(e);
    }

    function NewlineText(overview) {
        const text = overview.text;
        const newText = text.split('\n').map((str, i) => <p key={ i } className={ str === '' ? "h-7" : "" }>{ str }</p>);
        
        return newText;
    }

    return (
        <main onClick={closeOverlay} className="absolute min-h-full min-w-full">
            <Header menuStatus={menuStatus} />

            {
                project ? (
                    <section data-id="block" className="relative flex flex-col md:flex-row px-8 pt-2 md:px-16 pb-24">
                        <article className="flex-2 m-4">
                            <h1 className="text-3xl mb-8">{project.name}</h1>
                            {
                                project.Partner ? ( <h2 className="text-xl mb-8"><span className="font-semibold">Project Partner(s): </span><span data-id={project.Partner.id} className="cursor-pointer" onClick={openOverlay.bind(this)}>{project.Partner.name}</span></h2> ) : ( null )
                            }
                            {
                                project.image ? (
                                    <div className="max-h-screen h-full md:pb-24 pb-0">
                                    {
                                        project.image.split(".")[1] === "pdf" ? (
                                            <iframe src={`https://res.cloudinary.com/cornerstone-collaborative/image/upload/v1654454502/Cornerstone/projects/${project.image}#toolbar=0&view=FitH&embedded=true`} className="pr-8 h-full w-full" alt={`${project.name}`}/>
                                        ) : (
                                            <img src={`https://res.cloudinary.com/cornerstone-collaborative/image/upload/v1654454502/Cornerstone/projects/${project.image}`} className="pr-8 max-h-screen" alt={`${project.name}`}/>
                                        )
                                    }
                                    </div>
                                    
                                ) : (
                                    <img src="/images/default-project.svg" className="pr-8 max-h-screen" alt={`${project.name}`}/>
                                )
                            }
                        </article>

                        <article className="flex flex-col flex-1 m-4">
                            {
                                project.client ? ( <h3 className="m-4 mb-0 text-lg"><span className="font-semibold">Client: </span>{project.client}</h3> ) : ( null )
                            }
                            {
                                project.location ? ( <h3 className="m-4 text-lg"><span className="font-semibold">Location: </span>{project.location}</h3> ) : ( null )
                            }

                            <div className="m-4 text-lg">
                                <NewlineText text={ project.overview } />
                            </div>
                            <p className="m-4 text-lg"><span className="font-semibold">Completion: </span>{project.timeframe}</p>
                            {
                                project.awards ? ( <p className="m-4 text-lg"><span className="font-semibold">Awards: </span>{project.awards}</p> ) : ( null )
                            }

                            <div className="flex flex-row m-4 text-lg">
                                {
                                    project.company && project.role ? ( <h3 className="flex-1 text-gray-600">Project experience while at {project.company}, {project.role}</h3> ) : ( null )
                                }
                                {
                                    project.company && !project.role ? ( <h3 className="flex-1 text-gray-600">Project experience while at {project.company}</h3> ) : ( null )
                                }
                                {
                                    !project.company && project.role ? ( <h3 className="flex-1"><span className="font-semibold">Role: </span>{project.role}</h3> ) : ( null )
                                }
                            </div>
                        </article>

                        <PartnerOverlay overlayVisibility={overlayVisibility} overlayPositioning={overlayPositioning} currentPartner={currentPartner} />
                    </section>
                ) : (
                    null
                )
            }

			<Footer />
        </main>
    );
}

export default Project;