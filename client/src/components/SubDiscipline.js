import React from 'react';
import { Link } from 'react-router-dom';

function SubDiscipline({ subDiscipline }) {
    console.log(subDiscipline);
    return (
        <article>
            <h1 className="text-xl">{subDiscipline.name}</h1>
            <section className="whitespace-no-wrap overflow-x-auto">
                {
                    subDiscipline.Projects.map((project, i) => {
                        return (
                            <Link to={`/project/${project.id}`} key={i}>
                                <article className={`bg-${project.image}Sq bg-cover rounded-md cursor-pointer inline-block m-4 h-40 w-40 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105`}>
                                    <div className="bg-black p-4 rounded-t-md bg-opacity-30">
                                        <h3 className="text-md text-white overflow-hidden truncate">{project.name}</h3>
                                    </div>
                                </article>
                            </Link>
                        );
                    })
                }
            </section>
        </article>
    );
}

export default SubDiscipline;