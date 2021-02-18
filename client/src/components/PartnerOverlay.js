import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import API from '../utils/API';

const initialState = {};

class PartnerOverlay extends Component {
    state = initialState;

    async componentDidUpdate(prevProps) {
        async function getPartner(currentPartner) {
            const { data } = await API.getPartnerById(currentPartner);
            return data[0];
        }


        if (this.props !== prevProps) {
            const partner = await getPartner(this.props.currentPartner);
            console.log(partner);

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
                <section id="margin" className="absolute flex items-center justify-center top-0 left-0 h-full w-full pb-24" onClick={this.props.closeOverlay}>
                    <div className="flex flex-col md:flex-row h-11/12 w-full sm:rounded sm:w-11/12 bg-gray-400 opacity-100">
                        <div className="flex flex-col flex-1 px-4 pb-4 md:pt-4 overflow-y-auto">
                            <h2 id="close" className="self-end text-xl cursor-pointer p-4 md:hidden">⨯</h2>
                            <h2 className="text-2xl mb-4">{this.state.name}</h2>
                            <figure className={`bg-${this.state.profilePic} bg-cover rounded-md h-40 w-40 mx-auto mb-4`}></figure>
                            <a href={`mailto:${this.state.email}`} className="text-lg">{this.state.email}</a>
                        </div>
                        <div className="flex flex-col flex-2 p-4 md:pt-0 overflow-y-auto overflow-x-hidden">
                            <h2 id="close" className="self-end text-xl cursor-pointer p-4 hidden md:block">⨯</h2>
                            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 pb-24">
                                {
                                    this.state.Projects ? (
                                        this.state.Projects.map((project, i) => {
                                            return (
                                                <Link to={`/project/${project.id}`} className="relative rounded-md cursor-pointer inline-block m-4 h-40 w-40 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105" key={i}>
                                                    <img id="projectCard" className="rounded-md" src={`/images/${project.image}-sq.jpg`} alt={project.name} />
                                                    <div id="cardHeader" className="absolute top-0 left-0 bg-black p-4 rounded-t-md bg-opacity-30 w-40">
                                                        <h3 id="projectName" className="relative text-md text-white overflow-hidden truncate">{project.name}</h3>
                                                    </div>
                                                </Link>
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