import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a href={link} className="project-link">View Project</a>
        </div>
    );
};

export default ProjectCard;