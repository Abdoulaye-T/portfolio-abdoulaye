import React from 'react';

const SkillCard = ({ skill, level }) => {
    return (
        <div className="skill-card">
            <h3>{skill}</h3>
            <p>Level: {level}</p>
        </div>
    );
};

export default SkillCard;