import React, { useEffect, useState } from 'react';

import ProjectCard from './ProjectCard';
import NewlineText from '../../utils/Utilities';

import API from '../../utils/API';

const initialInfo = {};

function PartnerOverlay({ overlayVisibility, overlayPositioning, currentPartner }) {
    const [partnerInfo, setPartnerInfo] = useState(initialInfo);

    useEffect(() => {
        getNewPartner();
    }, [currentPartner]);

    async function getNewPartner() {
        if (partnerInfo.id != currentPartner) {
            const { data } = await API.getPartnerById(currentPartner);
            
            if (Boolean(data[0])) {
                setPartnerInfo(data[0]);
            } else {
                setPartnerInfo(initialInfo);
            }
        }
    }

    useEffect(() => {
        return () => {};
    }, []);

    if (overlayVisibility) {
        console.log(partnerInfo);
        return (
            <section data-id="margin" className={`absolute flex items-center justify-center top-0 left-0 pb-24 h-full w-full`}>
                <div className={`${overlayPositioning} flex flex-col md:flex-row p-4 w-full sm:rounded sm:w-11/12 bg-gray-400 opacity-100 overflow-y-auto md:overflow-y-hidden`}>
                    <div className="hidden md:flex flex-col flex-initial md:flex-1 p-4 overflow-y-auto">
                        <h1 className="text-2xl mb-4">{partnerInfo.name}</h1>
						<img className="rounded-md h-60 w-60 mx-auto mb-4" src={partnerInfo.image ? `https://res.cloudinary.com/cornerstone-collaborative/image/upload/v1654452515/Cornerstone/partners/${partnerInfo.image}` : "/images/default-user.svg"} alt={partnerInfo.name} />
                        {
                            partnerInfo.about ? (
                                <div className="text-lg mb-4">
                                    <NewlineText text={ partnerInfo.about } />
                                </div>
                            ) : null
                        }
                        <a href={`mailto:${partnerInfo.email}`} className="text-lg">{partnerInfo.email}</a>
                    </div>

                    <h2 data-id="close" className="absolute self-end text-xl cursor-pointer px-2 md:hidden">⨯</h2>
                    <h1 className="text-2xl mb-4 md:hidden">{partnerInfo.name}</h1>
					<img className="rounded-md h-60 w-60 mx-auto mb-4 md:hidden" src={partnerInfo.image ? `https://res.cloudinary.com/cornerstone-collaborative/image/upload/v1654452515/Cornerstone/partners/${partnerInfo.image}` : "/images/default-user.svg"} alt={partnerInfo.name} />
                    { 
                        partnerInfo.about ? (
                            <div className="text-lg mb-4 md:hidden">
                                <NewlineText text={ partnerInfo.about } />
                            </div>
                        ) : null
                    }
                    <a href={`mailto:${partnerInfo.email}`} className="text-lg md:hidden">{partnerInfo.email}</a>

                    <hr className="border-black mt-6 md:hidden" />

                    <div className="flex flex-col flex-2 p-4 md:pt-0 md:overflow-y-auto">
                        <h2 data-id="close" className="self-end text-xl cursor-pointer p-4 hidden md:block">⨯</h2>
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-8 pb-4">
                            {
                                partnerInfo.Projects ? (
                                    partnerInfo.Projects.map((project, i) => {
                                        return (
                                            <ProjectCard project={project} key={i} />
                                        )
                                    })
                                ) : (
                                    null
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            null
        );
    }
};

export default PartnerOverlay;