import React from 'react';
import { Link } from 'react-router-dom';

function SubDiscipline({ subDiscipline }) {
    return (
        <article>
            <h1 className="text-xl">{subDiscipline.name}</h1>
            <section className="whitespace-no-wrap overflow-x-auto">
                {
                    subDiscipline.Projects.map((project, i) => {
                        return (
                            <Link to={`/project/${project.id}`} className="relative rounded-md cursor-pointer inline-block m-4 h-40 w-40 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105" key={i}>
                                <img src={`/images/${project.image}-sq.jpg`} alt={project.name} />
                                <div className="absolute top-0 left-0 bg-black p-4 rounded-t-md bg-opacity-30 w-40">
                                    <h3 className="relative text-md text-white overflow-hidden truncate">{project.name}</h3>
                                </div>
                            </Link>
                        );
                    })
                }
            </section>
        </article>
    );
}

export default SubDiscipline;