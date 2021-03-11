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


        if (this.props !== prevProps) {
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
                <section data-id="margin" className="absolute flex items-center justify-center top-0 left-0 h-full w-full pb-24" onClick={this.props.closeOverlay}>
                    <div className="flex flex-col md:flex-row h-11/12 w-full sm:rounded sm:w-11/12 bg-gray-400 opacity-100">
                        <div className="flex flex-col flex-1 px-4 pb-4 md:pt-4 overflow-y-auto">
                            <h2 data-id="close" className="self-end text-xl cursor-pointer p-4 md:hidden">⨯</h2>
                            <h2 className="text-2xl mb-4">{this.state.name}</h2>
                            <div>
                                <figure className={`bg-${this.state.profilePic} bg-cover rounded-md h-40 w-40 mx-auto md:mx-4 mb-4`}></figure>
                                <p className="text-lg mb-4">{this.state.about}</p>
                            </div>
                            <a href={`mailto:${this.state.email}`} className="text-lg">{this.state.email}</a>
                        </div>
                        <div className="flex flex-col flex-2 p-4 md:pt-0 overflow-y-auto overflow-x-hidden">
                            <h2 data-id="close" className="self-end text-xl cursor-pointer p-4 hidden md:block">⨯</h2>
                            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pb-24">
                                {
                                    this.state.Projects ? (
                                        this.state.Projects.map((project, i) => {
                                            return (
                                                <ProjectCard project={project} key={i} />
                                            )
                                        })
                                    ) : ( null )
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