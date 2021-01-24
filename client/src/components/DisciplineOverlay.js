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
    state = initialState;

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
                <section id="margin" className="absolute flex items-center justify-center top-0 left-0 h-full w-full pb-24" onClick={this.props.closeOverlay}>
                    <div className="flex flex-row h-11/12 w-full sm:rounded sm:w-11/12 bg-gray-400 opacity-100">
                        <div className="flex-1 p-4 overflow-y-auto">
                            <h1 className="text-2xl mb-4">{this.state.field}</h1>
                            <figure className={`bg-${this.state.image} bg-cover rounded-md h-72 w-72 mx-auto mb-4`}></figure>
                            <p className="text-lg">{this.state.description}</p>
                        </div>
                        <div className="flex flex-col flex-2 p-4 overflow-y-auto overflow-x-hidden">
                            <h2 id="close" className="self-end text-xl mx-2 cursor-pointer mb-4">⨯</h2>
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