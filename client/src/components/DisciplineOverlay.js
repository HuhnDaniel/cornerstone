import React, { Component } from 'react';

import SubDiscipline from './SubDiscipline';

import API from '../utils/API';

const initialState = {
    SubDisciplines: [],
    artistCredit: '',
    artistName: '',
    description: '',
    field: '',
    id: '',
    image: ''
}

class DisciplineOverlay extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    async componentDidUpdate(prevProps) {
        async function getDiscipline(currentDiscipline) {
            const { data } = await API.getDisciplineById(currentDiscipline);
            return data[0];
        }


        if (this.props !== prevProps) {
            const discipline = await getDiscipline(this.props.currentDiscipline);

            if (Boolean(discipline)) {
                this.setState(discipline);
            } else {
                this.setState(initialState);
            }
        }
    }

    render() {
        if (this.props.overlayVisibility) {
            return (
                <section data-id="margin" className={`${this.props.overlayPositioning} flex items-center justify-center top-0 left-0 h-full w-full pb-16`}>
                    <div className="flex flex-col md:flex-row h-11/12 w-full sm:rounded sm:w-11/12 bg-gray-400 opacity-100">
                        <div className="flex flex-col flex-initial md:flex-1 px-4 pb-4 md:pt-4 overflow-y-auto">
                            <h2 data-id="close" className="self-end text-xl cursor-pointer p-4 md:hidden">⨯</h2>
                            <h1 className="text-2xl mb-4">{this.state.field}</h1>
							<img className="rounded-md h-60 w-60 mx-auto mb-4" src={this.state.image ? `/images/${this.state.image}.jpg` : null} alt={this.state.field} />
                            <p>{this.state.description}</p>
                        </div>
                        <div className="flex flex-col flex-1 md:flex-2 p-4 md:pt-0 overflow-y-auto overflow-x-hidden">
                            <h2 data-id="close" className="self-end text-xl cursor-pointer p-4 hidden md:block">⨯</h2>
                            {
                                this.state.SubDisciplines[0] ? (
                                    null
                                ) : (
                                    <div className="text-center text-3xl m-8">Under Development</div>
                                )
                            }
                            {
                                this.state.SubDisciplines.map((subDiscipline, i) => {
                                    return (
                                        <SubDiscipline subDiscipline={subDiscipline} key={i} />
                                    )
                                })
                            }
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

export default DisciplineOverlay;