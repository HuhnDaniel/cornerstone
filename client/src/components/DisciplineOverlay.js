import React, { Component } from 'react';

import API from '../utils/API';

class DisciplineOverlay extends Component {
    // const [discipline, setDiscipline] = useState();
    state = {};

    async componentDidUpdate(prevProps) {
        async function getDiscipline(currentDiscipline) {
            const { data } = await API.getDisciplineById(currentDiscipline);
            return data[0];
        }

        const discipline = await getDiscipline(this.props.currentDiscipline);
        console.log(discipline);

        if (this.props !== prevProps) {
            this.setState(discipline);
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