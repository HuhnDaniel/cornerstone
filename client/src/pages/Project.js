import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import PartnerOverlay from '../components/PartnerOverlay';
import Footer from '../components/Footer';

import API from '../utils/API';

function Project({ menuStatus, menuToggle }) {
    const { projId } = useParams();

    const [project, setProject] = useState({});
    const [overlayVisibility, setOverlayVisibility] = useState(false);    
    const [currentPartner, setCurrentPartner] = useState('');

    useEffect(() => {
        getProject();
    }, [projId]);

    async function getProject() {
        const { data } = await API.getProjectById(projId);

        setProject(data[0]);
    }

    function openOverlay(e) {
        const targetId = e.target.getAttribute('data-id');

        setCurrentPartner(targetId);
        setOverlayVisibility(true);
    }

    function closeOverlay(e) {
        switch (e.target.id) {
            case "margin":
            case "close":
            case "projectCard":
            case "cardHeader":
            case "projectName":
                setOverlayVisibility(false);
                setCurrentPartner('');
                break;
            default:
                break;
        }
    }

    return (
        <main onClick={menuToggle} className="absolute min-h-full min-w-full">
            <Header menuStatus={menuStatus} />

            {
                project ? (
                    <section className="relative flex flex-row p-8 md:p-16 pb-24">
                        <article className="flex-1 m-4">
                            <h1 className="text-3xl mb-8">{project.name}</h1>
                            {
                                project.Partner ? ( <h2 className="text-2xl mb-8"><span className="font-semibold">Project Partner(s): </span><span data-id={project.Partner.id} className="cursor-pointer" onClick={openOverlay.bind(this)}>{project.Partner.name}</span></h2> ) : ( null )
                            }
                            {
                                project.image ? ( <img src={`/images/${project.image}-rect.jpg`} alt={`${project.name}`}/> ) : ( null )
                            }
                            
                        </article>
                        <article className="flex flex-col flex-2 m-4">
                            <div className="flex flex-row m-4">
                                {
                                    project.client ? ( <h3 className="flex-1 text-xl text-center"><span className="font-semibold">Client: </span>{project.client}</h3> ) : ( null )
                                }
                                {
                                    project.location ? ( <h3 className="flex-1 text-xl text-center"><span className="font-semibold">Location: </span>{project.location}</h3> ) : ( null )
                                }
                            </div>

                            <p className="text-xl m-4">{project.overview}</p>
                            {
                                project.awards ? ( <p className="text-xl m-4"><span className="font-semibold">Awards: </span>{project.awards}</p> ) : ( null )
                            }
                            <p className="text-xl m-4"><span className="font-semibold">Completion Information: </span>{project.timeframe}</p>

                            <div className="flex flex-row m-4">
                                {
                                    project.company ? ( <h3 className="flex-1 text-lg text-center">Project experience while at {project.company}</h3> ) : ( null )
                                }
                                {
                                    project.role ? ( <h3 className="flex-1 text-lg text-center"><span className="font-semibold">Role: </span>{project.role}</h3> ) : ( null )
                                }
                            </div>
                        </article>

                        <PartnerOverlay overlayVisibility={overlayVisibility} currentPartner={currentPartner} closeOverlay={closeOverlay} />
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