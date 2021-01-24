import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import API from '../utils/API';

function Project({ menuStatus, menuToggle }) {
    const { projId } = useParams();

    const [project, setProject] = useState({});

    useEffect(() => {
        getProject();
    }, []);

    async function getProject() {
        const { data } = await API.getProjectById(projId);

        setProject(data[0]);
    }

    return (
        <main onClick={menuToggle} className="absolute min-h-full min-w-full">
            <Header menuStatus={menuStatus} />

            {
                project ? (
                    <h1>{project.name}</h1>
                ) : (
                    null
                )
            }

			<Footer />
        </main>
    );
}

export default Project;