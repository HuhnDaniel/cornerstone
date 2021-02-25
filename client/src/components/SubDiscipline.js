import React from 'react';
import { Link } from 'react-router-dom';

import ProjectCard from './ProjectCard';

function SubDiscipline({ subDiscipline }) {
    return (
        <article>
            <h1 className="text-xl">{subDiscipline.name}</h1>
            <section className="whitespace-no-wrap overflow-x-auto">
                {
                    subDiscipline.Projects.map((project, i) => {
                        return (
                            <ProjectCard project={project} key={i} />
                        );
                    })
                }
            </section>
        </article>
    );
}

export default SubDiscipline;