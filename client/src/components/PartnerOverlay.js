import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import ProjectCard from './ProjectCard';

import API from '../utils/API';

const initialInfo = {};

function PartnerOverlay({ overlayVisibility, currentPartner, closeOverlay }) {
    const [partnerInfo, setPartnerInfo] = useState(initialInfo);
	const [overlayPositioning, setOverlayPositioning] = useState('absolute');
    const [prevTopDistance, setPrevTopDistance] = useState(0);
    
    // let prevTopDistance = 0;

    useEffect(async () => {
        console.log("aaaah");
        if (partnerInfo.id != currentPartner) {
            const partner = await getPartner(currentPartner);
            
            if (Boolean(partner)) {
                setPartnerInfo(partner);
            } else {
                setPartnerInfo(initialInfo);
            }
        }

        $(window).on('scroll', handleScroll);
    }, [currentPartner]);
    useEffect(() => {
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []);

    async function getPartner(currentPartner) {
        const { data } = await API.getPartnerById(currentPartner);
        return data[0];
    }

    function handleScroll() {
        // let prevTopDistance = 0;
		const topDistance = $('[data-id="overlayBlock"]').offset().top - $(window).scrollTop();
        
		if (prevTopDistance >= 0 && topDistance < 0) {
            setOverlayPositioning('fixed top-0');
		} else if (prevTopDistance < 0 && topDistance >= 0) {
            setOverlayPositioning('absolute');
		}
        
		setPrevTopDistance(topDistance);    
        console.log(prevTopDistance, topDistance);
    }

    if (overlayVisibility) {
        return (
            <section data-id="margin" className={`absolute flex items-center justify-center top-0 left-0 pb-24 h-full w-full`} onClick={closeOverlay}>
                <div data-id="overlayBlock" className={`${overlayPositioning} flex flex-col md:flex-row p-4 h-3/4 w-full sm:rounded sm:w-11/12 bg-gray-400 opacity-100 overflow-y-auto md:overflow-y-hidden`}>
                    <div className="hidden md:flex flex-col flex-initial md:flex-1 p-4 overflow-y-auto">
                        <h1 className="text-2xl mb-4">{partnerInfo.name}</h1>
						<img className="rounded-md h-60 w-60 mx-auto mb-4" src={partnerInfo.profilePic ? `/images/${partnerInfo.profilePic}.jpg` : "/images/default-user.svg"} alt={partnerInfo.name} />
                        <p className="text-lg mb-4">{partnerInfo.about}</p>
                        <a href={`mailto:${partnerInfo.email}`} className="text-lg">{partnerInfo.email}</a>
                    </div>

                    <h2 data-id="close" className="absolute self-end text-xl cursor-pointer px-4 md:hidden">⨯</h2>
                    <h1 className="text-2xl mb-4 md:hidden">{partnerInfo.name}</h1>
					<img className="rounded-md h-60 w-60 mx-auto mb-4 md:hidden" src={partnerInfo.profilePic ? `/images/${partnerInfo.profilePic}.jpg` : "/images/default-user.svg"} alt={partnerInfo.name} />
                    <p className="text-lg mb-4 md:hidden">{partnerInfo.about}</p>
                    <a href={`mailto:${partnerInfo.email}`} className="text-lg md:hidden">{partnerInfo.email}</a>

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

// class PartnerOverlay extends Component {
//     constructor(props) {
//         super(props);
//         partnerInfo = initialState;
//     }

//     async componentDidUpdate(prevProps) {
//         async function getPartner(currentPartner) {
//             const { data } = await API.getPartnerById(currentPartner);
//             return data[0];
//         }

//         if (this.props !== prevProps && partnerInfo.id != currentPartner) {
//             const partner = await getPartner(currentPartner);

//             if (Boolean(partner)) {
//                 this.setState(partner);
//             } else {
//                 this.setState(initialState);
//             }
//         }
//     }

//     render() {
//         if (overlayVisibility) {
//             return (
//                 <section data-id="margin" className={`absolute flex items-center justify-center top-0 left-0 pb-24 h-full w-full`} onClick={closeOverlay}>
//                     <div className={`${overlayPositioning} flex flex-col md:flex-row p-4 h-3/4 w-full sm:rounded sm:w-11/12 bg-gray-400 opacity-100 overflow-y-auto md:overflow-y-hidden`}>
//                         <div className="hidden md:flex flex-col flex-initial md:flex-1 p-4 overflow-y-auto">
//                             <h1 className="text-2xl mb-4">{partnerInfo.name}</h1>
// 							<img className="rounded-md h-60 w-60 mx-auto mb-4" src={partnerInfo.profilePic ? `/images/${partnerInfo.profilePic}.jpg` : "/images/default-user.svg"} alt={partnerInfo.name} />
//                             <p className="text-lg mb-4">{partnerInfo.about}</p>
//                             <a href={`mailto:${partnerInfo.email}`} className="text-lg">{partnerInfo.email}</a>
//                         </div>

//                         <h2 data-id="close" className="absolute self-end text-xl cursor-pointer px-4 md:hidden">⨯</h2>
//                         <h1 className="text-2xl mb-4 md:hidden">{partnerInfo.name}</h1>
// 						<img className="rounded-md h-60 w-60 mx-auto mb-4 md:hidden" src={partnerInfo.profilePic ? `/images/${partnerInfo.profilePic}.jpg` : "/images/default-user.svg"} alt={partnerInfo.name} />
//                         <p className="text-lg mb-4 md:hidden">{partnerInfo.about}</p>
//                         <a href={`mailto:${partnerInfo.email}`} className="text-lg md:hidden">{partnerInfo.email}</a>

//                         <div className="flex flex-col flex-2 p-4 md:pt-0 md:overflow-y-auto">
//                             <h2 data-id="close" className="self-end text-xl cursor-pointer p-4 hidden md:block">⨯</h2>
//                             <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-8 pb-4">
//                                 {
//                                     partnerInfo.Projects ? (
//                                         partnerInfo.Projects.map((project, i) => {
//                                             return (
//                                                 <ProjectCard project={project} key={i} />
//                                             )
//                                         })
//                                     ) : (
//                                         null
//                                     )
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             );
//         } else {
//             return (
//                 null
//             );
//         }
//     };
// }

export default PartnerOverlay;