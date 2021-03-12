import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project.id}`} className="relative rounded-md cursor-pointer inline-block m-4 h-40 w-40 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105">
            <img data-id="projectCard" className="rounded-md" src={`/images/${project.image}-sq.jpg`} alt={project.name} />
            <div data-id="projectCard" className="absolute top-0 left-0 bg-black p-4 rounded-t-md bg-opacity-30 w-40">
                <h3 data-id="projectCard" className="relative text-md text-white leading-4 whitespace-normal">{project.name}</h3>
            </div>
        </Link>
    )
}

export default ProjectCard;