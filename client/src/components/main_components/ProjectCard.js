import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    return (
        <Link to={`/project/${project.id}`} className="relative rounded-md cursor-pointer inline-block m-4 h-40 w-40 hover:shadow-md transition transition-transform duration-200 transform hover:scale-105">
            {
                project.image.split(".")[1] === "pdf" ? (
                    <embed data-id="projectCard" className="rounded-md max-w-full h-full" src={project.image ? `https://res.cloudinary.com/cornerstone-collaborative/image/upload/c_thumb,w_200,ar_1:1,g_face/v1654454503/Cornerstone/projects/${project.image}#toolbar=0` : "/images/default-project.svg"} alt={project.name} />

                ) : (
                    <img data-id="projectCard" className="rounded-md" src={project.image ? `https://res.cloudinary.com/cornerstone-collaborative/image/upload/c_thumb,w_200,ar_1:1,g_face/v1654454503/Cornerstone/projects/${project.image}` : "/images/default-project.svg"} alt={project.name} />
                )
            }
            <div data-id="projectCard" className="absolute top-0 left-0 bg-black p-4 rounded-t-md bg-opacity-30 w-40">
                <h3 data-id="projectCard" className="relative text-md text-white leading-4 whitespace-normal">{project.name}</h3>
            </div>
        </Link>
    )
}

export default ProjectCard;