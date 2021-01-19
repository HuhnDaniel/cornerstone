import React, { Component } from 'react';

import API from '../utils/API';

const initialState = {
    Projects: [],
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
            console.log(discipline);
            console.log(Boolean(discipline));

            if (Boolean(discipline)) {
                this.setState(discipline);
            } else {
                this.setState(initialState);
            }
            console.log(this.state);
        }
    }

    render() {
        if (this.props.overlayVisibility) {
            return (
                <section id="margin" className={'fixed flex items-center justify-center top-0 left-0 h-full w-full'} onClick={this.props.closeOverlay}>
                    <div className="flex flex-row h-2/3 w-full sm:rounded sm:w-5/6 lg:w-2/3 bg-gray-400 opacity-100 overflow-y-auto">
                        <div className={`flex-1 bg-${this.state.image} bg-cover text-white min-h-72`}>
                            <h1>{this.state.field}</h1>
                            <p>{this.state.description}</p>
                        </div>
                        <div className="flex-2">hi</div>
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