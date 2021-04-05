import React, { Component } from 'react';

import ProjectCard from './ProjectCard';

import API from '../utils/API';

const initialState = {};

class PartnerOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    async componentDidUpdate(prevProps) {
        async function getPartner(currentPartner) {
            const { data } = await API.getPartnerById(currentPartner);
            return data[0];
        }

        if (this.props !== prevProps && this.state.id != this.props.currentPartner) {
            const partner = await getPartner(this.props.currentPartner);

            if (Boolean(partner)) {
                this.setState(partner);
            } else {
                this.setState(initialState);
            }
        }
    }

    render() {
        if (this.props.overlayVisibility) {
            return (
                <section data-id="margin" className={`absolute flex items-center justify-center top-0 left-0 pb-24 h-full w-full`} onClick={this.props.closeOverlay}>
                    <div className={`${this.props.overlayPositioning} flex flex-col md:flex-row p-4 h-3/4 w-full sm:rounded sm:w-11/12 bg-gray-400 opacity-100 overflow-y-auto md:overflow-y-hidden`}>
                        <div className="hidden md:flex flex-col flex-initial md:flex-1 p-4 overflow-y-auto">
                            <h1 className="text-2xl mb-4">{this.state.name}</h1>
							<img className="rounded-md h-60 w-60 mx-auto mb-4" src={this.state.profilePic ? `/images/${this.state.profilePic}.jpg` : "/images/default-user.svg"} alt={this.state.name} />
                            <p className="text-lg mb-4">{this.state.about}</p>
                            <a href={`mailto:${this.state.email}`} className="text-lg">{this.state.email}</a>
                        </div>

                        <h2 data-id="close" className="absolute self-end z-50 text-xl cursor-pointer px-4 md:hidden">⨯</h2>
                        <h1 className="text-2xl mb-4 md:hidden">{this.state.name}</h1>
						<img className="rounded-md h-60 w-60 mx-auto mb-4 md:hidden" src={this.state.profilePic ? `/images/${this.state.profilePic}.jpg` : "/images/default-user.svg"} alt={this.state.name} />
                        <p className="text-lg mb-4 md:hidden">{this.state.about}</p>
                        <a href={`mailto:${this.state.email}`} className="text-lg md:hidden">{this.state.email}</a>

                        <div className="flex flex-col flex-2 p-4 md:pt-0 md:overflow-y-auto">
                            <h2 data-id="close" className="self-end text-xl cursor-pointer p-4 hidden md:block">⨯</h2>
                            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center px-8 pb-4">
                                {
                                    this.state.Projects ? (
                                        this.state.Projects.map((project, i) => {
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
}

export default PartnerOverlay;